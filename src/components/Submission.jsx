import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import "../styles/submission.css";

const profileData = {
  // fullname: "Roshik Duwal",
  // email: "rowal@avfE.com",
  // Role: "User",
  // phone: "985251213",
  // country: "US",
  // address: "Bangalore, India",
  fullname: "",
  email: "",
  Role: "",
  phone: "",
  country: "",
  address: "",
};

const submission = () => {
  const { fullname, email, Role, country, address, phone } = profileData;

  const isAnyFieldEmpty = () => {
    return !fullname || !email || !Role || !country || !address || !phone;
  };

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
        padding: "10px",
        marginBottom: "5x",
      }}
    >
      {!isAnyFieldEmpty() ? (
        <>
          <Grid
            item
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Sumbission{" "}
          </Grid>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>Name : {fullname}</Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>Email : {email}</Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>Role : {Role}</Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>Phone : {phone}</Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>Address : {address}</Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>Country : {country}</Grid>
          </Grid>
        </>
      ) : (
        <Button
          variant="outlined"
          href="#outlined-buttons"
          style={{
            textDecoration: "none",
            alignItems: "center",
            display: "flex",
           
          }}
        >
          Link
        </Button>
      )}
    </Box>
  );
};

export default submission;
