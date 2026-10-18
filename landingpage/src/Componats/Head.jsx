import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
export default function Head() {
const navigate = useNavigate();
  return (
    <>
      <AppBar >
        <Box sx={{display:"flex", flexDirection:"row"}}>
          <Typography variant="h1">welcom</Typography>
          <IconButton onClick={() => navigate("/login")}>login</IconButton>
        </Box>
      </AppBar>
    </>
  );
}
