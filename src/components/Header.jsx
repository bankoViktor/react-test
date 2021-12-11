import React from "react";
import SidebarToggle from "./SidebarToggle";
import styles from "./Header.module.css";
import Account from "./LogginedAccount";

export default function Header({ user, sidebarRef }) {
  return (
    <div
      className={`${styles.Header} d-flex align-items-center border-bottom bg-light sticky-top`}
    >
      <SidebarToggle sidebarRef={sidebarRef} />
      <div className="fs-4 fw-bold ms-2">COMPANY-NAME</div>
      <div className="flex-grow-1"></div>
      <Account className="me-2" user={user} isLoggined="true" />
    </div>
  );
}
