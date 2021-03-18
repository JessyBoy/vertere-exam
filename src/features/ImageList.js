import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchImageList, imageCollection } from "./imageSlice";
import Loader from "./Loader";

function ImageList() {
  const { imageLists, isLoading } = useSelector(imageCollection);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    setSearch(dispatch(searchImageList(search)));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearch(dispatch(searchImageList(search)));
    }
  };
  return (
    <div className="p-4">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div>
          <input
            className="border border-black mr-2 p-2 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search image here..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <button
            className="border border-black p-2 focus:outline-none rounded-lg hover:bg-green-400 hover:border-green-400 hover:text-white font-semibold transform ease-in duration-200"
            onClick={() => onSearch()}
          >
            Search
          </button>
        </div>
        <div className="pt-4 lg:pt-0">
          <p>List of keywords for searching:</p>
          <p className="font-semibold text-xl pt-2">
            "Apollo 11 FLIGHT", "MOON", "LUNAR SURFACE", "LUNAR BASES", "LUNAR
            MODULE", "ASTRONAUTS"
          </p>
        </div>
      </div>
      {isLoading === true ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 pt-4">
          {imageLists &&
            imageLists.map((img, parent) => {
              console.log(img);
              if (img.links) {
                return (
                  <div key={parent}>
                    {img.links.map((link, index) => {
                      if (link.render === "image") {
                        return (
                          <div className="h-64" key={index}>
                            <img
                              className="h-full w-full"
                              src={
                                link.href
                                  ? link.href
                                  : "https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                              }
                              alt="nasa-api"
                            />
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      )}
    </div>
  );
}

export default ImageList;
