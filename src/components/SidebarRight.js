import React from "react";
import Icon from "./Icon";

function SidebarRight() {
  return (
    <div
      className="border-left bg-light p-3 b-shadow pt-3 cont"
      style={{ height: "100vh" }}
    >
      <div>
      <span className='float-right pl-2'>
                <Icon></Icon>
            </span>
        <span className="float-right">
            <h4 className="font-color font-weight-bold">
              Hi Martin<br></br>
              <span
                className="font-weight-lighter font-smaller float-right"
                style={{ fontSize: "13px" }}
              >
                AMCP Corp
              </span>
              
            </h4>
        </span>
       
      </div>
      <div className="btn-container mx-5">
        <button className="btn btn-primary rounded-pill ">Action Button</button>
      </div>
    </div>
  );
}

export default SidebarRight;
