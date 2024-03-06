import BottomBar from "../components/BottomBar";
import Profile from "../component/topbar/Profile";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <Profile />
        <BottomBar />
      </div>
    </>
  );
};

export default Home;
