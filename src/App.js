import React from "react";
import Article from "./Article";
import Comment from "./Comment";
import MyInfo from "./MyInfo.jsx";

function App() {
  let myInfo = {
    "name": "Justin",
    "age": 23,
    "spouse": "Abby",
    "schools": {
      "sec": "Meru School",
      "pry": "Allamano"
    }
  }
  return (
    <div>
      <Article />
      <Comment />
      <MyInfo myInfos={myInfo} />
    </div>
  );
}

export default App;