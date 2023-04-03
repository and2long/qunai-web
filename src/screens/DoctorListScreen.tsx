import { Typography } from "antd";
import { ReactElement } from "react";
import { Doctor } from "../interfaces/doctor";
import { useDoctorListEffect } from "../presenters/use-doctor-list-efect";

const { Title } = Typography;

export const DoctorListScreen = (): ReactElement => {

  const { doctorList } = useDoctorListEffect();

  return (
    <div>
      <Title level={2}>医生列表</Title>
      <ul>
        {
          doctorList.map((item: Doctor) => <li key={item.userId}>{item.userId}</li>)
        }
      </ul>
    </div>
  );
};
