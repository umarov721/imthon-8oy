import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Cart from "../cart";
import { RiFireLine } from "react-icons/ri";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import Carts from "../carts";
import Footer from "../footer";
import SiteBar from "../site_bar";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineMenu } from "react-icons/md";

const MainLayout: React.FC = () => {
  const [component, setComponent] = useState<number>(() =>
    parseInt(localStorage.getItem("component") || "1")
  );
  const [siteBar, setSiteBar] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("component", component.toString());
  }, [component]);

  const toggleSiteBar = () => {
    setSiteBar(!siteBar);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ display: "flex", width: "100%", height: "80px" }}>
        <button
          onClick={toggleSiteBar}
          style={{
            border: "none",
            backgroundColor: "transparent",
            zIndex: 1100,
          }}
        >
          {siteBar ? (
            <div style={{ width: "20%" }}>
              <HiMenuAlt2 size={30} style={{ color: "#fca212" }} />
            </div>
          ) : (
            <div style={{ width: "20%" }}>
              <MdOutlineMenu size={30} style={{ color: "#fca212" }} />
            </div>
          )}
        </button>
        <Navbar />
      </div>

      <div style={{ display: "flex", flex: "1" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: siteBar ? "0" : "-250px",
            width: "220px",
            height: "10       0%",
            transition: "left 0.3s ease",
            zIndex: 100,
          }}
        >
          <SiteBar  />
        </div>

        <div
          style={{
            width: "100%",
            marginLeft: siteBar ? "250px" : "0",
            transition: "margin-left 0.3s ease",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#f3f3f3",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: "24px",
                color: "#333",
              }}
            >
              Топ объявления <RiFireLine />
            </h1>

            <div>
              <button onClick={() => setComponent(1)} style={{ border: "none" }}>
                <CiGrid2H style={{ width: "20px", height: "20px" }} />
              </button>
              <button onClick={() => setComponent(2)} style={{ border: "none" }}>
                <CiGrid41 style={{ width: "20px", height: "20px" }} />
              </button>
            </div>
          </div>

          <div style={{ flex: "1" }}>{component === 1 ? <Cart /> : <Carts />}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
