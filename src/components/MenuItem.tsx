import { Link, Text } from "@chakra-ui/react";

interface MenuItemProps {
  to: string;
  children: React.ReactNode;
}


const MenuItem: React.FC<MenuItemProps> = ({ to, children }) => {
  return (
    <Link to={to}>
      <Text fontWeight="bold" fontSize="lg" color="gray.800">
        {children}
      </Text>
    </Link>
  );
};


export default MenuItem;
