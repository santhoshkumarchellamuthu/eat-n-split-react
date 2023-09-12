import React, { useState } from "react";
import "./third.css";

const AddFriend = ({ addData, data }) => {
  const [friend, setFriend] = useState("");
  const [img, setImg] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddfriend = () => {
    setIsFormVisible(true);
  };
  const handleClosbtn = () => {
    setIsFormVisible(false);
  };
  const add = (e) => {
    e.preventDefault();

    const newobj = { friend, img, click: false, split: 0, id: Date.now() };
    addData(newobj);
    setFriend("");
    setImg("");
    setIsFormVisible(false);
  };
  const getName = (value) => {
    setFriend(value);
  };
  const getPic = (value) => {
    setImg(value);
  };
  return (
    <div className="add-friend">
      <button onClick={handleAddfriend}>AddFriend</button>
      <div className={isFormVisible ? "block" : "none"}>
        <form className="third-cont" onSubmit={add}>
          <label>👫 Friend name</label>
          <input
            type="text"
            onChange={(e) => getName(e.target.value)}
            value={friend}
          ></input>
          <label>🌄 Image URL</label>
          <input
            type="text"
            onChange={(e) => getPic(e.target.value)}
            value={img}
          ></input>
          <button className="add" onClick={handleClosbtn}>
            add
          </button>
        </form>
      </div>
      <div className={isFormVisible ? "block" : "none"}>
        <button className="close" onClick={handleClosbtn}>
          close
        </button>
      </div>
    </div>
  );
};

export default AddFriend;
