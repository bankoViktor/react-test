import React from "react";

export default function UserAvatar({ size, userId }) {
  return (
    <img
      width={size}
      height={size}
      alt="User Avatar"
      src={`https://picsum.photos/id/${userId}/150/150`}
      className="rounded-circle"
    />
  );
}
