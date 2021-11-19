import React, { useState } from "react";
import "./sidebar.sass";
const SideBar = () => {
  const [ShowSub, setShowSub] = useState(false);
  const [ShowSideBar, setShowSideBar] = useState(true);

  return (
    <div className="sidebar">
      <div className="menu-list">
        <div className="option quick" onClick={() => setShowSub(!ShowSub)}>
          <div className="quick-item title">
            <ion-icon name="attach-outline"></ion-icon>
            <span className={ShowSideBar ? null : `disnone`}>دسترسی سریع</span>
          </div>
          <div className={!ShowSub ? `disnone` : null}>
            <div className="quick-item sub-item">
              <ion-icon name="chevron-back-outline"></ion-icon>
              <span>ثبت گزارش نویسی</span>
            </div>
            <div className="quick-item sub-item">
              <ion-icon name="chevron-back-outline"></ion-icon>
              <span>پرونده در دست اقدام</span>
            </div>
            <div className="quick-item sub-item">
              <ion-icon name="chevron-back-outline"></ion-icon>
              <span>پرونده های انجام شده</span>
            </div>
            <div className="quick-item sub-item">
              <ion-icon name="chevron-back-outline"></ion-icon>
              <span>پروفایل کاربری</span>
            </div>
          </div>
        </div>
        <div className="option customers">
          <div className="customers-item title">
            <ion-icon name="person-outline"></ion-icon>
            <span className={ShowSideBar ? null : `disnone`}>
              مشتریان حقیقی/حقوقی
            </span>
          </div>
        </div>
        <div className="option operation">
          <div className="operation-item title">
            <ion-icon name="podium-outline"></ion-icon>
            <span className={ShowSideBar ? null : `disnone`}>
              عملیات اعتبارات
            </span>
          </div>
        </div>
        <div className="option report">
          <div className="report-item title">
            <ion-icon name="podium-outline"></ion-icon>
            <span className={ShowSideBar ? null : `disnone`}>گزارشات</span>
          </div>
        </div>
        <div className="option notices">
          <div className="notices-item title">
            <ion-icon name="notifications-outline"></ion-icon>
            <span className={ShowSideBar ? null : `disnone`}>
              اطلاع رسانی سامانه
            </span>
          </div>
        </div>
        <div className="option plan-system">
          <div className="plan-system-item title">
            <ion-icon name="clipboard-outline"></ion-icon>
            <span className={ShowSideBar ? null : `disnone`}>
              سامانه برنامه ریزی
            </span>
          </div>
        </div>
        <div className="option contact-support">
          <div className="contact-support-item title">
            <ion-icon name="call-outline"></ion-icon>
            <span className={ShowSideBar ? null : `disnone`}>
              تماس پشتیبانی
            </span>
          </div>
        </div>
      </div>
      <div className="menu-button" onClick={() => setShowSideBar(!ShowSideBar)}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default SideBar;
