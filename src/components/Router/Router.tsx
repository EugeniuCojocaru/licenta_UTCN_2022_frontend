import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuditPage } from "../../pages/Audit/AuditPage";

import {
  InstitutionPage,
  SubjectPage,
  TeacherPage,
  AddSyllabusPage,
  LoginPage,
} from "../../pages";
import AccountActivationPage from "../../pages/Login/AccountActivation/AccountActivationPage";
import DashboardPageContainer from "../../pages/Dashboard/DashboardPageContainer";
interface Props {
  isSessionActive: boolean;
  isFetchingData: boolean;
}
const UnauthenticatedRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account/activate/:id" element={<AccountActivationPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

const AuthenticatedRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<DashboardPageContainer />} />
      <Route path="/dashboard" element={<DashboardPageContainer />} />
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
