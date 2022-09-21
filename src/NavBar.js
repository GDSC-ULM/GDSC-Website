import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./logo/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function NavBar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); //width of device
  const [stack, changeStack] = useState(true); //when stack is to be shown or not
  const [isStackClicked, changeIsStackClicked] = useState(false); // when stack is clicked

  //component renders
  useEffect(() => {
    return () => {
      if (screenWidth < 1000) {
        changeStack(true);
      }
    };
  });

  //component rerenders when screen width changes
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      if (screenWidth < 1000) {
        changeStack(true);
      } else changeStack(false);
      if (screenWidth > 1000) {
        changeIsStackClicked(false);
      }
    };
  }, [screenWidth]);

  //component unmounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      changeStack(false);
    };
  }, []);

  const handleResize = (e) => {
    setScreenWidth(window.innerWidth);
  };

  const handleClick = (e) => {
    changeIsStackClicked(!isStackClicked);
  };

  const handleTouch = (e) => {
    changeIsStackClicked(false);
    console.log("touched");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img className="logoImg" src={logo} alt="" />
          </Link>
        </div>
        {/* when stack is true stack render */}
        {stack ? (
          <div className="stack" onClick={handleClick}>
            <MenuIcon
              fontSize="large"
              style={{ textAlign: "center", marginRight: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="menuItems">
            <Link to="/">
              <li className="items home">Home</li>
            </Link>
            <Link to="/events">
              <li className="items pastEvents">Events</li>
            </Link>
            <Link to="/join">
              <li className="items join">Join</li>
            </Link>
            <Link to="/about">
              <li className="items about">About</li>
            </Link>
          </ul>
        )}
      </div>
      {/* when clickedstack is true stacklist render */}
      <div
        className="clickedStack"
        style={{
          opacity: isStackClicked ? 1 : 0,
          transition: isStackClicked ? "ease-in 0.2s" : "ease-out 0.2s",
        }}
        onClick={handleTouch}
      >
        <ul className="menuItems clicked">
          <Link to="/">
            <li className="items home">Home</li>
          </Link>
          <Link to="/events">
            <li className="items pastEvents ">Events</li>
          </Link>
          <Link to="/join">
            <li className="items join">Join</li>
          </Link>
          <Link to="/about">
            <li className="items about">About</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
