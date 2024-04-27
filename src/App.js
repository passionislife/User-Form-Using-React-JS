import React, { useState } from "react";
import UserInputData from "./Components/UserInputForm";
import OutputData from "./Components/OutputData";

const USER_DATA = [{ name: "Yusuf", age: 23, id: 1 }];
function App() {
  const [insertData, setInsertData] = useState(USER_DATA);
  function userDataHandler(data) {
    setInsertData((USER_DATA) => {
      return [data, ...USER_DATA];
    });
  }
  return (
    <div>
      <UserInputData onSaveData={userDataHandler} />
      <OutputData data={insertData} />
    </div>
  );
}

export default App;
