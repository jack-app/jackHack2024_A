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
import style from "../index.module.css";
import moment from "moment";

export function LineChartWrapper(data){

    const TIME_DECRESE = 30

    const point_caliculater = (point) => {
        return point.study + point.healthy + point.sociality + point.sociability + point.mental
    }

    console.log(data)

    const data_ls = [
        {
            "date": moment(data.data[0].date).unix() * 1000,
            "point": 100 - TIME_DECRESE + point_caliculater(data.data[0].point)
        }
    ];

    for(let i=1; i < data.data.length; i++){
        data_ls.push(
            {
                "date": moment(data.data[i].date).unix() * 1000,
                "point": data_ls[data_ls.length - 1].point - TIME_DECRESE + point_caliculater(data.data[i].point)
            }
        )
    }

    console.log(data_ls);

    return(
        <div className={style.txtbox}>
        <ResponsiveContainer width="100%" aspect={2}>
            <LineChart data={data_ls}>
            <XAxis // X軸
                dataKey="date" // X軸の基準となるデータ項目名
                tickFormatter={(props) => moment(props).format('YYYY/MM/DD')} // X軸を YYYY/MM/DD 形式で表示します
            />
            <YAxis domain={[0, 200]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey="point" stroke="#191970" />
        </LineChart>
        </ResponsiveContainer>
    </div>
    )
}