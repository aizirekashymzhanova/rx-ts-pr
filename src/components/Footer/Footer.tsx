import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/action-creators/auth";

const Footer: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [values, setValues] = useState({ text: "" });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!values.text.trim()) {
      alert("заполните поля");
      return;
    }
    if (!auth) {
      alert("вам необходимо зарегистрироваться");
      return;
    }
    const elem: object = {
      text: values.text,
      createdAt: new Date(),
      uid: auth?.uid,
      email: auth?.email,
      photoURL: auth.photoURL
        ? auth.photoURL
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhSXSznpKjRjkVSDai0I22GlBHMcVXHPjZg&usqp=CAU",
      displayName: auth?.displayName,
    };

    setValues({ text: "" });
    navigate("/rew");
  };

  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to={"/"}>home</Link>
          <Link to={"shop"}>shop</Link>
          <Link to={"about"}>about</Link>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <Link to={"rew"}>review</Link>
          <Link to={"blog"}>blog</Link>
          <Link to={"contact"}>contact</Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <Link to={"/"}>facebook </Link>
          <Link to={"/"}>instagram </Link>
          <Link to={"/"}>pinterest </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
