import Logo from "../assets/logo.jpg";
import "../styles/profilebar.css";

const profileData = {
  fullname: "Roshik Duwal",
  email: "roshikduwal@aviskaram.com",
  Role: "Admin",
};

const Profile = () => {
  const { fullname, email, Role } = profileData;

  return (
    profileData && (
      <>
        <div className="profile-container">
          <div className="profile-logo">
            <img src={Logo} alt="profile-logo" />
            <h3> {fullname || "User"}</h3>
          </div>

          <div className="profile-details">
            <div>
               <p>{fullname || "N/A"}</p>
            </div>
            <div>
               <p>{email || "N/A"}</p>
            </div>
            <div>
               <p>{Role || "N/A"}</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
