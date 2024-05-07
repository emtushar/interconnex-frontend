import React, { useEffect, useState, useNavigate } from "react";
import { useSelector } from "react-redux";

function Protected({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, loader, navigate]);
  return loader ? <h2>Loading ...</h2> : <>{children}</>;
}

export default Protected;
