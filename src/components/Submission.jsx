import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import "../styles/submission.css";

const profileData = {
  fullname: "Roshik Duwal",
  email: "rowal@avfE.com",
  // Role: "User",
  // phone: "985251213",
  // country: "US",
  // address: "Bangalore, India",
  // fullname: "",
  // email: "",
  Role: "",
  phone: "",
  country: "",
  address: "",
};

const submission = () => {
  const { fullname, email, Role, country, address, phone } = profileData;

  return (
    // profileData && (
    //       <>
    //         <div className="container">
    //           <div className="profile">
    //             Submission
    //           </div>

    //           <div className="profile-details">
    //             <div>
    //             <h4>Name:</h4> <p>{fullname || "N/A"}</p>
    //             </div>
    //             <div>
    //             <h4>Email :</h4> <p>{email || "N/A"}</p>
    //             </div>
    //             <div>
    //             <h4>Phone:</h4>  <p>{phone || "N/A"}</p>
    //             </div>
    //             <div>
    //             <h4>Role:</h4>   <p>{Role || "N/A"}</p>
    //             </div>
    //             <div>
    //             <h4>Country:</h4>  <p>{country || "N/A"}</p>
    //             </div>
    //             <div>
    //             <h4>Address:</h4>  <p>{address || "N/A"}</p>
    //             </div>
    //           </div>

    //         </div>
    //       </>
    //     )

    <Box
      sx={{
        flexGrow: 2,
        overflow: "hidden",
        px: 3,
        background: "white",
      }}
    >
      <Grid
        item
        style={{
          textAlign: "center",
          fontSize: "20px",
          margin: "20px 0px 20px 0px",
        }}
      >
        Sumbission{" "}
      </Grid>
      <Grid container wrap="nowrap" spacing={4}>
        <Grid item sx={8}>
          <div style={{ marginBottom: "10px" }}>
            Name :{" "}
            {fullname || (
              <Link
                to=".."
                relative="path"
                style={{
                  margin: "36px",
                }}
              >
                Link
              </Link>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item sx={8}>
          <div style={{ marginBottom: "10px" }}>
            Email :{" "}
            {email || (
              <Link
                to=".."
                relative="path"
                style={{
                  margin: "40px",
                }}
              >
                link
              </Link>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={4}>
        <Grid item sx={8}>
          <div style={{ marginBottom: "10px" }}>
            Role :{" "}
            {Role || (
              <Link
                to=".."
                relative="path"
                style={{
                  margin: "50px",
                }}
              >
                link
              </Link>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={4}>
        <Grid item sx={8}>
          <div style={{ marginBottom: "10px" }}>
            Phone :{" "}
            {phone || (
              <Link
                to=".."
                relative="path"
                style={{
                  margin: "35px",
                }}
              >
                link
              </Link>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={4}>
        <Grid item sx={"8"}>
          <div style={{ marginBottom: "10px" }}>
            Address :{" "}
            {address || (
              <Link
                to=".."
                relative="path"
                style={{
                  margin: "20px",
                }}
              >
                link
              </Link>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={4}>
        <Grid item sx={8}>
          <div style={{ marginBottom: "10px" }}>
            Country :{" "}
            {country || (
              <Link
                to=".."
                relative="path"
                style={{
                  margin: "20px",
                }}
              >
                link
              </Link>
            )}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default submission;
