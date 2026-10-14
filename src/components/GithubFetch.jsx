import { useState, useEffect } from "react";
import RepoList from "./RepoList.jsx";
import Sorter from './Sorter.jsx';
import Modal from './Modal.jsx';
import styles from './GithubFetch.module.css';


export default function GetRepos() {
    const [selectedRepo, setSelectedRepo] = useState(null)
    const [selectedValue, setSelectedValue] = useState('Last Updated')
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('jcarmichael-art');

    useEffect(() => 
    {
        RepoList(userName, setRepos, setLoading, setError);
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

    Sorter(safeSortRepos, selectedValue);

    return (
        <>
        <div className={styles.controlsRow} id="projects">
        <h1 className={styles.text}>Projects</h1>    
        <select className={`${styles.custonSelectWraper} ${styles.mutedText}`}
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}>
            <option> Last Updated </option>            
            <option> Name </option>
            <option> Oldest </option>
            <option> Newest </option>
        </select>
   
        </div>
        <div className={styles.container}>

        {safeSortRepos.map((repo) =>
        {
            return (
            <div className={`${styles.box} ${styles.text}`}>
            <p1 className={styles.text}> {repo.name} </p1>
            <p1 className={styles.mutedText}> {repo.description} </p1>
            <button className={styles.btn} onClick={() => setSelectedRepo(repo)}>More details</button>
            </div>
            )
        })}

        {selectedRepo && (
            <Modal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
        ) }  
        </div>
        </>
    )


}


