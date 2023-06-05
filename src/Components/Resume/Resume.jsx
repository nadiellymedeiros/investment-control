import React from "react";
import styles from "./Resume.module.css";
import ResumeItem from "../ResumeItem/ResumeItem";

export default function Resume({ valueBrazil, valueEUA, valueBonds }) {
  return (
    <div className={styles.container}>
      <ResumeItem title="Ações Brasil" value={valueBrazil} />
      <ResumeItem title="Ações EUA" value={valueEUA} />
      <ResumeItem title="Renda Fixa BR" value={valueBonds} />
    </div>
  );
}
