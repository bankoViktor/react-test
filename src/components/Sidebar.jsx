import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";

const Sidebar = React.forwardRef(({ items }, ref) => {
  return (
    <div ref={ref} className={`${styles.sidebar} border-end`}>
      <ul className="list-unstyled">
        <li>First</li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} title={item.description}>
              {item.icon} {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Sidebar;
