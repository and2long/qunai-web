import { List } from "antd";
import { ReactElement } from "react";
import { useAppointmentListEffect } from "../presenters/use-appointment-list-efect";

export const AppointmentListScreen = (): ReactElement => {

  const { appointmentList } = useAppointmentListEffect();

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={appointmentList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.introduction}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
