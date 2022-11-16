import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";

const MailVerification = ({ message, setIsLogin }) => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const time = setInterval(() => {
      setTimer((curState) => curState - 1);
      if (timer === 1) {
        navigate("/auth");
        setIsLogin(true);
      }
    }, 1000);

    return () => clearInterval(time);
  }, [timer, navigate, setIsLogin]);
  return (
    <Stack
      sx={{
        position: "absolute",
        top: "200px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "450px",
        height: "200px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
        border: "1px solid #2776EA",
      }}
    >
      <Typography component="h1" variant="h5">
        Account Activation
      </Typography>
      <Typography component="p"> {message} </Typography>

      <Typography
        component="span"
        sx={{ fontWeight: "bold", fontSize: "16px" }}
      >
        {" "}
        {timer} Redirecting
      </Typography>
    </Stack>
  );
};

export default MailVerification;
