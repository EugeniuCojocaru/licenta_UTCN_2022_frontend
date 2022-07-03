import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { colors } from "../../common";
import { SelectType } from "../../data-access/types";
interface Props {
  data: SelectType[];
}
export const StatsB = ({ data }: Props) => {
  return (
    <ResponsiveContainer maxHeight={500}>
      <LineChart
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

        <Line type="monotone" dataKey="value" stroke={colors.red} />
      </LineChart>
    </ResponsiveContainer>
  );
};
