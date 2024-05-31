import { ConfigProvider, theme } from "antd";
import { AppLayout } from "./components/AppLayout";
import "antd/dist/reset.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0958d9",
        },
        cssVar: true,
        algorithm: theme.darkAlgorithm
      }}
    >
      <AppLayout />
    </ConfigProvider>
  );
}

export default App;
