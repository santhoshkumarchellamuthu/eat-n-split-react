import React from "react";
import "./first.css";
const Friend = ({ data, select, findedData, split }) => {
  return (
    <div className="cont">
      {data.map((value, inx) => (
        <List value={value} key={inx} select={select} />
      ))}
    </div>
  );
};

export default Friend;

const List = ({ value, select }) => {
  return (
    <div className="first-cont">
      <div>
        <img src={value.img} alt="images"></img>
      </div>
      <div>
        <h2 className="name">{value.friend}</h2>
        {value.split < 0 ? (
          <p className="red">{`you owe ${value.friend} ${Math.abs(
            value.split
          )}`}</p>
        ) : value.split == 0 ? (
          <p className="black">{`you and ${value.friend} are even`}</p>
        ) : (
          <p className="green">{`${value.friend} owes you ${value.split}`}</p>
        )}
      </div>
      <div>
        <button className="select" onClick={() => select(value.id)}>
          {value.click ? "close" : "select"}
        </button>
      </div>
    </div>
  );
};
