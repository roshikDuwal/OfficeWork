import "./BottomBar.css";
import { FaBriefcase } from "react-icons/fa";

const arr = [
  {
    title: "Title 1",
    description: "Description 1",
  },
  {
    title: "Title 2",
    description: "Description jjdhha jdnlkfnsa klkdf klNLKDJ SkSKLSD 2",
  },
  {
    title: "Title 3",
    description: "Description 3",
  },
];

const lists = arr.map((item, index) => (
  <ul key={index}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
  </ul>
));

const array = [
  {
    title: "Title 1",
    description: "Description 1",
  },
  {
    title: "Title 2",
    description: "Description 2",
  },
  {
    title: "Title 3",
    description: "Description 3",
  },
];

const listItem = array.map((item, index) => (
  <ul key={index}>
    <div className="logo">

      <FaBriefcase />
      {item.title}
    </div>
  
    <p>{item.description}</p>
  </ul>
));

const BottomBar = () => {
  return (
    <>
      <div className="container">
        <div className="left-container">
          <h1>Upcoming Works</h1>
          <p>{lists}</p>
        </div>

        <div className="right-container">
          <h1>Work List</h1>
          <p>{listItem}</p>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
