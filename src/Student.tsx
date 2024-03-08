import { useParams, useSearchParams } from "react-router-dom";
import UserComponent from "./components/User";
import TabsComponent from "./components/Tabs";
import CommentComponent from "./components/Comment";
import { useMemo } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
import { ClassListItem } from "./types";
import Classes from "./components/Classes";
import BackButtonComponent from "./components/BackButton";
const user = {
  id: "1",
  name: "user1",
};
const classes: Array<ClassListItem> = [
  { title: "class1", at: "2024/03/02", comprehension: 2 },
  { title: "class1", at: "2024/03/02", comprehension: 2 },
  { title: "class1", at: "2024/03/02", comprehension: 2 },
  { title: "class1", at: "2024/03/02", comprehension: 2 },
  { title: "class1", at: "2024/03/02", comprehension: 2 },
  { title: "class1", at: "2024/03/02", comprehension: 2 },
];

const Student = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = useMemo(() => {
    console.log(searchParams.get("tab"));
    return searchParams.get("tab") ?? "classes";
  }, [searchParams]);

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
        <BackButtonComponent />
      </div>
      <div>
        <TabsComponent />
      </div>
      {(tab === "classes" || tab === "") && <Classes classes={classes} />}
      {tab === "memo" && (
        <div>
          <CommentComponent />
        </div>
      )}
    </div>
  );
};

export default Student;
