/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      target: "home",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      target: "about",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      target: "testimonial",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      target: "contact",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container navbar-links-container">
        <Link to="home" className="navbar-link" smooth={true}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
          <Link
            key={index}
            to={item.target}
            smooth={true}
            className="navbar-link"
          >
            {item.text}
          </Link>
        ))}
        <button className="primary-button">My Profile</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
