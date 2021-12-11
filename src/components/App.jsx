import "../styles.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import { useRef } from "react";

const currentUser = {
  id: 1027,
  username: "ivanovam",
  realname: "Иванова Мария",
  position: "Старший менеджер"
};

export default function App() {
  const sidebarRef = useRef();

  return (
    <div className="vh-100">
      <Header sidebarRef={sidebarRef} user={currentUser} />
      <div className="d-flex">
        <Sidebar ref={sidebarRef} />
        <div className="">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}
