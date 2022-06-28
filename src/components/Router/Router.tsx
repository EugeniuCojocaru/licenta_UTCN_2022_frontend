import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuditPage } from "../../pages/Audit/AuditPage";

import {
  DashboardPage,
  InstitutionPage,
  SubjectPage,
  TeacherPage,
  AddSyllabusPage,
  LoginPage,
} from "../../pages";
interface Props {
  isSessionActive: boolean;
  isFetchingData: boolean;
}
const UnauthenticatedRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<LoginPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

const AuthenticatedRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/syllabus/add" element={<AddSyllabusPage />} />
      <Route path="/institution" element={<InstitutionPage />} />
      <Route path="/subjects" element={<SubjectPage />} />
      <Route path="/teachers" element={<TeacherPage />} />
      <Route path="/audit" element={<AuditPage />} />
    </Routes>
  </BrowserRouter>
);

export const RouterPicker = ({ isSessionActive, isFetchingData }: Props) => {
  return isSessionActive && !isFetchingData ? (
    <AuthenticatedRoutes />
  ) : (
    <UnauthenticatedRoutes />
  );
};
