import { Typography } from "antd";
import { useFetchDoctorList } from "../presenters/use-fetch-doctor-list";
import { Doctor } from "../interfaces/doctor";

const { Title } = Typography;

export const DoctorListScreen = () => {

  const { doctorList } = useFetchDoctorList();

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
