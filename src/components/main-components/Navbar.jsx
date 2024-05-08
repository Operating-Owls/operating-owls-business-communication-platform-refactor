import * as React from "react";
import SearchBar from "./Search";
import ProfileComponent from './ProfileComponent';


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchOpen = (event) => {
    setAnchorEl(event.currentTarget);
    //setForcePopover(true);
    console.log("reopening this popover");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Operating Owls
          </Typography>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearchOpen={handleSearchOpen}
          />
          <ProfileComponent
            username="username"
            nickname="john doe"
            online={true}
            // FIXME: Replace with actual user data
            // username={props.username}
            // nickname={props.username}
            // online={true}
            pfp="https://picsum.photos/200"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;