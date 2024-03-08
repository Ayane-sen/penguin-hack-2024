import { Avatar } from "@mui/material";

import { User as UserType } from "../types";
import { FC } from "react";

type Props = {
  user: UserType;
};

const User: FC<Props> = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <Avatar alt={user.name} src="" />
      <span>{user.name}</span>
    </div>
  );
};

export default User;
