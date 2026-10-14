import styles from './WorkHistory.module.css'

export default function WorkHistory()
{
    const jobs = [
        {
            name: 'Valley Tool Inc',
            title: 'Your job title here',
            start: 'Feb 2017',
            end: 'Present',
            current: true,
            bullets: [
            'Redesigned production processes to cut waste and keep work moving',
            'Saved 300+ hours by modernizing legacy code',
             ],
        },
        {
            name: 'Basecamp Coding Academy',
            title: 'Student, software development',
            start: 'May 2026',
            end: 'Present',
            current: true,
            bullets: [
            'Applying hands-on machining experience to software problems, from debugging to automation',
            'Built a Tetris clone using coordinate offsets to track block positions',
            ],
        },
    ]

    return (
        <div id="work" className={styles.history}>
            <h2 className={styles.sectionTitle}>Work History</h2>

            {jobs.map((job) => (
                <div
                    key={job.name}
                    className={job.current ? `${styles.job} ${styles.now}` : styles.job}
                >
                    <div className={styles.date}>
                        {job.start} – {job.current ? <em>{job.end}</em> : job.end}
                    </div>
                    <div className={styles.body}>
                        <p className={styles.company}>{job.name}</p>
                        <p className={styles.title}>{job.title}</p>
                        <ul className={styles.bullets}>
                            {job.bullets.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}