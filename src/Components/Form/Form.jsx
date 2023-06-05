import React, { useState } from "react";
import Grid from "../Grid/Grid";
import styles from "./Form.module.css";

export default function Form({
  handleAdd,
  transactionsList,
  setTransactionsList,
}) {
  const [active, setActive] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [purchase, setPurchase] = useState("");
  const [updated, setUpdated] = useState("");
  const [location, setLocation] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [dateField, setDateField] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    // if (!quantity || !price) {
    //   alert("Informe a quantidade e o preço!");
    //   return;
    // } else if (price < 1) {
    //   alert("O preço tem que ser positivo!");
    //   return;
    // }

    if (!location) {
      alert("Informe a localização do ativo!");
      return;
    }

    const transaction = {
      id: generateID(),
      dateField: dateField,
      active: active,
      quantity: quantity,
      // price: price,
      purchase: purchase,
      // updated: updated,
      location: location,
      // averagePrice: averagePrice,
    };

    handleAdd(transaction);

    setActive("");
    setQuantity("");
    // setPrice("");
    setPurchase("");
    // setUpdated("");
    setLocation("");
    // setAveragePrice("");
    setDateField("");
  };

  const handleText = (e) => {
    const getValue = e.target.value;

    if (getValue === "valueBrazil") {
      const show = "Ações Brasil";
      setLocation(show);
    } else if (getValue === "valueEUA") {
      const show = "Ações EUA";
      setLocation(show);
    } else if (getValue === "valueBonds") {
      const show = "Renda Fixa BR";
      setLocation(show);
    }
  };

  // function teste(obj) {
  //   console.log(obj);
  // }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputContent}>
          <label>Data</label>
          <input
            type="date"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
        </div>

        <div className={styles.inputContent}>
          <label>Ativo</label>
          <input
            type="text"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          />
        </div>

        <div className={styles.inputContent}>
          <label>Quantidade</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* <div className={styles.inputContent}>
          <label>Valor médio</label>
          <input
            type="number"
            value={averagePrice}
            onChange={(e) => setAveragePrice(e.target.value)}
          />
        </div> */}

        {/* <div className={styles.inputContent}>
          <label>Preço</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div> */}

        <div className={styles.inputContent}>
          <label>Comprado por</label>
          <input
            type="number"
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
          />
        </div>

        {/* <div className={styles.inputContent}>
          <label>Valor atualizado</label>
          <input
            type="number"
            value={updated}
            onChange={(e) => setUpdated(e.target.value)}
          />
        </div> */}

        <div className={styles.inputContent}>
          <label>
            Locação
            <select
              value={location}
              id="sLocation"
              // onChange={(e) => setLocation(e.target.textContent)}
              // onChange={(e) => teste(e)}
              onChange={(e) => handleText(e)}
            >
              <option value="">Selecione</option>
              <option value="valueBrazil">Ações Brasil</option>
              <option value="valueEUA">Ações EUA</option>
              <option value="valueBonds">Renda Fixa BR</option>
            </select>
          </label>
        </div>

        <button onClick={handleSave}>ADICIONAR</button>
      </div>

      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
}
