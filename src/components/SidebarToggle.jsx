import React, { useState } from "react";
import styles from "./SidebarToggle.module.css";
import * as Icons from "./Icons";

export default function SidebarToggle({ sidebarRef }) {
  const [isActive, setToggle] = useState(false);

  function toggle() {
    setToggle(!isActive);

    /** @type {HTMLDivElement} */
    const sidebar = sidebarRef.current;
    sidebar.classList.toggle("active");
  }

  return (
    <button className={`${styles.SidebarToggle}`} onClick={toggle}>
      <Icons.Menu />
    </button>
  );
}
