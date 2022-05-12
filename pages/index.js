import Layout from "../components/Layout";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Select,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  PromptText,
  GenerateButton,
  PromptCard,
  PromptForm,
  Hr,
  TemperatureSlider,
  LengthSlider,
  PenaltySlider,
} from "../components/PromptStyles";

export default function Home() {
  /* prompts */
  const [promptInput, setPromptInput] = useState("");
  const [prompts, setPrompts] = useState([]);

  /* options */
  const [engine, setEngine] = useState("text-curie-001");
  const [temperature, setTemperature] = useState(0.5);
  const [length, setLength] = useState(32);
  const [frequencyPenalty, setFrequencyPenalty] = useState(0);
  const [presencePenalty, setPresencePenalty] = useState(0);

  /* Open AI API*/
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  /***********/

  /* set color here due to render issue */
  const PromptCardBG = useColorModeValue("#5ccca5", "#595e87");
  const PromptTextColor = useColorModeValue("black", "white");
  const ClearButtonBG = useColorModeValue("#51b592", "#3b406b");
  const ClearButtonBGHover = useColorModeValue("#18d995", "#656a94");

  /* OpenAI Create Completion */
  async function onSubmit(event) {
    event.preventDefault();
    const response = await openai.createCompletion(engine, {
      prompt: `${promptInput}`,
      temperature: temperature,
      max_tokens: length,
      top_p: 1,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
    });
    var AIprompt = promptInput;
    var AIstory = response.data.choices[0].text;
    const AIresult = { prompt: AIprompt, story: AIstory };
    setPrompts((oldPrompts) => [AIresult, ...oldPrompts]);
  }

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center" pt={14}>
        <Text as="h1" textAlign="center" fontSize="3rem" p={2}>
          OpenAI Generator
        </Text>
        <Text textAlign="center" fontSize="1.5rem">
          Create AI generated responses using OpenAI&apos;s GPT-3
        </Text>

        {/* Options */}
        <Box
          as="section"
          mt={5}
          id="options"
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Text as="h3" fontSize="2rem">
            Generator Options
          </Text>

          {/* engine */}
          <Box w="200px" mt={2}>
            <Text fontSize="18px">GPT-3 Engine</Text>
            <Select onChange={(e) => setEngine(e.target.value)}>
              <option defaultValue value="text-curie-001">
                text-curie-001
              </option>
              <option value="text-babbage-001">text-babbage-001</option>
              <option value="text-ada-001">text-ada-001</option>
              <option value="text-davinci-002">text-davinci-002</option>
            </Select>
          </Box>

          {/* temperature slider */}
          <Box w="200px" mt={2}>
            <Text fontSize="18px">
              <Tooltip
                placement="right"
                aria-label="Temperature tooltip"
                label="Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetive."
              >
                Temperature
              </Tooltip>
            </Text>
            <TemperatureSlider
              color={useColorModeValue("#0abec4", "#656a94")}
              sliderValue={temperature}
              onChange={(val) => setTemperature(val)}
            />
          </Box>

          {/* length slider */}
          <Box w="200px" mt={2}>
            <Text fontSize="18px">
              <Tooltip
                placement="right"
                aria-label="Max length tooltip"
                label="The maximum number of tokens to generate. Requests can use up to 2,048 or 4,000, varies by engine."
              >
                Maximum Length
              </Tooltip>
            </Text>
            <LengthSlider
              color={useColorModeValue("#0abec4", "#656a94")}
              sliderValue={length}
              onChange={(val) => setLength(val)}
            />
          </Box>

          {/* frequency penalty slider */}
          <Box w="200px" mt={2}>
            <Text fontSize="18px">
              <Tooltip
                placement="right"
                aria-label="Frequency tooltip"
                label="How much to penalize new tokerns based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim."
              >
                Frequency Penalty
              </Tooltip>
            </Text>
            <PenaltySlider
              color={useColorModeValue("#0abec4", "#656a94")}
              sliderValue={frequencyPenalty}
              onChange={(val) => setFrequencyPenalty(val)}
            />
          </Box>

          {/* presence penalty slider */}
          <Box w="200px" mt={2}>
            <Text fontSize="18px">
              <Tooltip
                placement="right"
                aria-label="Presence tooltip"
                label="How much to penalize new tokens based on whether they appear in the text so far. Increases the model's likelihood to talk about new topics."
              >
                Presence Penalty
              </Tooltip>
            </Text>
            <PenaltySlider
              color={useColorModeValue("#0abec4", "#656a94")}
              sliderValue={presencePenalty}
              onChange={(val) => setPresencePenalty(val)}
            />
          </Box>
        </Box>
        {/*** end of options ***/}

        {/* user form */}
        <PromptForm onSubmit={onSubmit}>
          <PromptText
            type="text"
            name="prompt"
            placeholder="Give OpenAI a prompt to generate a response for"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <GenerateButton
            type="submit"
            value="Generate"
            backgroundColor={useColorModeValue("#51b592", "#3b406b")}
            hover={useColorModeValue("#18d995", "#656a94")}
          />
        </PromptForm>

        {/* responses */}
        <Text
          as="h2"
          pt="1rem"
          fontSize="2rem"
          color={useColorModeValue("black", "white")}
          textAlign="center"
        >
          AI Generated Responses
        </Text>
        <Box as="section" id="responses">
          {/* check if there are any responses */}
          {prompts.length ? (
            <Button
              w="100%"
              mb={5}
              background={ClearButtonBG}
              color="white"
              _hover={{ bg: ClearButtonBGHover }}
              onClick={() => setPrompts([])}
              fontWeight="normal"
            >
              Clear Responses
            </Button>
          ) : (
            <Text fontSize="1.5rem" mb={5}>
              No Responses Generated
            </Text>
          )}
          {prompts.map(({ prompt, story }, i) => {
            return (
              <div key={i}>
                <PromptCard backgroundColor={PromptCardBG}>
                  <Text as="h3" p={2} fontSize="24px" color={PromptTextColor}>
                    {prompt}
                  </Text>
                  <Hr />
                  <Text color={PromptTextColor}>{story}</Text>
                </PromptCard>
              </div>
            );
          })}
        </Box>
      </Box>
    </Layout>
  );
}
