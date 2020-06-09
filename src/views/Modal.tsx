/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Text, Box } from "rebass";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

interface IProps {
  title: string;
  list: string[];
  link: string;
  external?: boolean;
}

const MyModal = styled(Box)`
  border-radius: 12px;
  display: inline-block;
  margin: 5%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    li {
      padding: 3%;
      color: #afb0af;
    }
  }
`;

const Modal: React.FC<IProps> = ({ title, link, list, external }) => {
  return external ? (
    <MyModal backgroundColor={"primaryDark"} width={[0.9, 0.9, 0.4]}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Box>
          <Text
            textAlign={"center"}
            fontSize={[1, 2]}
            color={"grey"}
            padding={[4]}
            paddingBottom={[1]}
          >
            {title}
          </Text>
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Box>
      </a>
    </MyModal>
  ) : (
    <MyModal backgroundColor={"primaryDark"} width={[0.9, 0.9, 0.4]}>
      <Link to={link}>
        <Box>
          <Text
            textAlign={"center"}
            fontSize={[1, 2]}
            color={"grey"}
            padding={[4]}
            paddingBottom={[1]}
          >
            {title}
          </Text>
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Box>
      </Link>
    </MyModal>
  );
};

export default Modal;
