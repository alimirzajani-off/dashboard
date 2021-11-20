import React, { useState } from "react";
import "antd/dist/antd.css";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "./carousel.sass";
import image1 from "../../../assets/amar.png";
import image2 from "../../../assets/eghtesad.png";
import image3 from "../../../assets/tosee.png";
import image4 from "../../../assets/gomrok.png";
import image5 from "../../../assets/bazargani.png";
import image6 from "../../../assets/daroo.png";

const Carousel = () => {
  const [ToggelShow, setToggelShow] = useState(true);

  return (
    <div className="carousel-box">
      <RightCircleOutlined
        onClick={() => setToggelShow(!ToggelShow)}
        className="next-click"
      />
      <div className={`contentStyle ${ToggelShow ? "" : "carousel-show"}`}>
        <div>
          <img src={image1} />
          <p>مرکز آمار ایران</p>
        </div>
        <div>
          <img src={image2} />
          <p>وزارت امور اقتصادی</p>
        </div>
        <div>
          <img src={image3} />
          <p>صندوق توسعه ملی</p>
        </div>
        <div>
          <img src={image4} />
          <p>گمرک جمهوری اسلامی</p>
        </div>
      </div>
      <div className={`contentStyle ${ToggelShow ? "carousel-show" : ""}`}>
        <div>
          <img src={image5} />
          <p>اتاق بازرگانی</p>
        </div>
        <div>
          <img src={image6} />
          <p>سازمان غذا و دارو</p>
        </div>
      </div>
      <LeftCircleOutlined
        onClick={() => setToggelShow(!ToggelShow)}
        className="prev-click"
      />
    </div>
  );
};

export default Carousel;
