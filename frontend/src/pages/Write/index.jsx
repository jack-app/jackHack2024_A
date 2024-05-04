import { Link } from "react-router-dom";
import style from "./index.module.css";
import { db } from "../../contexts/AuthContext";
import {
  ref,
  set,
  get,
  orderByChild,
  equalTo,
  query,
  push,
} from "firebase/database";

function Write() {
  const user_id = "huga";
  const handleClick = () => {
    const diaryRef = ref(db, `diary/${user_id}`);
    const newDiaryRef = push(diaryRef);
    set(newDiaryRef, {
      date: "2022-01-06",
      healthy: 5,
      sociality: 5,
      sociability: 5,
      mental: 5,
      diary_text: "今日は頑張った",
      diary_feedback: "甘いって。厳しいって。",
    });
  };

  // データ取得する関数
  const getData = async () => {
    const queryRef = query(
      ref(db, `diary/${user_id}`),
      orderByChild("date"),
      equalTo("2022-01-06")
    );
    const snapshot = await get(queryRef);

    const data = snapshot.val();
    if (data) {
      const dataArr = Object.values(data);
      console.log(dataArr);
    } else {
      console.log("No data found for user_id 'huga'");
    }
  };
  return (
    <div>
      <button onClick={handleClick}>送信！</button>
      <button onClick={getData}>データ取得</button>
      <div>Write</div>
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
      </nav>
    </div>
  );
}

export default Write;
