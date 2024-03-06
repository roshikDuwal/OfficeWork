import "../styles/submission.css";

const profileData = {
  fullname: "Roshik Duwal",
  email: "roshikduwal@avfsramdE.com",
  Role: "Admin",
  phone: "985251213",
  country: "US",
  address: "Bangalore, India",
};

const submission = () => {
  const { fullname, email, Role ,country , address ,phone } = profileData;
  
  return (
    profileData && (
      <>
        <div className="container">
          <div className="profile">
            Submission
          </div>

          <div className="profile-details">
            <div>
            <h4>Name:</h4> <p>{fullname || "N/A"}</p>
            </div>
            <div>
            <h4>Email :</h4> <p>{email || "N/A"}</p>
            </div>
            <div>
            <h4>Phone:</h4>  <p>{phone || "N/A"}</p>
            </div>
            <div>
            <h4>Role:</h4>   <p>{Role || "N/A"}</p>
            </div>
            <div>
            <h4>Country:</h4>  <p>{country || "N/A"}</p>
            </div>
            <div>
            <h4>Address:</h4>  <p>{address || "N/A"}</p>
            </div>
          </div>

        </div>
      </>
    )
  );
};

export default submission;
