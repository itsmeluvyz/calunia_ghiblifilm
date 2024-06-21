import { useState } from "react";
import "./main-app.scss";
import { Outlet } from "react-router-dom";



export function MainApp() {
  return (

    <div>      
      <header className="app-header">
      <img src="/logoghibli.png" alt="Logo" className="app-logo" />
        Welcome to Ghibli Film Shops
        <small>The Best Film Ever</small>
      </header>
      
      <Outlet />
    </div>
  );
}

export default MainApp;
