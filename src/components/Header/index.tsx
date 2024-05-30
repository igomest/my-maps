import { Layout, Typography } from "antd";

export const Header = () => {
  return (
    <Layout>
      <Layout.Header style={{ display: "flex", alignItems: "center" }}>
        <Typography.Title level={3} style={{ color: "white" }}>
          MyMaps
        </Typography.Title>
      </Layout.Header>
    </Layout>
  );
};
