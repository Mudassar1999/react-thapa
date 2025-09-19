import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
