import styled from "@emotion/styled";
import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  ClickAwayListener,
  Divider,
  Grow,
  IconButton,
  InputBase,
  ListItemIcon,
  MenuList,
  Paper,
  Popper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { borderRadius } from "@mui/system";
import React, { useState } from "react";
import { theme } from "../theme";
import {
  Favorite,
  Logout,
  NoEncryption,
  Notifications,
  PersonAdd,
  Settings,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SeachBox = styled(Autocomplete)({
  padding: "0 10px",
  borderRadius: "10px",
  width: "40% ",
});

const SearchTextField = styled(TextField)`
  & label.Mui-default {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

const Icons = styled(Box)({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
});

const UserBox = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
});

const Navbar = (topFilm: any) => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [menuOpen, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block", color: "white" } }}
        >
          1st Prj
        </Typography>
        <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SeachBox
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={topFilm.topFilm.map((option: any) => option.label)}
          renderInput={(params) => (
            <SearchTextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        ></SeachBox>
        <Icons ref={anchorRef} gap={0}>
          <IconButton>
            <Badge color="error" variant="dot" sx={{ cursor: "pointer" }}>
              <MailIcon color="info" />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge color="error" variant="dot" sx={{ cursor: "pointer" }}>
              <Notifications color="info" />
            </Badge>
          </IconButton>
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            onClick={(e) => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            sx={{ width: 30, height: 30 }}
          />
          <Typography>Thuan</Typography>
        </UserBox>
        <Menu
          anchorEl={anchorRef.current}
          id="account-menu"
          open={menuOpen}
          onClose={(e) => setOpen(false)}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar
              src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              sx={{ width: 30, height: 30 }}
            />
            Profile
          </MenuItem>
          <MenuItem>
            <Avatar src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" />
            My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </StyledToolbar>
      {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={(e) => setOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu> */}
      {/* <Popper
        open={menuOpen}
        placement="bottom-start"
        transition
        disablePortal
        anchorEl={anchorRef.current}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top right",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={(e) => setOpen(false)}>
                <MenuList
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}
    </AppBar>
  );
};

export default Navbar;
