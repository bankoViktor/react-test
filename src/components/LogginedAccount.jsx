import React from "react";
import styles from "./LogginedAccount.module.css";
import UserAvatar from "./UserAvatar";

export default function LogginedAccount({ user, isLoggined, className }) {
  function accoutClick() {
    console.log(`account click`);
  }

  return (
    <div
      className={`${styles.logginedAccount} ${className} d-flex align-items-center`}
      title={user.username}
      onClick={accoutClick}
    >
      <div className="me-2">
        <UserAvatar size="48" userId={user.id} />
      </div>
      <div className="" style={{ marginTop: "-0.25rem" }}>
        <div className={styles.accountName}>{user.realname}</div>
        <div className={styles.accountPosition}>{user.position}</div>
      </div>
    </div>
  );
}
