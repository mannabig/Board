import React from "react";
import Happy from "../assets/Happy.png";

const Community = () => {
  return (
    <div className="bg-[#f5f2eb] flex items-center justif-center px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-3xl md:text-4xl font-semibold text-gray-900  mb-4">
          <h1>Join Our Community</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Are you skilled professional in home services, looking to expand
            your reach and grow your business? Join our Community and connect
            with homeowners seeking top-notch services!
          </p>
          <div className="mb-8 rounded-2xl overflow-hidden max-w-md  mx-auto">
            <img
              src={Happy}
              alt="Community Celebration"
              className="w-full h-auto object-cover"
            />
          </div>
          <button
            className="bg-[#1a365d] hover:bg-[#2a466d] text-white px-8 py-2 rounded-full  text-sm  md:text-base transition-colors"
            onClick={() => console.log("Join Now Clicked")}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
