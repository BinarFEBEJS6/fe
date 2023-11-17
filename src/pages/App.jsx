import React from "react";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">App</div>
      <button onClick={() => navigate(`/home`)}>Home</button>
      <button>Submit</button>
      <button>Nandes</button>
    </>
  );
};
