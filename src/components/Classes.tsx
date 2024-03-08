import { FC } from "react";
import { ClassListItem } from "../types";

type Props = {
  classes: Array<ClassListItem>;
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
