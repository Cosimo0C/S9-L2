import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./assets/component/CustomNavbar";
import MyFooter from "./assets/component/MyFooter";
import Welcome from "./assets/component/Welcome";
import AllTheBooks from "./assets/component/AllTheBooks";
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
