import React, { useState, useEffect } from "react";

export default function MountingPhase() {
  const [color, setColor] = useState("I am Neo");

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor("Welcome To Skcet");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{color}</h1>
      <p id="i"></p>
    </div>
  );
}
