import { useParams } from "react-router-dom";
import UserComponent from "./components/User";
import SelectUnitComponent from "./components/SelectUnit";
import LevelComponent from "./components/Level";
import CommentComponent from "./components/Comment";
import ButtonComponent from "./components/Button";
const user = {
  id: "1",
  name: "user1",
};

const Class = () => {
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
        <div>次回: </div>
        <div>次回小テスト</div>
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
        <div>
          今日の学習内容
          <div>
            <SelectUnitComponent />
            <CommentComponent />
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
