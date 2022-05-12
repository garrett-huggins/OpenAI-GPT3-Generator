import NextLink from "next/link";
import {
  Container,
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { LinkItem } from "./NavbarStyles";

const Navbar = (props) => {
  const { path } = props;
  /* toggle color mode */
  const { toggleColorMode } = useColorMode();
  return (
    /* Navbar */
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#089c68", "#2c3052")}
      zIndex={2}
      {...props}
    >
      {/* Nav Container */}
      <Container
        display="flex"
        p={2}
        maxW="container.lg.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            OpenAI Generator
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* Page Links */}
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          {/* Toggle Color Button */}

          <IconButton
            onClick={toggleColorMode}
            varient="outline"
            arial-aria-label="Dark Mode"
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
            backgroundColor={useColorModeValue("#5ccca5", "#3b406b")}
            _hover={{ bg: useColorModeValue("#18d995", "#656a94") }}
          />

          {/* Hamburger menu */}
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                varient="outline"
                aria-label="Options"
                backgroundColor={useColorModeValue("#5ccca5", "#3b406b")}
                _hover={{ bg: useColorModeValue("#18d995", "#656a94") }}
              />
              {/* Hamburger Page Links */}
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
