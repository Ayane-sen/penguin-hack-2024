import { useParams, useSearchParams } from "react-router-dom";
import UserComponent from "./components/User";
import SelectUnitComponent from "./components/SelectUnit";
import CommentComponent from "./components/Comment";
import SingleButtonComponent from "./components/SingleButton";
import BackButtonComponent from "./components/BackButton";
import { ClassInsert, Student as StudentType } from "./types";
import { Box, TextField } from "@mui/material";
import { memo, useState } from "react";
import { auth } from "./firebase";
import { validateHeaderValue } from "http";

const AddClass = () => {
  const params = useParams();

  const [student, setStudent] = useState<StudentType>();
  const [postData, setPostData] = useState<ClassInsert>({
    title: "",
    test: "",
    homework: "",
    activityType: "",
    activity: "",
    comprehension: "",
  });

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
        <SingleButtonComponent />
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
        <div>
          次回 :
          <SelectUnitComponent
            selected={postData.title}
            setValue={(value) => {
              setPostData({ ...postData, title: value });
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          次回小テスト :
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              multiline
              rows={5}
              label="小テスト"
              id="test"
              value={postData.test}
            />
          </Box>
        </div>
        <div>
          宿題内容
          <div
            style={{
              backgroundColor: "#ffffff",
              height: "200px",
              width: "120px",
              margin: "0 auto",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
