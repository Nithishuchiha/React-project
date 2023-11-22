import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDescription = () => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:3001/posts")
      .then((response) => {
        setDetail(response.data);
      })
      .catch((error) => {
        console.error("Fetching error");
      });
  });
  return (
    <div>
      <h1>Project Details</h1>

      {detail.map((item) => (
        <ul>
          <li key={item.id}> Name:{item.name}</li>
          <li key={item.id}> Description:{item.description}</li>
          <li key={item.id}> price:{item.Price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductDescription;
