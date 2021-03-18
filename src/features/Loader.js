import React from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  const loading = true;
  return (
    <div>
      <div className="sweet-loading flex flex-col justify-center items-center h-screen">
        <div>
          <HashLoader color="#6FE634" loading={loading} size={250} />
        </div>
        <div className="mt-40 text-3xl font-semibold">
          <p>Fetching results as of the moment ...</p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
