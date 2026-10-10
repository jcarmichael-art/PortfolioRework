import { useState } from "react";

import styles from "./AboutMe.module.css";

export default function AboutMe(){


    return (
        <>

        <div className={styles.container}>

        <img src="pfp.png"></img>

        <div className="textBox">

        <h1 className={styles.text}> I'm Jacob,</h1>
        <p className={styles.mutedText}>{`I am a machinist and software developer from North Mississippi. I'm a problem solver who likes getting deep into the weeds. I translate solutions across trades, from CNC offsets to game logic, and I'm focused on automation that delivers immediate results without slowing the system down.`} </p>

        </div>
        </div>

        </>
    );



}