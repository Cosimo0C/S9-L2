import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./component/CustomNavbar";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import AllTheBooks from "./component/AllTheBooks";
function App() {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <div className="container">
        <AllTheBooks />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
