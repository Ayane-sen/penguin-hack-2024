import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

type Props = {
  children: React.ReactNode;
};

const IsAuth: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = auth.currentUser?.getIdToken();

    if (!token) {
      navigate("/auth");
    }
  });

  return <>{children}</>;
};

export default IsAuth;
