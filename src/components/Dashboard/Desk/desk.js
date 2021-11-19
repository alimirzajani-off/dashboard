import React from "react";
import BarChart from "./chart/barchart";
import DoughnutChart from "./chart/doughnutchart";
import "./desk.sass";

const Desk = () => {
  return (
    <div className="desk">
      <div className="desk-item">
        <div className="desk-item-title">
          <span>اطلاع رسانی</span>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        <div className="desk-item-detail">
          <p>
            همکاران محترم ظرف مدت سه روز به سامانه سسخ مراجعه کرده و اطلاعات
            کاربری را بروز رسانی کنید.
          </p>
        </div>
      </div>
      <div className="desk-item">
        <div className="desk-item-title">
          <span>پرونده های جاری کاربر</span>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        <div className="desk-item-detail">
          <BarChart />
        </div>
      </div>
      <div className="desk-item">
        <div className="desk-item-title">
          <span>آمار درخواست های کاربر</span>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        <div className="desk-item-detail">
          <DoughnutChart />
        </div>
      </div>
      <div className="desk-item">
        <div className="desk-item-title">
          <span>اطلاعیه پابلیش</span>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        <div className="desk-item-detail">
          <div className="version-num">
            <h4>3</h4>
          </div>
          <div className="version">
            <div className="cur-version">
              <p>نسخه جاری</p>
              <p>980401</p>
            </div>
            <div className="prev-version">
              <p>نسخه قبلی</p>
              <p>981102</p>
            </div>
          </div>
          <div className="version-detail">
            <button className="btn">نمایش جزیئات نسخه جاری</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desk;
