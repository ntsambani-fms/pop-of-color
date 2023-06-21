import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/popofcolor.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import MenuItem from "./MenuItem";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="80px"></Image>
      <HStack spacing={4}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About Us</MenuItem>
        <MenuItem to="/services">Services</MenuItem>
        <MenuItem to="/contact">Contact Us</MenuItem>
      </HStack>
    </HStack>
  );
};

export default NavBar;
