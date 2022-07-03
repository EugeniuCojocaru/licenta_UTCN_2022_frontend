import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SelectType } from "../../data-access/types";
interface Props {
  data: SelectType[];
}
export const StatsA = ({ data }: Props) => {
  return (
    <ResponsiveContainer maxHeight={500}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="value" fill="#404047" />
      </BarChart>
    </ResponsiveContainer>
  );
};
