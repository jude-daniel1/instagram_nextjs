import React from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="rounded-full object-cover h-12 border p-1 mr-3"
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img src={img} alt={caption} className="w-full object-cover" />

      {/* Post Buttons */}

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post Comment */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Post input box */}
      <form action="" className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Enter your comment..."
          className="flex-1 border-none  outline-none focus:ring-0 text-sm"
        />
        <button type="submit" className="text-blue-400 font-bold">
          Post
        </button>
      </form>
    </div>
  );
}
