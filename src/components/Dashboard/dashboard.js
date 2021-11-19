import React from "react";
import Quick from "./Quick/quick";
import "./dashboard.sass";
import Desk from "./Desk/desk";
import Carousel from "./Carousel/carousel";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Quick />
      <Desk />
      <Carousel />
    </div>
  );
};

export default Dashboard;
