import Document from "../components/Document";
import Profile from "../components/Profile";
import Submission from "../components/Submission";


const Home = () => {
  return (
    <>
      <div className="homepage">
        <Profile />
        <Submission />
        <Document/>
      </div>
    </>
  );
};

export default Home;
