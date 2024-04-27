import React from "react";
import "./OutputData.css";
import UserList from "./UserList";
function OutputData(props) {
  return (
    <div className="output-data">
      {props.data.map((datas) => (
        <UserList key={datas.id} name={datas.name} age={datas.age} />
      ))}
    </div>
  );
}

export default OutputData;
