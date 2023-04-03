import { List } from "antd";
import { ReactElement } from "react";
import { useDoctorListEffect } from "../presenters/use-doctor-list-efect";

export const DoctorListScreen = (): ReactElement => {

  const { doctorList } = useDoctorListEffect();

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={doctorList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.userId}
              description={item.hospital.name}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
