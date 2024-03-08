import { Avatar } from "@mui/material";
import UserComponent from "./components/User";
import { User, NextClassInfo } from "./types";
import NextClassComponent from "./components/NextClass";
import { useEffect, useState } from "react";
import { TroubleshootRounded } from "@mui/icons-material";
import { Link, Router } from "react-router-dom";

const users: Array<User> = [
  {
    id: "1",
    name: "user1",
  },
  {
    id: "2",
    name: "hoge",
  },
  {
    id: "3",
    name: "user3",
  },
];

const nextClassInfo: { [key: string]: NextClassInfo } = {
  "1": {
    nextTopic: "三角関数",
    nextTest: "cosの計算",
  },
  "2": {
    nextTopic: "三角関数",
    nextTest: "cosの計算",
  },
  "3": {
    nextTopic: "三角関数",
    nextTest: "cosの計算",
  },
};

const Home = () => {
  const [students, setStudents] = useState<Array<User>>([]);

  const getUser = async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/students`);
    if (!res.ok) {
      console.error("データの取得に失敗しました。");
    }

    const data = await res.json();

    setStudents(data as Array<User>);
  };

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {students.map((user, index) => {
        return (
          <Link
            key={index}
            to={`/${user.id}/latest`}
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
          >
            <UserComponent user={user} />
            <NextClassComponent nextclass={nextClassInfo[user.id]} />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
