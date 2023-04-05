import { useEffect, useState } from "react";
import { apiClient } from "../http-client/http-client";
import { AppointmentCreationPayload } from "../interfaces/appointment";
import { Department } from "../interfaces/department";

export const useCreateAppointmentEffect = () => {

  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get("/api/departments");
      setDepartments(response.data.data);
    };
    fetchData();
  }, []);

  const creataAppointment = async (payload: AppointmentCreationPayload) => {
    await apiClient.post("/api/appointments", payload);
  };

  return {
    departments,
    creataAppointment
  };

};