import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../assets/popofcolor.webp";

const HomeComponent = () => {
  return (
    <Flex padding="20px">
      <Center>
        <Box>
          <Center>
            <Image src={logo} boxSize="300px" mr={8} />
          </Center>
          <Center w="1500px">
            <Box>
              <Text paddingStart="10px" marginTop='10px'>
                Pop of Color, your go-to destination for mouthwatering treats,
                is thrilled to bring a burst of flavor and excitement to your
                upcoming event.
              </Text>
              <Text paddingStart="10px">
               
              </Text>
            </Box>
          </Center>
          <Center marginTop='80px'>
          <Button colorScheme='pink'>Learn More</Button>
          </Center>
        </Box>
      </Center>
    </Flex>
  );
};

export default HomeComponent;
