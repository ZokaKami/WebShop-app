import React, { useEffect, useState } from "react";
export default function itemRender() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from Express backend when the component mounts
    fetch("http://localhost:3001/getStore")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center xl:px-24 px-12 ">
      <div className="w-full md:w-1/3 xl:w-1/4 p-4 xl:max-w-[350px]">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="test" className="w-full h-64 object-fill" />

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">test</h2>
            <p className="text-gray-700">test</p>
          </div>
        </div>
      </div>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
