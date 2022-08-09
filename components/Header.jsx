import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import profile from "../static/profile.jpg";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between max-w-6xl px-4 mx-auto">
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          layout="fill"
          className="object-contain"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative  lg:hidden ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>

      {/* Search */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-48 border border-gray-300 p-2 text-sm pl-9 focus:ring-black focus:border-black rounded-md"
        />
      </div>
      {/* Profle Icons */}
      <div className="flex items-center cursor-pointer gap-x-3">
        <HomeIcon className="hidden md:inline-flex   h-6 cursor-pointer hover:scale-125 transition-transform ease-in-out duration-200" />
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform ease-in-out duration-200" />

        <Image
          src={profile}
          width={50}
          height={50}
          className="rounded-full object-contain"
        />
      </div>
    </div>
  );
}
