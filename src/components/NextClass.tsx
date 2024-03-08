import { FC } from "react";
import { NextClassInfo as NextClassInfoType } from "../types";

type Props = {
  nextclass: NextClassInfoType;
};

const NextClassInfo: FC<Props> = ({ nextclass }) => {
  return (
    <div
      style={{
        background: "#f2f2f2",
        border: "5px solid #f2f2f2",
        borderRadius: "20px",
      }}
    >
      <div>{nextclass.nextTopic}</div>
      <div>{nextclass.nextTest}</div>
    </div>
  );
};

export default NextClassInfo;
