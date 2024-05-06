import style from "./index.module.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ResponsiveContainer } from "recharts";
import RadarChartWrapper from "./components/RadarChart";
import { AuthContextConsumer } from "../../contexts/AuthContext";
import { getDiaryDataByDate } from "../../utils/database";
import { Link } from "react-router-dom";

const data2 = [
  { name: "月", 勉強: 5, 健康: 2, 社会性: 0, 社交性: 1, 精神力: 4 },
  { name: "火", 勉強: 4, 健康: 4, 社会性: 2, 社交性: 0, 精神力: 1 },
  { name: "水", 勉強: 3, 健康: 1, 社会性: 4, 社交性: 1, 精神力: 1 },
  { name: "木", 勉強: 1, 健康: 5, 社会性: 1, 社交性: 4, 精神力: 2 },
  { name: "金", 勉強: 4, 健康: 2, 社会性: 5, 社交性: 3, 精神力: 3 },
  { name: "土", 勉強: 0, 健康: 3, 社会性: 3, 社交性: 4, 精神力: 4 },
  { name: "日", 勉強: 5, 健康: 4, 社会性: 1, 社交性: 5, 精神力: 3 },
];

function Detail() {
  const { loginUser } = AuthContextConsumer();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
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
            <img src="aorichan.png" width="25%" className={style.circle} />
            <div className={style.bubble}>
              <p>{data.diary_feedback}</p>
            </div>
          </div>
          <h3>ウィークリーサマリー</h3>
          <div className={style.txtbox}>
            <div style={{ width: '100%', marginLeft: '-20px' }}>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={data2}>
                  <XAxis dataKey="name" interval={0} fontSize={10}/>
                  <YAxis domain={[0, 5]} tickCount={6} fontSize={10}/>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend
        formatter={(value, entry, index) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginLeft: '20px', fontSize: '10px'}}>{value}</span>
          </div>
        )}
      />
                  <Line type="linear" dataKey="勉強" stroke="#191970" />
                  <Line type="linear" dataKey="健康" stroke="#ffa500" />
                  <Line type="linear" dataKey="社会性" stroke="#008000" />
                  <Line type="linear" dataKey="社交性" stroke="#7f99d4" />
                  <Line type="linear" dataKey="精神力" stroke="#8b008b" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
