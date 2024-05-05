import React, { useState } from 'react';
import style from "../index.module.css";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { getDiaryDataByDate } from "../../../utils/database";


export default function FeedBackWrapper(){

    const { loginUser, login, logout } = AuthContextConsumer();
  
    const [data, setData] = useState("");
  
    const date = new Date().toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
    day: "2-digit"}).replaceAll('/', '-')
  
    getDiaryDataByDate(loginUser.uid, date).then((target) => {
    
      if (target.length == 0) {
        setData("")
      }
      else {
        setData(target[0].diary_feedback)
      }
    })
  
    if(data === ""){
      return (
        <div className={style.container}>
        <img src="aorichan.png" width="25%" aspect={1} />
        <div class={style.bubble}>
          <p>
            データがないよ！<br />
          </p>
        </div>
      </div>
      );
    }
  
    return(
        <div className={style.container}>
        <img src="aorichan.png" width="25%" aspect={1} />
        <div class={style.bubble}>
          <p>
            {data}
          </p>
        </div>
      </div>
    );
  }