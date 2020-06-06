import React from "react";
import { Flex } from "rebass";
import { RouteComponentProps } from "@reach/router";

import InfoButton from "../views/InfoButton";

const HomePage: React.FC<RouteComponentProps> = () => {
  return (
    <Flex sx={{ flexWrap: "wrap" }}>
      <Flex
        sx={{ justifyContent: "center", alignItems: "center" }}
        height={["50vh", "100vh", "100vh"]}
        width={[1, 1, 1 / 2]}
        backgroundColor={"primary"}
      >
        <InfoButton
          backgroundColor={"primaryDark"}
          content={"علمني"}
          helperContent={"لو لسه عاوز تبدا طريقك..."}
          link={"/pathsModal"}
        />
      </Flex>
      <Flex
        sx={{ justifyContent: "center", alignItems: "center" }}
        height={["50vh", "100vh", "100vh"]}
        width={[1, 1, 1 / 2]}
        backgroundColor={"secondary"}
      >
        <InfoButton
          backgroundColor={"secondaryDark"}
          content={"وظفني"}
          helperContent={"قريبا......"}
          link={"#"}
          disabled={true}
        />
      </Flex>
    </Flex>
  );
};

export default HomePage;
