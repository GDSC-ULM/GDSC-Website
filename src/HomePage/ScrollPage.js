import React from "react";
import Card from "./Card";
import FlagshipEvents from "./FlagshipEvents";
import "./ScrollPage.css";

function ScrollPage() {
  return (
    <div className="scrollPage">
      <Card heading={"What We Believe In"} list={true}/>
      <FlagshipEvents />
      <Card heading="Work In Progress" />
    </div>
  );
}

export default ScrollPage;