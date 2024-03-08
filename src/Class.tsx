import { useParams } from "react-router-dom";
import UserComponent from "./components/User";
import SelectUnitComponent from "./components/SelectUnit";
import LevelComponent from "./components/Level";
import CommentComponent from "./components/Comment";
import ButtonComponent from "./components/Button";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { ClassType, Student } from "./types";
const user: Student = {
  id: 1,
  name: "user1",
  memo: "",
} as Student;

const Class = () => {
  const params = useParams();
  const [classInfo, setClassInfo] = useState<ClassType>();

  const getClass = async () => {
    const token = await auth.currentUser?.getIdToken();

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/students/${params["id"]}/classes/latest`,
      {
        headers,
      }
    );
    if (!res.ok) {
      console.error("データの取得に失敗しました。");
    }

    const data = await res.json();

    setClassInfo(data as ClassType);
  };

  useEffect(() => {
    (async () => {
      await getClass();
    })();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "40px 20px",
        gap: "30px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <UserComponent user={user} />
        <ButtonComponent />
      </div>
      <div
        style={{
          background: "#f2f2f2",
          border: "5px solid #f2f2f2",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>次回: {classInfo?.title}</div>
        <div>次回小テスト{classInfo?.test}</div>
        <div>
          宿題内容
          <div
            style={{
              backgroundColor: "#ffffff",
              height: "200px",
              width: "120px",
              margin: "0 auto",
            }}
          >
            {classInfo?.homework}
          </div>
        </div>
        <div>
          今日の学習内容
          <div>
            <SelectUnitComponent selected="" setValue={(value) => {}} />
            <CommentComponent memo="" />
          </div>
        </div>
        <div>
          理解度評価
          <LevelComponent />
        </div>
      </div>
    </div>
  );
};

export default Class;
