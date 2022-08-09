import React from "react";

export default function Story({ username, img }) {
  return (
    <div className="truncate min-w-max">
      <img
        src={img}
        alt={username}
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
