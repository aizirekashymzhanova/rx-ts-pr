import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <>
      <section className="homee">
        {/* <img
          src="https://www.housedigest.com/img/gallery/30-gorgeous-green-living-room-ideas-you-can-recreate-at-home/l-intro-1644597197.jpg"
          alt=""
          height="100%"
          width="100%"
        /> */}
        <h1 className="titlee"> WELCOME TO MADE.COM</h1>
      </section>

      <section className="banner-container">
        <div className="banner">
          <img
            src={
              "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/bc8ff837-69ab-42b1-b530-cc370c2be1eb_670x502_Ideashub.jpg"
            }
            alt=""
          />
          <div className="content">
            <Link to={"/shop"} className="btn">
              в магазин
            </Link>
          </div>
        </div>
        <div className="banner">
          <img
            src={
              "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/63ecc070-38b4-48e7-91af-254535695f4a_How_To_Week_21_OutdoorIDEASHUB_SMALL.jpg"
            }
            alt=""
          />

          <div className="content">
            <Link to={"/shop"} className="btn">
              в магазин
            </Link>
          </div>
        </div>
        <div className="banner">
          <img
            src={
              "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/6347a9b2-d873-420f-9145-508fce11a806_How_To_Week_22_AccessoriesIDEASHUB_SMALL.jpg"
            }
            alt=""
          />
          <div className="content">
            <Link to={"/shop"} className="btn">
              в магазин
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
