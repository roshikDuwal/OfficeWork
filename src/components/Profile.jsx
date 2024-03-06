import React from "react";
import Logo from "../assets/logo.jpg";
import "../styles/profilebar.css"

const profileData = {
  fullname: "Roshik Duwal",
  email: "roshikduwal@aviskaram.com",
  country: "Nepal",
  address: "",
  timezone: "Asia/Nepal",
  ratePerHour: [
    {
      rate: "USD 109",
    },
    {
      rate: "USD 100",
    },
  ],
};

const Profile = () => {
  const { fullname, email, country, address, ratePerHour, timezone } =
    profileData;

  return (
    profileData && (
      <>
        <div className="profile-container">
          
          <div className="profile-logo">
            <img src={Logo} alt="profile-logo" />
            <h3>Welcome, {fullname || "User"}</h3>
          </div>

          <div className="profile-details">
            <div>
              <h4>Full Name</h4> <p>{fullname || "N/A"}</p>
            </div>
            <div>
              <h4>Email</h4> <p>{email || "N/A"}</p>
            </div>
            <div>
              <h4>Country</h4> <p>{country || "N/A"}</p>
            </div>
            <div>
              <h4>Address</h4> <p>{address || "N/A"}</p>
            </div>
            <div>
              <h4>TimeZone</h4> <p>{timezone || "N/A"}</p>
            </div>
            <div>
              <h4>Rate per hour</h4>{" "}
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {ratePerHour.map((elem, index) => {
                  return (
                    <React.Fragment key={index}>
                      <p
                        style={{
                          backgroundColor: "#dfdfeb",
                          padding: "0.2rem",
                          fontSize: "0.8rem",
                          borderRadius: "5px",
                        }}
                      >
                        {elem.rate}
                      </p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </>
    )
  );
};

export default Profile;
