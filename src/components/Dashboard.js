import React from "react";
import Card from "./Card";

function Dashboard() {
  return (
    <div className="p-3 pt-3" style={{height:"100vh"}}>
      <div>
      <span className="float-left">
        <h2 className="font-weight-bold font-color">Dashboard</h2>
      </span>
      <span className="float-md-right mt-2">
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Search" />
            <button type="submit" className="searchButton">
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <span className="mt-2 ml-3">
              {" "}
              <ion-icon name="notifications-sharp"></ion-icon>
            </span>
          </div>
        </div>
      </span>
      </div><br></br><br></br><br></br>
      <div>
          <Card></Card>
      </div>
    </div>
  );
}

export default Dashboard;
