import { useEffect, useState } from "react";
import { apiClient } from "../http-client/http-client";
import { Appointment } from "../interfaces/appointment";

export const useAppointmentListEffect = () => {

  const [appointmentList, setAppointmentlist] = useState<Appointment[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get("api/appointments");
      setAppointmentlist(response.data.data);
    };
    fetchData();
  }, []);

  return {
    appointmentList
  };
};