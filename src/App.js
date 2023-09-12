import React, { useState } from "react";

import "./App.css";
import Bill from "./Bill";
import AddFriend from "./Addfriend";
import Friend from "./Friend";

function App() {
  const [bill, setBill] = useState(); // overall bill
  const [mybill, setMybill] = useState(); // my bill value
  const [billData, setBillData] = useState(); // split bill value
  const [split, SetSplit] = useState(); // select btn

  const billValue = (value) => {
    setBill(value);
  };
  const yourExpen = (value) => {
    if (bill >= value) setMybill(value);
    else setMybill(0);
  };
  const splitFunc = (value, id, totalBill) => {
    SetSplit(0);
    setBill(0);
    setMybill(0);
    const splitArray = [...data];
    const splitedArray = splitArray.map((only) => {
      only.click = false;
      if (only.id == id) {
        if (value == 1) {
          only.split += totalBill;
        } else {
          only.split -= totalBill;
        }
      }
      return only;
    });
    setData(splitedArray);
  };

  const newArray = [
    {
      friend: "sunder",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      click: false,
      split: 12,
      id: 1,
    },
    {
      friend: "sajin",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      click: false,
      split: -12,
      id: 2,
    },
    {
      friend: "rajaguru",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      click: false,
      split: 0,
      id: 3,
    },
  ];
  // for Data adding
  const [data, setData] = useState([...newArray]);
  const addData = (item) => {
    setData((data) => [...data, item]);
  };
  // for select button
  const select = (id) => {
    const clickData = [...data];
    const ClikedData = clickData.map((value) => {
      if (value.id === id) value.click = !value.click;
      return value;
    });
    setData(ClikedData);
    let FindData = data.find((value) => value.id == id);
    setBillData(FindData);
  };
  return (
    <div className="App">
      <div className="row">
        <Friend
          data={data}
          select={select}
          findedData={billData}
          split={split}
        />
        <AddFriend addData={addData} data={data} />
      </div>
      <Bill
        billValue={billValue}
        yourExpen={yourExpen}
        splitFunc={splitFunc}
        findedData={billData}
        data={data}
        split={split}
        bill={bill}
        mybill={mybill}
      />
    </div>
  );
}

export default App;
