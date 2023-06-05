import React from "react";
import styles from "./GridItem.module.css";
import { FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  const date = new Date(item.dateField);

  // const formatDate = (date) => {
  //   let year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();

  //   return `${day}/${month}/${year}`;
  // };
  // const date = new Date();

  // const formatDate = new Intl.DateTimeFormat("pt-br", {
  //   dateStyle: "short",
  // });

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // console.log(formatDate);

  // console.log(date);
  // console.log(day);
  // console.log(month);
  // console.log(year);

  // console.log(formatDate.format(date));

  return (
    <>
      <div className={styles.tr}>
        {/* <div className={styles.td}>{item.dateField}</div> */}
        <div className={styles.td}>
          {/* {formatDate.format(new Date(item.dateField))} */}
          {item.dateField}
        </div>
        <div className={styles.td}>{item.active}</div>
        <div className={styles.td}>{item.quantity}</div>
        {/* <div className={styles.td}>{item.averagePrice}</div> */}
        {/* <div className={styles.td}>{item.price}</div> */}
        <div className={styles.td}>{item.purchase}</div>
        {/* <div className={styles.td}>{item.updated}</div> */}
        <div className={styles.td}>{item.location}</div>

        <div className={styles.td}>
          <FaTrash onClick={() => onDelete(item.id)} />
        </div>
      </div>
    </>
  );
};

export default GridItem;
