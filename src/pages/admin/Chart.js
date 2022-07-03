import "./home.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { Legend } from "chart.js";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        <Line type="monotone" dataKey="" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}