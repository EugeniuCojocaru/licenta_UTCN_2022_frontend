import React, { useEffect, useState } from "react";
import { User } from "../../common/types/userTypes";
import { Layout } from "../../components/Layout/Layout";
import { getUsers } from "../../data-access/service/userService";
import UserTable from "./Table/UserTable";

export const TeacherPage = () => {
  return (
    <Layout>
      <h1>Users</h1>
      <UserTable />
    </Layout>
  );
};
