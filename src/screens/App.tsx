import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DoctorListScreen } from "./DoctorListScreen";
import { AppointmentListScreen } from "./AppointmentListScreen";


const App: React.FC = () => {
  return (
    <div>
      <ul>
        <li><a href="doctors">医生列表</a></li>
        <li><a href="appointments">会诊大厅</a></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="doctors" element={<DoctorListScreen />} />
          <Route path="appointments" element={<AppointmentListScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;