import React from "react";
import { BrasilFlag, EuaFlag } from "src/assets";
import { FlagWrapper } from "./style";

interface FlagProps {
  onClick: () => void;
  selectedLanguage: string;
}

const Flag = ({ onClick, selectedLanguage }: FlagProps) => {
  const frontFlag = selectedLanguage === "en-US" ? EuaFlag : BrasilFlag;
  const backFlag = selectedLanguage === "en-US" ? BrasilFlag : EuaFlag;

  return (
    <FlagWrapper>
      <div className="card" onClick={onClick}>
        <div className="content">
          <div className="front">
            <img src={frontFlag} />
          </div>
          <div className="back">
            <img src={backFlag} />
          </div>
        </div>
      </div>
    </FlagWrapper>
  );
};

export default Flag;
