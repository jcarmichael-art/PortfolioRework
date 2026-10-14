import styles from './Skills.module.css'






export default function Skills()
{

    const skills = {
    'languages': [ 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'React', 'G-code', 'Git'],

    'software': ['Visual Studio Code', 'Partmaker', 'Solidworks', 'Fusion 360', 'Cura', 
                'GrabCAD', 'Excel', 'Autodesk Multichannel Editor'],

    'hardskills': ['5 Axis machine setup', 'Manual mill/Lathe', 'Production scheduling and management', 
                'Advanced CNC machine repair', 'Fixture design', 'Production process design']
    };

    return (
        <>
        <div id="skills" className={styles.tags}>

        <h1 className={styles.text}>Skills</h1>
        <p className={styles.mutedText}>Languages</p>
        {skills.languages.map((skill) => ( <span key={skill} className={styles.tag}>{skill}</span>))}
        <p className={styles.mutedText}>Software</p>
        {skills.software.map((skill) => ( <span key={skill} className={styles.tag}>{skill}</span>))}
        <p className={styles.mutedText}>Hands-On</p>
        {skills.hardskills.map((skill) => ( <span key={skill} className={styles.tag}>{skill}</span>))}
        </div>
        </>
    )
}