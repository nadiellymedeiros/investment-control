import React from "react";
import styles from "./ResumeItem.module.css";

export default function Resume({ title, value }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}> {title}</div>
      </div>
      <div className={styles.total}>{value}</div>
    </div>
  );
}
