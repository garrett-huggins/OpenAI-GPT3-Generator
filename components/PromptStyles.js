import { screenBreakpoints } from "../theme";
import styled from "@emotion/styled";
import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

export const PromptText = styled.textarea`
  width: 600px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: black;
  resize: none;
  ::placeholder {
    color: #8e8ea0;
    opacity: 1;
  }
  @media ${(props) => screenBreakpoints.sm} {
    width: 100%;
  }
`;

export const PromptCard = styled.div`
  min-height: 200px;
  width: 600px;
  border-radius: 15px;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  border: 4px solid black;
  margin-bottom: 20px;
  @media ${(props) => screenBreakpoints.sm} {
    width: 100%;
  }
`;

export const GenerateButton = styled.input`
  width: 600px;
  margin: 1rem;
  padding: 1rem 4rem;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hover};
  }
  @media ${(props) => screenBreakpoints.sm} {
    width: 100%;
  }
`;

export const Hr = styled.hr`
  border: 1px solid black;
  margin-bottom: 10px;
`;

export const PromptForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export function TemperatureSlider({ sliderValue, onChange, color }) {
  return (
    <Box w="100%" display="flex">
      <Slider
        aria-label="temperature-slider"
        onChange={onChange}
        defaultValue={0.5}
        min={0}
        max={1}
        step={0.1}
        w="100%"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb backgroundColor={color} />
      </Slider>
      <Text ml={3}>{sliderValue}</Text>
    </Box>
  );
}

export function LengthSlider({ sliderValue, onChange, color }) {
  return (
    <Box w="100%" display="flex">
      <Slider
        aria-label="temperature-slider"
        onChange={onChange}
        defaultValue={0}
        min={32}
        max={1600}
        step={1}
        w="100%"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb backgroundColor={color} />
      </Slider>
      <Text ml={3}>{sliderValue}</Text>
    </Box>
  );
}

export function PenaltySlider({ sliderValue, onChange, color }) {
  return (
    <Box w="100%" display="flex">
      <Slider
        aria-label="temperature-slider"
        onChange={onChange}
        defaultValue={0}
        min={0}
        max={2}
        step={0.1}
        w="100%"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb backgroundColor={color} />
      </Slider>
      <Text ml={3}>{sliderValue}</Text>
    </Box>
  );
}
