import { ConfigProvider } from "antd";
import { Header } from "./components/Header";
import "antd/dist/reset.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0958d9",
        },
        cssVar: true,
      }}
    >
      <Header />
    </ConfigProvider>
  );
}

export default App;
