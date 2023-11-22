import React, { useState, useEffect } from "react";

export default function MountingPhase() {
  const [name, setName] = useState("I am Neo");
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const timer = setTimeout(() => {
        setName("Welcome To Skcet");
      }, 3000);

      return () => clearTimeout(timer);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{color}</h1>
      <p id="i"></p>
    </div>
  );
}
