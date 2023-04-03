import { useEffect, useState } from "react";
import { Doctor } from "../interfaces/doctor";
import { apiClient } from "../http-client/http-client";

export const useFetchDoctorList = () => {

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