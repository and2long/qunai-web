import { List } from "antd";
import moment from "moment";
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
          <div>
            <div><b>{item.title}</b></div>
            <div>{`内容: ${item.introduction}`}</div>
            <div>{`预约日期: ${moment(item.startTime).format().substring(0, 10)}`}</div>
            <div>{`预约时段: ${moment(item.startTime).format().substring(11, 16)}~${moment(item.endTime).format().substring(11, 16)}`}</div>
            <div>{`涉及科室: ${item.departmentNames.join(",")}`}</div>
            <div>{`发起人: ${item.creator.username}`}</div>
            <div style={{ fontSize: 12, color: "gray" }}>{`创建日期: ${moment(item.createdAt).format().substring(0, 16).replace("T", " ")}`}</div>
            <hr />
          </div>
        )}
      />
    </div>
  );
};
