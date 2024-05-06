import { getDiaryDataByDate } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ResponsiveContainer } from "recharts";
import style from "./../index.module.css";

// eslint-disable-next-line react/prop-types
export default function RadarChartWrapper({ point }) {
  if (!point) return <div className={style.overlap}>
    <img src="aorichan.png" width="100%" className={style.transparent} />
    <div className={style.overlay}>
      <p><strong>データがありません</strong></p>
    </div>
  </div>;
  const data = [
    {
      subject: "勉強",
      A: point.study,
      fullMark: 5,
    },
    {
      subject: "健康",
      A: point.healthy,
      fullMark: 5,
    },
    {
      subject: "社会性",
      A: point.sociality,
      fullMark: 5,
    },
    {
      subject: "社交性",
      A: point.sociability,
      fullMark: 5,
    },
    {
      subject: "精神力",
      A: point.mental,
      fullMark: 5,
    },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} />
        <Radar
          name="chart"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
