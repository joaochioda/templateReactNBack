import React from "react";
import styled from "styled-components";

const ImgFlag = styled.img`
  width: 100px;
`;

interface FlagProps {
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

const Flag = ({ image, isSelected, ...props }: FlagProps) => (
  <ImgFlag
    alt="flag"
    src={image}
    className={isSelected ? "flag selected" : "flag"}
    {...props}
  />
);

export default Flag;
