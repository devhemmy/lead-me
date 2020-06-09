import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Box, Text, Flex } from "rebass";
import InfoButton from "../views/InfoButton";

interface NonTechProps {}

const NonTech: React.FC<RouteComponentProps> = () => {
  return (
    <Box backgroundColor={"primary"} height={["100%", "100vh", "100vh"]}>
      <Text
        fontSize={[2, 3, 4]}
        color={"white"}
        textAlign={"center"}
        padding={[3]}
      >
        إشاعه ان العلم بقي مجاني ؟
      </Text>
      <Flex justifyContent={"center"}>
        <Box margin={[2]} width={[0.9]}>
          <Text color={"grey"} fontSize={[0, 1]} lineHeight={"1.5"}>
            جمله العلم بقي ببلاش ظهرت و جنبها نقطه. محدش فهم منها حاجه يعني
            الجامعات لسه لحد انهرده بتطلب مبالغ عشان تشترك و تتعلم فيها ف اي
            اللي حصل بالظبط ؟
          </Text>
          <Text
            marginTop={[3]}
            color={"grey"}
            fontSize={[0, 1]}
            lineHeight={"1.5"}
          >
            كل الناس نفسها تدخل اكبر جامعات العالم زي ستانفورد او هارفارد بس حتي
            لو جمعت مصاريف الجامعه اللي هي 50 الف دولار الجامعه نفسها تقدر تقبل
            عدد معين من الطلاب حوالي 17 الف طالب يعني ممكن 500 طالب فالقسم لاي
            كليه
          </Text>
          <Text
            marginTop={[3]}
            color={"grey"}
            fontSize={[0, 1]}
            lineHeight={"1.5"}
          >
            فا بإختصار سنه 2011 جامعه ستانفورد حولت كورس من كورستها لكورس اون
            لاين و كان بيكلم عن الذكاء الصناعي و اترفع مجانا لكل الناس من برا
            الجامعه يقدرو يسجلو ف الكورس و عدد الناس اللي سجلت فيه كان اكتر من{" "}
            <span style={{ fontWeight: "bold" }}>160 الف طالب</span> حول العالم
            و من هنا انفجرت فكره التعليم الالكتروني و اتهشرت باسم{" "}
            <span style={{ fontWeight: "bold" }}>MOOCs Revolution</span>
          </Text>
          <Text
            marginTop={[3]}
            color={"grey"}
            fontSize={[0, 1]}
            lineHeight={"1.5"}
            marginBottom={[2]}
          >
            جامعه ستانفورد عملت موقع بأسم كورسيرا و اشتركت مع جامعات كبيره زي
            أوكسفورد و شركات زي جوجل و برضه معهد الMIT اكبر معهد تكنولوجيا
            فالعالم اشترك مع جامعه هارفارد و عملوا موقع إدكس مع الشراكه مع
            جامعات تانيه و الفكره كانت ان كل الكورسات و الدبلومات و التعليم
            ببلاش و الشهاده بس اللي هتبقي بفلوس
            <span style={{ fontWeight: "bold" }}>
              {" "}
              يعني اي حد ف اي حته ف العالم يقدر يتعلم اي حاجه فاكبر جامعات
              العالم عن طريق المواقع دي{" "}
            </span>
          </Text>
          <Flex justifyContent={"center"} paddingBottom={[5, 0, 0]}>
            <InfoButton
              content={"إبدا من هنا"}
              backgroundColor={"primaryDark"}
              link={"/learn/platforms"}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default NonTech;
