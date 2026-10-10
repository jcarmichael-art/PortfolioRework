import { useState, useEffect } from "react";

import Modal from './Modal.jsx'

import styles from './GithubFetch.module.css'


export default function GetRepos() {
    const [selectedRepo, setSelectedRepo] = useState(null)
    const [selectedValue, setSelectedValue] = useState('name')
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState("jcarmichael-art");

    useEffect(() => 
    {
        async function RepoList()
        {
            try
            {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://api.github.com/users/jcarmichael-art/repos`
                );

                if (!response.ok)
                {
                    throw new Error(`Github returned ${response.status}`);
                }

                const data = await response.json();
                setRepos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        RepoList();
    }, [userName]);

    if (loading)
    {
        return <p className="text">Loading...</p>
    }
    if (error)
    {
        return <p className="text">Something went wrong {error}</p>
    }
    const safeSortRepos = [...repos];

    function sorter()
    {
        if (selectedValue === 'updated')
        {
            safeSortRepos.sort((a,b) => new Date(a.updated_at) - new Date(b.updated_at))
        } else if (selectedValue === 'name')
        {
            safeSortRepos.sort((a,b) => a.name.localeCompare(b.name))
        } else if (selectedValue === 'oldest')
        {
            safeSortRepos.sort((a,b) => new Date(a.created_at) - new Date(b.created_at))
        } else if (selectedValue === 'newest')
        {
            safeSortRepos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
        }
    }
    sorter()
    return (
        <>
        <select className={`${styles.mutedText}`}
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}>
            <option> updated</option>            
            <option> Name </option>
            <option> oldest</option>
            <option> newest</option>
        </select>
        <div className={styles.container}>


        {safeSortRepos.map((repo) =>
        {
            return (
            <div className={`${styles.box} ${styles.text}`}>
            <p1 className={styles.text}> {repo.name} </p1>
            <p1 className={styles.mutedText}> {repo.description} </p1>
            <button className={styles.btn} onClick={() => setSelectedRepo(repo)}>More details</button>
            {selectedRepo && (
                <Modal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
            ) }


            </div>
            )
        })}
        </div>
        </>
    )


}


