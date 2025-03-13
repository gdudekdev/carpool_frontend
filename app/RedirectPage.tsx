import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./components/main/loader/Loader";

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Redirection après 2 secondes
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader />
    </div>
  );
};

export default RedirectPage;
