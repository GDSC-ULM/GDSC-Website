import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./logo/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [stack, changeStack] = useState(true);

  useEffect(() => {
    return () => {
      if (screenWidth < 1000) {
        changeStack(true);
      }
    };
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      if (screenWidth < 1000) {
        changeStack(true);
      } else changeStack(false);
    };
  }, [screenWidth]);

  const handleResize = (e) => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      changeStack(false);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <img className="logoImg" src={logo} alt="" />
      </div>
      {stack ? (
        <MenuIcon
          fontSize="large"
          style={{ textAlign: "center", marginRight: "1.5rem" }}
        />
      ) : (
        <ul className="menuItems">
          <li className="items home">Home</li>
          <li className="items join">Join</li>
          <li className="items pastEvents">Past Events</li>
          <li className="items about">About</li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
