import { Box, Center, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HomeComponent from "./components/HomeComponent";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>
      <GridItem area="main">
        <Center>
          <Box paddingLeft={2}>
            <HomeComponent />
          </Box>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
