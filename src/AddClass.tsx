import { useParams } from "react-router-dom";
import UserComponent from "./components/User";
import SelectUnitComponent from "./components/SelectUnit";
import CommentComponent from "./components/Comment";
import SingleButtonComponent from "./components/SingleButton";

const user = {
  id: "1",
  name: "user1",
};

const AddClass = () => {
  const params = useParams();
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
          <SelectUnitComponent />
        </div>
        <div style={{ display: "flex" }}>
          次回小テスト :
          <CommentComponent />
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
