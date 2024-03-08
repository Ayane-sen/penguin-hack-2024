import { useParams, useSearchParams } from "react-router-dom";
import UserComponent from "./components/User";
import TabsComponent from "./components/Tabs";
import CommentComponent from "./components/Comment";
import { useEffect, useMemo, useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
import {
  ClassListItem,
  User,
  Student as StudentType,
  ClassType,
} from "./types";
import Classes from "./components/Classes";
import BackButtonComponent from "./components/BackButton";
import { auth } from "./firebase";
// const user = {
//   id: "1",
//   name: "user1",
// };
// const classes: Array<ClassListItem> = [
//   { title: "class1", at: "2024/03/02", comprehension: 2 },
//   { title: "class1", at: "2024/03/02", comprehension: 2 },
//   { title: "class1", at: "2024/03/02", comprehension: 2 },
//   { title: "class1", at: "2024/03/02", comprehension: 2 },
//   { title: "class1", at: "2024/03/02", comprehension: 2 },
//   { title: "class1", at: "2024/03/02", comprehension: 2 },
// ];

const Student = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [student, setStudent] = useState<StudentType>();
  const [classes, setClasses] = useState<Array<ClassType>>([]);

  const tab = useMemo(() => {
    console.log(searchParams.get("tab"));
    return searchParams.get("tab") ?? "classes";
  }, [searchParams]);

  const getStudent = async () => {
    const token = await auth.currentUser?.getIdToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/students/${params["id"]}`,
      {
        headers,
      }
    );
    if (!res.ok) {
      console.error("データの取得に失敗しました。");
    }

    const data = await res.json();

    console.log(data);

    setStudent(data as StudentType);
  };

  const getClass = async () => {
    const token = await auth.currentUser?.getIdToken();

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/students/${params["id"]}/classes`,
      {
        headers,
      }
    );
    if (!res.ok) {
      console.error("データの取得に失敗しました。");
    }

    const data = await res.json();

    setClasses(data as Array<ClassType>);
  };

  useEffect(() => {
    (async () => {
      await getStudent();
    })();
  }, [auth]);

  useEffect(() => {
    (async () => {
      await getClass();
    })();
  }, [student]);

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
        {student && <UserComponent user={student} />}
        <BackButtonComponent />
      </div>
      <div>
        <TabsComponent />
      </div>
      {(tab === "classes" || tab === "") && <Classes classes={classes} />}
      {tab === "memo" && student && (
        <div>
          <CommentComponent memo={student.memo} />
        </div>
      )}
    </div>
  );
};

export default Student;
