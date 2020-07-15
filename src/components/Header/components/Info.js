import React from "react";
import { Box, Icon, Text } from "src/components/shared";
import Social from "./Social";
import { StyledRow } from "../styles";

const Component = () => {
  return (
    <StyledRow flexDirection={"column"}>
      <Box alignItems={"flex-end"} mb={[2, 2, 2, 0]}>
        <Icon
          glyph={"cc-logo"}
          fill={"bg.default"}
          stroke={"bg.primary"}
          size={2}
          mr={4}
        />
        <Text
          variant={"title-md"}
          whiteSpace={"nowrap"}
          color={"text.reverse"}
          fontWeight={700}
        >
          Candice Czech
        </Text>
      </Box>
      <Box position={"relative"} justifyContent={"space-between"}>
        <StyledRow
          flexDirection={["column", "column", "column", "row"]}
          alignItems={"center"}
        >
          <Text
            variant={"title-sm"}
            mr={[0, 3]}
            mb={[3, 3, 0]}
            textAlign={"center"}
            whiteSpace={"nowrap"}
            color={"text.reverse"}
            fontWeight={500}
          >
            Software Developer
          </Text>
          <Social />
        </StyledRow>
      </Box>
    </StyledRow>
  );
};

Component.propTypes = {};

Component.displayName = "HeaderInfo";

export default Component;
