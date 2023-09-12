import React from "react";
import "./second.css";

const Bill = ({
  billValue,
  yourExpen,
  totalBill,
  findedData,
  data,
  splitFunc,
  bill,
  mybill,
}) => {
  const filtedData = data.filter((value) => value.click);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.elements.paymentMethod.value;
    const totalBill = bill - mybill;
    splitFunc(selectedValue, findedData.id, totalBill);
  };
  const displayTotalBill = !isNaN(bill - mybill) ? bill - mybill : "0";
  return (
    <div>
      <div className={filtedData.length > 0 ? "block" : "none"}>
        <form className="second-cont" onSubmit={(e) => handleSubmit(e)}>
          <p>SPLIT A BILL WITH {findedData ? findedData.friend : ""}</p>
          <>
            <label>💰 Bill value</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => billValue(Number(e.target.value))}
            ></input>
          </>
          <>
            {" "}
            <label>🧍‍♀️ Your expense</label>
            <input
              type="number"
              value={mybill}
              onChange={(e) => yourExpen(Number(e.target.value))}
            ></input>
          </>
          <>
            <label>🧍‍♀️ {findedData ? findedData.friend : ""} expense</label>
            <span>{displayTotalBill}</span>
          </>
          <>
            <label>🤑 Who is paying the bill</label>
            <select name="paymentMethod">
              <option value={1}>you</option>
              <option value={2}>{findedData ? findedData.friend : ""}</option>
            </select>
          </>
          <button type="submit">Split Bill</button>
        </form>
      </div>
    </div>
  );
};

export default Bill;
