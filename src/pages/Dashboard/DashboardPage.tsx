import React, { useEffect, useState } from "react";
import { BigPoppins, Roboto } from "../../common";
import { Layout } from "../../components/Layout";
import { User } from "../../data-access/types";
import { Card, RowD } from "./DashboardPage.styles";
import { SelectType } from "../../data-access/types/componentsType";
import { getStats1, getStats2 } from "../../data-access/service/auditService";
import { StatsA } from "./StatsA";
import { StatsB } from "./StatsB";
interface Props {
  user: User;
}
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DashboardPage = ({ user }: Props) => {
  const [data1, setData1] = useState<SelectType[]>([]);
  const [data2, setData2] = useState<SelectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getStats1();
      response?.data && setData1(response.data);
      response = await getStats2();
      response?.data && setData2(response.data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <BigPoppins>
        Welcome, <strong>{user.name}</strong>!
      </BigPoppins>
      <RowD>
        <Card>
          <Roboto>User activity</Roboto>
          <StatsA data={data1.slice(0, 5)} />
        </Card>
        <Card>
          <Roboto>Activity per day for {month[new Date().getMonth()]}</Roboto>
          <StatsB data={data2} />
        </Card>
      </RowD>
    </Layout>
  );
};
