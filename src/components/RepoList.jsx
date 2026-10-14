export default async function RepoList(userName, setRepos, setLoading, setError)
{            
    try
    {
        setLoading(true);
        setError(null);

        const response = await fetch(
            `https://api.github.com/users/${userName}/repos`
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