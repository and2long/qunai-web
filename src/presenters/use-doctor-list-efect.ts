import { useEffect, useState } from "react";
import { apiClient } from "../http-client/http-client";
import { Doctor } from "../interfaces/doctor";

export const useDoctorListEffect = () => {

  const [doctorList, setDoctorlist] = useState<Doctor[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get("api/doctors");
      setDoctorlist(response.data);
    };
    fetchData();
  });

  return {
    doctorList
  };
};