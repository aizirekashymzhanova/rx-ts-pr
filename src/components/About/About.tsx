import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        {/* <div className="heading">
          <h2> Welcome to MADE</h2>
        </div> */}
        <div className="image">
          <img
            src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_1440,q_auto:good,w_1440/v1/mws/43a7d294-d78b-4313-a2ab-fcbd9cff44d8_5%2BWAYS%2BTO.jpeg"
            alt=""
          />
        </div>

        <div className="content">
          <span>welcome to MADE</span>
          <h3>See the MADE team’s home/office setups</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
            sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae
            reprehenderit tempore eligendi, eum quibusdam perferendis dicta,
            incidunt dolores nemo ex.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam
            sapiente commodi hic.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>

      <section className="gallery">
        <h1 className="title">
          {" "}
          our <span>gallery</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img
              src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/43b89da3-d5c1-4eda-b690-2704503e9d00_670x502_Ideashub.jpg"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/46b88ace-040a-42ce-a601-549eac467772_IDEAS_HUB_HT_wk28_dining_SMALL_HUB_TILE_1.jpg"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/0ec93f13-4d8a-4547-b8a2-3d6ec8ab20b1_ideashub_small_tile_670x502_suseque88_2021-06-10_3832415386.jpg"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/beddafab-215c-451c-bd27-d3e7910b6f2c_ideashub_small_tile_670x502_allison_sadler__2021-06-01_3827857386.jpg"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/e5aa741a-3386-435a-b6fa-ca3ac9ed7759_How_To_Week_25_Storage_IDEASHUB_SMALL.jpg"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/9b59f0f8-726f-4852-b5fc-bbc06c545781_StorageIDEASHUB_SMALL.jpg"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
