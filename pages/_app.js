/* import fonts */
import "@fontsource/poppins";
import "@fontsource/cairo";
/* import theme and chakra provider */
import theme from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
/* prevent button outline when being clicked */
import "focus-visible";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
