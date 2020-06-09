import React from "react";
import { Box, Text, Flex } from "rebass";
import { RouteComponentProps } from "@reach/router";
import ReactPlayer from "react-player";
import InfoButton from "../views/InfoButton";

interface CourseraProps {}

const Coursera: React.FC<RouteComponentProps> = () => {
  return (
    <Box backgroundColor={"primary"} height={"100vh"}>
      <Text
        fontSize={[2, 3, 4]}
        color={"white"}
        textAlign={"center"}
        padding={[3]}
        paddingTop={6}
      >
        طريقه التسجيل علي إدكس
      </Text>
      <Flex justifyContent={"center"} width={[1]}>
        <Box margin={[3]} width={[0.9, 0.9, 0.6]}>
          <ReactPlayer
            controls={true}
            width={"100%"}
            url="https://www.youtube.com/watch?v=jgHOqX3r9dQ"
          />
        </Box>
      </Flex>
      <Flex justifyContent={"center"} width={[1]} marginTop={"15px"}>
        <InfoButton
          backgroundColor={"primdaryDark"}
          content={"ادخل علي المنصه من هنا"}
          link={"https://www.edx.org/"}
          external={true}
        />
      </Flex>
    </Box>
  );
};
export default Coursera;
