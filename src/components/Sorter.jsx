

export default function sorter(safeSortRepos, selectedValue)
    {

        if (selectedValue === 'Last Updated')
        {
            safeSortRepos.sort((a,b) => new Date(a.updated_at) - new Date(b.updated_at))
        } else if (selectedValue === 'Name')
        {
            safeSortRepos.sort((a,b) => a.name.localeCompare(b.name))
        } else if (selectedValue === 'Oldest')
        {
            safeSortRepos.sort((a,b) => new Date(a.created_at) - new Date(b.created_at))
        } else if (selectedValue === 'Newest')
        {
            safeSortRepos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
        }
    }