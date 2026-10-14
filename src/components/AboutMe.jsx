import { useState } from "react";

import styles from "./AboutMe.module.css";

export default function AboutMe(){


    return (
        <>

        <div className={styles.container}>

        <img src="pfp.png"></img>

        <div className="textBox">

        <h1 className={styles.text}> I'm Jacob,</h1>
        <p className={styles.mutedText}>{`A machinist and software developer from North Mississippi. I go after the root cause, not the symptom, and I carry what works in one shop over to the next, whether that shop has a spindle or a server. Solving problems is both my hobby and career.`} </p>

        </div>
        </div>

        </>
    );



}