import React, { useState } from "react";
import {
  CloseCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Modal } from "antd";
import "./quick.sass";

const Quick = () => {
  const [IsModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="quick-access">
        <div className="quick-item cardboard">
          <ion-icon name="albums-outline"></ion-icon>
          <span>کارتابل کاربر</span>
        </div>
        <div className="quick-item reporting">
          <ion-icon name="newspaper-outline"></ion-icon>
          <span>ثبت گزارش نویسی</span>
        </div>
        <div className="quick-item open-file">
          <ion-icon name="receipt-outline"></ion-icon>
          <span>پرونده های در دست اقدام</span>
        </div>
        <div className="quick-item user-profile">
          <ion-icon name="person-circle-outline"></ion-icon>
          <span>پروفایل کاربری</span>
        </div>
        <div className="quick-item edit" onClick={showModal}>
          <ion-icon name="create-outline"></ion-icon>
          <span>ویرایش</span>
        </div>
      </div>

      <Modal
        closeIcon={<CloseCircleOutlined />}
        visible={IsModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="desk-tab">
          <div className="current-tab">
            <h4>داشبورد شما</h4>
            <div className="tabs">
              <div>
                <MinusCircleOutlined className="icon-tab minus-icon" />
                <span>ثبت گزارش نویسی</span>
              </div>
              <div>
                <MinusCircleOutlined className="icon-tab minus-icon" />
                <span>پرونده های در دست اقدام</span>
              </div>
              <div>
                <MinusCircleOutlined className="icon-tab minus-icon" />
                <span>کارتابل کاربر</span>
              </div>
            </div>
          </div>
          <div className="suggestion-tab">
            <h4>پیشنهادی</h4>
            <div className="tabs">
              <div>
                <PlusCircleOutlined className="icon-tab plus-icon" />
                <span>ثبت مهلت مصوبه</span>
              </div>
              <div>
                <PlusCircleOutlined className="icon-tab plus-icon" />
                <span>پرونده های انجام شده</span>
              </div>
              <div>
                <PlusCircleOutlined className="icon-tab plus-icon" />
                <span>لیست مشتریان حقیقی</span>
              </div>
              <div>
                <PlusCircleOutlined className="icon-tab plus-icon" />
                <span>لیست مشتریان حقوقی</span>
              </div>
              <div>
                <PlusCircleOutlined className="icon-tab plus-icon" />
                <span>اطلاعات تماس</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Quick;
