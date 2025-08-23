import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/abhishek7631")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="text-center m-4 p-4 bg-gray-600 text-white text-3xl">
      Github Followers: {data.followers}, Github following: {data.following}
      <img src={data.avatar_url} width={200} alt="" />
    </div>
  );
}

export default Github;
