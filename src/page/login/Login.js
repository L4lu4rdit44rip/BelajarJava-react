import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import InputTextMessage from "../../component/TextField/InputTextField";
import Buttons from "../../component/Button/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function HalamanLogin(params) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const hendleSubmit = (event) => {
    event.preventDefault();

    console.log("selamat anda telah berhasil login!!!!!");
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        component="form"
        onSubmit={hendleSubmit}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockPersonIcon />
        </Avatar>
        <Typography component={"h1"} variant="h5">
          Sign In
        </Typography>
        <InputTextMessage id="email" label="Email Address" variant="outlined" fullWidth required margin="normal" autoFocus name="email" type="text" />
        <div
          style={{
            display: "flex",
            width: "100%",
            position: "relative",
          }}
        >
          <InputTextMessage id="password" label="password" variant="outlined" fullWidth required margin="normal" autoFocus name="password" type={isShowPassword ? "text" : "password"} />
          <div
            style={{
              position: "absolute",
              right: 15,
              top: 33,
              cursor: "pointer",
            }}
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
          </div>
        </div>
        <Buttons type="submit" variant="contained" fullWidth label="Sign In" />
      </Box>
    </Container>
  );
}
export default HalamanLogin;
