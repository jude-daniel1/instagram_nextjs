import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi91OcFKm0GzESScMVJOlhpl9aObXs3Ah55y3oByW-v1EsIr1qHr592kSzJEP_unVvrGU&usqp=CAU"
        alt="my image"
        className="h-16 rounded-full object-cover border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">codewithsahand</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
