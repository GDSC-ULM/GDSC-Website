import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "./logo/logo.png";

const { Header } = Layout;

function NavBar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "/events",
      label: <Link to="/events">Events</Link>,
    },
    {
      key: "/join",
      label: <Link to="/join">Join</Link>,
    },
    {
      key: "/about",
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <Header className="navbar">
      <Link to="/" className="logo-wrapper">
        <img src={logo} alt="GDSC Logo" className="logo" />
      </Link>
      
      <div className="menu-section">
        {/* Desktop Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          className="desktop-menu"
        />

        {/* Mobile Menu Button */}
        <Button
          className="mobile-menu-button"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />

        {/* Mobile Menu Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
          className="mobile-drawer"
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={() => setVisible(false)}
          />
        </Drawer>
      </div>
    </Header>
  );
}

export default NavBar;
