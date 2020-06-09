import React from "react";
import { Flex, Box, Text } from "rebass";
import Modal from "../views/Modal";
import { RouteComponentProps } from "@reach/router";

const TechPaths = [
  {
    title: "تطوير المواقع و الابليكيشن",
    list: ["تصميم مواقع", "تطوير برامج", "التحكم في البيانات"],
    link: "https://egfwd.com/web/#lvl",
  },
  {
    title: " البيانات و الذكاء الصناعي ",
    list: [
      "تحليل البيانات",
      "تحليل البيانات بلغه البايثيون",
      "البيانات المعقده بلغه البايثون",
    ],
    link: "https://egfwd.com/data/#lvl",
  },
  {
    title: "التسويق الالكتروني",
    list: [
      "استراتيجيات التسويق",
      "  التسويق علي السوشيال ميديا",
      "ادوات التسويق الالكتروني المتطوره",
    ],
    link: "https://egfwd.com/digital-marketing/#lvl",
  },
];

const Tech: React.FC<RouteComponentProps> = () => {
  return (
    <Flex
      backgroundColor={"primary"}
      height={"100vh"}
      sx={{ justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}
    >
      <Text
        textAlign={"center"}
        color={"white"}
        fontSize={[3, 5]}
        marginTop={[4]}
      >
        أختر مجالك
      </Text>
      <Box width={[1]} backgroundColor={"primary"}>
        {TechPaths.map((path) => (
          <Modal
            list={path.list}
            title={path.title}
            link={path.link}
            external={true}
          />
        ))}
        <Modal
          list={["Python", "CyberSecurity", "IoT"]}
          title={"مجالات اخري علي موقع إدكس"}
          link={"/learn/edx"}
        />
      </Box>
    </Flex>
  );
};
export default Tech;
