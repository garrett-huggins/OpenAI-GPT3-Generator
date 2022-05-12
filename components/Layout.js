import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  const path = useRouter();
  return (
    <Box as="main" minHeight="100vh" position="relative" pb={6}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OpenAi Generator</title>
      </Head>
      <Navbar path={path.asPath} />
      <Container maxW="container.xl" justifyContent="center" display="flex">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
