import { Text, Box, Link } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Box pt={14} w="600px" textAlign="center">
        <Text as="h2" fontSize="3rem">
          About This Project
        </Text>
        <Text mb={5} fontSize="1.5rem">
          This project was built with Next.js as the foundation, using Chakra UI
          and Styled Components for stylization. The AI response generator was
          built using OpenAI&apos;s GPT-3 and its varius AI engines, with each
          request being sent via OpenAI&apos;s Node.js library.
        </Text>
        <Link
          href="https://openai.com/api/"
          target="_blank"
          fontSize="1.5rem"
          color="#0062ff"
        >
          See More About OpenAI&apos;s powerful API
        </Link>
      </Box>
    </Layout>
  );
}
