import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaRegClock } from "react-icons/fa6";
import "../../styles/chart.css"

const Status = ({ type, title }) => {
  const [currentHour, setCurrentHour] = useState("");
  const [currentMinute, setCurrentMinute] = useState("");
  const [currentSecond, setCurrentSecond] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setCurrentMinute(now.getMinutes());
      setCurrentSecond(now.getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Open Matter", "Closed Matter"],
  };

  const series = [44, 55];


  return (
    <>
      <div className="status-container">
        <h2>{title}</h2>
        {type == "matterstatus" ? (
          <>
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              height="350"
            />
          </>
        ) : type == "loggedin" ? (
          <div className="loggedintime">
            <FaRegClock />
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "2rem", fontWeight: "600" }}>
                  {currentHour}
                </p>
                <p>Hours</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "2rem", fontWeight: "600" }}>
                  {currentMinute}
                </p>
                <p>Minutes</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "2rem", fontWeight: "600" }}>
                  {currentSecond}
                </p>
                <p>Hours</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Status;
