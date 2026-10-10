import { useState } from "react";

import styles from './Modal.module.css'

export default function Modal({repo, onClose})
{




    return (
        <>
        <div className={styles.overlay}>
            <div className={styles.divBox}>
            <a className={styles.text}  > <button className={styles.btn} onClick={onClose}> X </button> </a>
            </div>
        </div>
        </>
    )
}