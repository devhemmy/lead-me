import React from "react";
import { Flex, Box, Text } from "rebass";
import { RouteComponentProps } from "@reach/router";
import Modal from "../views/Modal";

const TechList = ["الابليكيشن", "الجرافيك", "الذكاء الصناعي", "والمزيد..."];

const nonTechList = ["فلك", "الفيزياء", "تاريخ", "والمزيد..."];

const PathsModal: React.FC<RouteComponentProps> = () => {
  return (
    <Flex
      backgroundColor={"primary"}
      height={"100vh"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Box width={1}>
        <Text textAlign={"center"} color={"white"} fontSize={[3, 5]}>
          أختر مسارك
        </Text>
        <Modal list={nonTechList} title={"المجالات الغير التقنيه"} link={"#"} />
        <Modal
          list={TechList}
          title={"المجالات التقنيه و البرمجه"}
          link={"#"}
        />
      </Box>
    </Flex>
  );
};

export default PathsModal;
