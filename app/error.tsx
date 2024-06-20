"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error, "@Error");
  }, [error]);
  return (
    <div className="w-full min-h-full flex items-center justify-center flex-col text-lg">
      <h2>Something Went Wrong! {error.message}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default Error;
