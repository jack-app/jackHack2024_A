import React, { useState } from 'react';
import style from "../index.module.css";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { getDiaryDataByDate } from "../../../utils/database";


export default function CommentWrapper(){

    const { loginUser, login, logout } = AuthContextConsumer();
  
    const [data, setData] = useState("");
  
    const date = new Date().toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
    day: "2-digit"}).replaceAll('/', '-')
  
    getDiaryDataByDate(loginUser.uid, date).then((target) => {
    
      if (target.length == 0) {
        setData("")
      }
      else {
        setData(target[0].diary_text)
      }
    })
  
    if(data === ""){
      return (
        <div className={style.txtbox}>
            データがありません
        </div>
      );
    }
  
    return(
        <div className={style.txtbox}>
            {data}
        </div>
    );
  }