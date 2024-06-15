import React from "react";

const page = () => {
  return (
    <div class="sm:flex items-center max-w-screen-2xl m-20  ">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text">
          <span class="text-gray-950 border-b-2 border-indigo-600 uppercase text">
            About us
          </span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span class="text-indigo-600">Our Company</span>
          </h2>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
