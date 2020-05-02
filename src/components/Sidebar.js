import React from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="border-right p-3 pt-3 sidebar" style={{ height: "100vh" }}>
      <img
        src="https://img.icons8.com/color/48/000000/men-age-group-4.png"
        alt="logo"
      />
      <div className="wrapper">
        <div className="pt-5 pl-3 mt-md-4">
          <NavLink activeClassName='active' to="/dashboard">
            {" "}
            <MaterialIcon icon="dashboard"></MaterialIcon>
          </NavLink>
        </div>
        <div className="pl-3 pt-5">
          <NavLink activeClassName='active' to="/browser">
            {" "}
            <MaterialIcon icon="open_in_browser"></MaterialIcon>
          </NavLink>
        </div>
        <div className="pl-3 pt-5">
          <NavLink activeClassName='active' to="/data-setting">
            <MaterialIcon icon="perm_data_setting"></MaterialIcon>
          </NavLink>
        </div>
        <div className="pl-3 pt-5">
          <NavLink activeClassName='active' to="/polymer">
            {" "}
            <MaterialIcon icon="polymer"></MaterialIcon>
          </NavLink>
        </div>
        <div className="pl-3 pt-5">
          <NavLink activeClassName='active' to="/redeem">
            {" "}
            <MaterialIcon icon="redeem"></MaterialIcon>
          </NavLink>
        </div>
        <div className="pl-3 pt-5">
          <NavLink activeClassName='active' to="/app-setting">
            {" "}
            <MaterialIcon icon="settings_applications"></MaterialIcon>
          </NavLink>
        </div>
        <div className="pl-3 pt-5">
          <NavLink activeClassName='active' to="/settingInput">
            {" "}
            <MaterialIcon icon="settings_input_component"></MaterialIcon>
          </NavLink>
        </div>
        <div className="d-flex align-content-end mt-md-5 pt-md-5 ml-2">
          <Icon></Icon>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
