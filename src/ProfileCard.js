import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!userData) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Main Card Container */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 flex items-center border border-gray-300">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={userData.picture.large}
            alt="User"
            className="w-32 h-32 rounded-lg border"
          />
        </div>
        {/* Right: User Details */}
        <div className="ml-6 flex flex-col space-y-2">
          <p className="text-lg font-medium">{`${userData.name.first} ${userData.name.last}`}</p>
          <p className="text-lg font-medium capitalize">{userData.gender}</p>
          <p className="text-lg font-medium">{userData.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
