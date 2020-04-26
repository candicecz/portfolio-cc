import React from "react";
import { Box, Icon, Text, Link } from "src/components/shared";
import {
  StyledHeader,
  StyledRow,
  StyledNavLink,
  StyledWrapper,
  StyledImg,
} from "./styles";

const Component = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledRow flexDirection={"column"}>
          <Box alignItems={"flex-end"} mb={[2, 2, 2, 0]}>
            <Icon
              glyph={"cc-logo"}
              fill={"bg.default"}
              stroke={"bg.reverse"}
              size={3}
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
              <Box width={"100%"} justifyContent={"space-between"} my={2}>
                <Link
                  variant="social"
                  name="linkedin"
                  to={"https://linkedin.com/in/candiceczech"}
                  target={"_blank"}
                  mx={[0, 0, 1]}
                  borderColor={"bg.default"}
                >
                  <Icon glyph={"linkedin"} fill={"#FFFFFF"} stroke="none" />
                </Link>
                <Link
                  variant="social"
                  name="medium"
                  to={"https://medium.com/@czech.candice"}
                  target={"_blank"}
                  mx={[0, 0, 1]}
                  borderColor={"bg.default"}
                >
                  <Icon glyph={"medium"} fill={"#FFFFFF"} stroke={"none"} />
                </Link>
                <Link
                  variant="social"
                  name="github"
                  to={"https://github.com/candicecz"}
                  target={"_blank"}
                  mx={[0, 0, 1]}
                  borderColor={"bg.default"}
                >
                  <Icon glyph={"github"} stroke={"#FFFFFF"} fill={"#FFFFFF"} />
                </Link>
              </Box>
            </StyledRow>
          </Box>
        </StyledRow>
        <StyledRow
          flexWrap={"wrap"}
          justifyContent={["center", "center", "center", "flex-end"]}
        >
          <StyledNavLink
            variant={"navigation"}
            to="/projects"
            justifyContent={["center", "flex-start"]}
          >
            Projects
          </StyledNavLink>
          <StyledNavLink
            variant={"navigation"}
            to="/about"
            justifyContent={["center", "flex-end"]}
          >
            About
          </StyledNavLink>
        </StyledRow>
        <StyledImg
          src={require("src/assets/pattern_header.png")}
          alt={"Header background pattern."}
        />
      </StyledWrapper>
    </StyledHeader>
  );
};

Component.displayName = "Header";

export default Component;
