import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetching = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:3001/posts";
    axios.get(apiUrl).then((response) => {
      setData(response.data).catch((error) => {
        console.error("error in fetching data");
      });
    });
  }, []);
  return (
    <div>
      <h1>fetching</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetching;
