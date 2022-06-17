import { FC } from "react";
import { Link } from "react-router-dom";

const Blog: FC = () => {
  return (
    <section className="blogs">
      <h1 className="title">
        {" "}
        our <span>blogs</span> <Link to={"/"}>view all </Link>{" "}
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              src={
                "https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg"
              }
              alt=""
            />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> 21st may, 2021{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> by admin{" "}
              </a>
            </div>
            <h3>blogs title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              dolor!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              src={
                "https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg"
              }
              alt=""
            />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> 21st may, 2021{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> by admin{" "}
              </a>
            </div>
            <h3>blogs title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              dolor!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              src={
                "https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg"
              }
              alt=""
            />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> 21st may, 2021{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> by admin{" "}
              </a>
            </div>
            <h3>blogs title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              dolor!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              alt=""
            />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> 21st may, 2021{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> by admin{" "}
              </a>
            </div>
            <h3>blogs title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              dolor!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              alt=""
            />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> 21st may, 2021{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> by admin{" "}
              </a>
            </div>
            <h3>blogs title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              dolor!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              alt=""
            />
          </div>
          <div className="content">
            <div className="icons">
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> 21st may, 2021{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> by admin{" "}
              </a>
            </div>
            <h3>blogs title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              dolor!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
