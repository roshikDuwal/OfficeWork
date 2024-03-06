import Avatar from "@mui/material/Avatar";
import { Grid, Typography, Box } from "@mui/material";
import "../styles/profilebar.css";

const profileData = {
  fullname: "Roshik Duwal",
  email: "roshikduwal@aviskaram.com",
  role: "User",
};

const Profile = () => {
  const { fullname, email, role } = profileData;

  return (
    profileData && (
      <>
        <div className="profile-container">
          <div className="profile-logo">
            <Avatar
              alt="Roshik "
              src="/assets/logo.jpg"
              sx={{ width: 140, height: 140 }}
            />
          </div>
          <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            <Grid item xs>
              <Typography variant="h5">{`${fullname}`}</Typography>
              <Typography variant="subtitle1">{email}</Typography>
              <Typography variant="body1">{role}</Typography>
            </Grid>
          </Box>
        </div>
      </>
    )
  );
};

export default Profile;
