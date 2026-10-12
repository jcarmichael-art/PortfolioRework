import styles from './Modal.module.css'

export default function Modal({ repo, onClose })
{
    return (
        <div className={styles.overlay}>
            <div className={styles.divBox}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">X</button>

                <div className={styles.kicker}>Repository</div>
                <h2 className={styles.title}>{repo.name}</h2>
                <p className={styles.desc}>{repo.description || "No description provided."}</p>

                <div className={styles.specs}>
                    <div className={styles.cell}>
                        <div className={styles.label}>Language</div>
                        <div className={styles.value}>{repo.language || "N/A"}</div>
                    </div>

                    <div className={styles.cell}>
                        <div className={styles.label}>Created</div>
                        <div className={styles.value}>{repo.created_at.slice(0, 10)}</div>
                    </div>

                    <div className={styles.cell}>
                        <div className={styles.label}>Last updated</div>
                        <div className={styles.value}>{repo.updated_at.slice(0, 10)}</div>
                    </div>

                    <div className={styles.cell}>
                        <div className={styles.label}>Stars</div>
                        <div className={styles.value}>{repo.stargazers_count}</div>
                    </div>

                    <div className={styles.cell}>
                        <div className={styles.label}>Forks</div>
                        <div className={styles.value}>{repo.forks}</div>
                    </div>

                    <div className={styles.cell}>
                        <div className={styles.label}>Size</div>
                        <div className={styles.value}>{(repo.size / 1024).toFixed(2)} MB</div>
                    </div>
                </div>

                {repo.topics.length > 0 && (
                    <div className={styles.tags}>
                        {repo.topics.map((topic) => (
                            <span key={topic} className={styles.tag}>{topic}</span>
                        ))}
                    </div>
                )}

                <div className={styles.actions}>
                    <a className={styles.btn} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                    {repo.homepage && (<a className={styles.btn} href={repo.homepage} target="_blank" rel="noopener noreferrer">Open Project</a>)}  
                </div>
                    
            </div>
        </div>
    )
}