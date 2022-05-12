import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";

export const LinkItem = ({ href, path, children, noPadding }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={noPadding ? 0 : 2}
        borderRadius="base"
        bg={active ? "blackAlpha.600" : undefined}
        color={active ? "white" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};
