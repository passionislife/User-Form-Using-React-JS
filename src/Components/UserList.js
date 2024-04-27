import React from "react";
import './UserList.css';

function UserList(props){
    return(
        <div className="list">
            <h1>{props.name} ({props.age} years old)</h1>
        </div>
    );
}
export default UserList;