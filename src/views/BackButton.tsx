/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FaArrowLeft } from "react-icons/fa";
import { navigate, RouteComponentProps } from "@reach/router";

const BackButton: React.FC<RouteComponentProps> = () => {
  return (
    <FaArrowLeft
      css={css`
        position: absolute;
        top: 12px;
        left: 15px;
        font-size: 30px;
        color: #e1e2e1;
        &:hover {
          color: white;
        }
      `}
      onClick={() => navigate(-1)}
    />
  );
};

export default BackButton;
