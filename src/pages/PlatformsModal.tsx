import React from "react";
import { Flex, Box, Text } from "rebass";
import { RouteComponentProps } from "@reach/router";
import Modal from "../views/Modal";

const Coursera = [
  "فيها جميع المجالات بنسبه متساويه",
  "اسلوب مائل اكتر للمحاضرات الجامعيه",
  "تقدر تحصل علي منحه مموله بالكامل لاي دبلومه علي المنصه",
  "احسن مع المجالات الغير تطبيقيه ",
];

const Edx = [
  "بتركز اكتر علي المجالات العلميه",
  "اسلوب مائل اكتر للتفاعل و التطبيق",
  "تقدر تحصل  علي تخفيض 90% مع فرصه لمنحه كامله",
  "احسن مع المجالات التطبيقيه",
];

const PathsModal: React.FC<RouteComponentProps> = () => {
  return (
    <Flex
      backgroundColor={"primary"}
      height={"100vh"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Box width={1}>
        <Text textAlign={"center"} color={"white"} fontSize={[3, 5]}>
          أختر المنصه
        </Text>
        <Modal list={Coursera} title={"كورسيرا"} link={"/coursera"} />
        <Modal list={Edx} title={"إدكس"} link={"/edx"} />
      </Box>
    </Flex>
  );
};

export default PathsModal;
