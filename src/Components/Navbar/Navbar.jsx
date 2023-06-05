import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <nav>
            <a>Início</a>
            <a>Locação</a>
            <a>Ativos</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
