/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Button, Box } from "rebass";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

interface IProps {
  content: string;
  helperContent?: string;
  backgroundColor: string;
  disabled?: boolean;
  link: string;
}

const MyButton = styled(Box)`
  a {
    text-decoration: none;
  }
  button {
    height: 4em;
    width: 16em;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin-bottom: 2%;
    display: block;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    &:disabled {
      color: rgba(16, 16, 16, 0.3);
      background-color: rgba(239, 239, 239, 0.3);
      border-color: rgba(118, 118, 118, 0.3);
      box-shadow: none;
      cursor: not-allowed;
    }
  }
  span {
    font-size: 14px;
    color: #e1e2e1;
  }
`;

const InfoButton: React.FC<IProps> = ({
  content,
  backgroundColor,
  helperContent,
  link,
  disabled,
}) => {
  return (
    <MyButton>
      <Link to={link}>
        <Button disabled={disabled} backgroundColor={backgroundColor}>
          {content}
        </Button>
      </Link>
      <span>{helperContent}</span>
    </MyButton>
  );
};

export default InfoButton;
