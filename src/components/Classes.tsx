import { FC } from "react";
import { ClassType } from "../types";

type Props = {
  classes: Array<ClassType>;
};

const ClassList: FC<Props> = ({ classes }) => {
  return (
    <div>
      {classes.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};

export default ClassList;
