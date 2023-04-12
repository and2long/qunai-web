import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DoctorListScreen } from "./DoctorListScreen";
import { AppointmentListScreen } from "./AppointmentListScreen";
import { CreateAppointmentScreen } from "./CreateAppointmentScreen";


const App: React.FC = () => {
  return (
    <div>
      <ul>
        <li><a href="/doctors">医生列表</a></li>
        <li><a href="/appointments">会诊大厅</a></li>
        <li><a href="/appointments/create">预约会诊</a></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DoctorListScreen />} />
          <Route path="/doctors" element={<DoctorListScreen />} />
          <Route path="/appointments" element={<AppointmentListScreen />} />
          <Route path="/appointments/create" element={<CreateAppointmentScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;