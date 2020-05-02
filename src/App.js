import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import { Route } from "react-router-dom";
import Browser from './components/Browser';
import DataSetting from './components/DataSetting';
import Polymer from './components/Polymer';
import Redeem from './components/Redeem';
import AppSetting from './components/AppSetting';
import SettingInput from './components/SettingInput';
function App() {
  return (
    <div>
      <div className="row ">
        <div className="col-md-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <Route path='/dashboard'><Dashboard></Dashboard></Route>
          <Route path='/browser'><Browser></Browser></Route>
          <Route path='/data-setting'><DataSetting></DataSetting></Route>
          <Route path='/polymer'><Polymer></Polymer></Route>
          <Route path='/redeem'><Redeem></Redeem></Route>
          <Route path='/app_setting'><AppSetting></AppSetting></Route>
          <Route path='/settingInput'><SettingInput></SettingInput></Route> 
        </div>
        <div className="col-md-3">
          <SidebarRight></SidebarRight>
        </div>
      </div>
    </div>
  );
}

export default App;
