import React from "react";
import { Layout } from "../../components/Layout";
import { AuditTable } from "./Table/AuditTable";

export const AuditPage = () => {
  return (
    <Layout>
      <div>Audit Log</div>
      <AuditTable />
    </Layout>
  );
};
