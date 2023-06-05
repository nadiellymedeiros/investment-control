import React, { useState, useEffect } from "react";

import "./App.css";
import Active from "./Components/Active/Active";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Allocation from "./Components/Allocation/Allocation";
import ResumeItem from "./Components/ResumeItem/ResumeItem";
import Resume from "./Components/Resume/Resume";
import Form from "./Components/Form/Form";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [valueBrazil, setValueBrazil] = useState(0);
  const [valueEUA, setValueEUA] = useState(0);
  const [valueBonds, setValueBonds] = useState(0);

  useEffect(() => {
    const amountValueBrazil = transactionsList
      .filter((item) => item.location === "Ações Brasil")
      .map((transaction) => Number(transaction.purchase));

    const amountValueEUA = transactionsList
      .filter((item) => item.location === "Ações EUA")
      .map((transaction) => Number(transaction.purchase));

    const amountValueBonds = transactionsList
      .filter((item) => item.location === "Renda Fixa BR")
      .map((transaction) => Number(transaction.purchase));

    const valueBrazil = amountValueBrazil
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);
    const valueEUA = amountValueEUA
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);
    const valueBonds = amountValueBonds
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);

    // const total = (valueBrazil + valueEUA + valueBonds).toFixed(2);

    setValueBrazil(`R$ ${valueBrazil}`);
    setValueEUA(`R$ ${valueEUA}`);
    setValueBonds(`R$ ${valueBonds}`);
    // setTotal(`R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <div className="App">
      <Navbar />
      <Resume
        valueBrazil={valueBrazil}
        valueEUA={valueEUA}
        valueBonds={valueBonds}
      />

      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </div>
  );
}

export default App;
