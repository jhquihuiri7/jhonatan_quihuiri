import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/lotties/animation_ljz9afgt.json";

const Earth = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita renderizar en el servidor

  return (
    <div>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Earth;
