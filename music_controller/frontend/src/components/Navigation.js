import React from "react";
import { Button } from "@mui/material";

const Navigation = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "98vw",
      padding: "10px",
    }}>
        <Button variant="contained" href="/">Home</Button>

        <div className="right-section" style={{
          display: "flex",
          gap: "10px",
        }}>
        <Button variant="text" href="/create">Create new room</Button>
        <Button variant="contained" color="error" href="/home">Debug</Button>
        </div>
    </div>
  )
}

export default Navigation