import React from "react";
import styles from "./Grid.module.css";
import GridItem from "../GridItem/GridItem";

export default function Grid({ itens, setItens }) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <div className={styles.tr}>
          <div className={styles.th}>Data</div>
          <div className={styles.th}>Ativo</div>
          <div className={styles.th}>Quantidade</div>
          {/* <div className={styles.th}>Valor médio</div> */}
          {/* <div className={styles.th}>Preço</div> */}
          <div className={styles.th}>Comprado por</div>
          {/* <div className={styles.th}>Valor atualizado</div> */}
          <div className={styles.th}>Locação</div>
          <div className={styles.th}></div>
        </div>
      </div>
      <div className={styles.tbody}>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
