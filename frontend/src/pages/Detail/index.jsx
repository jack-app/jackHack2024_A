import style from "./index.module.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RadarChartWrapper from "./components/RadarChart";
import { AuthContextConsumer } from "../../contexts/AuthContext";
import { getAllDiary, getDiaryDataByDate } from "../../utils/database";
import { Link } from "react-router-dom";
import { LineChartWrapper } from "./components/LineChart";

function Detail() {
  const { loginUser } = AuthContextConsumer();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  useEffect(() => {
    if (!loginUser || !date) return;
    getDiaryDataByDate(loginUser.uid, date)
      .then((res) => {
        if (res.length === 0) {
          setData([]);
        } else {
          const dataLength = res.length;
          setData(res[dataLength - 1]);
          console.log(res[dataLength - 1]);
        }
      })
      .catch(() => {
        setData([]);
      })

      getAllDiary(loginUser.uid)
        .then((res) => {
          if (res.length === 0) {
            setAllData([]);
          } else {
            setAllData(res);
          }  
        })
        .catch(() => {
          setData([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }, [loginUser, date]);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (!isLoading && data.length === 0) {
    return (
      <div>
        <Link className={style.flex} to="/calendar">
          <img src="back_button.png"></img>
        </Link>
        <div className={style.container}>
          <img src="aorichan.png" width="25%" height="25%" />
          <div className={style.bubble}>
            <p>{date}のデータがありません。</p>
          </div>
        </div>
      </div>
    );
  }

  return (



    <div>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      {/*
      <div>Detail</div>
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
      </nav>
  */}


      <Link className={style.flex} to="/calendar">
        <img src="back_button.png"></img>
      </Link>
      <h2>日記</h2>
      <div className={style.txtbox}>{data.diary_text}</div>

      <h2>フィードバック</h2>

      <div className={style.responsiveParent}>
        <div className={style.responsiveChild1}>

          <h3>点数</h3>
          <div className={style.txtbox}>
            <RadarChartWrapper point={data.point} />
          </div>
        </div>
        <div className={style.responsiveChild2}>
          <div className={style.container}>
            <img src="aorichan.png" width="25%" className={style.circle}/>
            <div className={style.bubble}>
              <p>{data.diary_feedback}</p>
            </div>
          </div>
          <h3>ウィークリーサマリー</h3>
          <LineChartWrapper data={alldata}/>
        </div>
      </div>
    </div>
  );
}

export default Detail;
