import { Button, Flex, Layout, Select, Space, Typography, theme } from "antd";
import { IconMap } from "@tabler/icons-react";
import { MapContent } from "../MapContent";

const { Content, Sider } = Layout;

export const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Content>
        <Layout
          style={{
            // padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "100dvh",
          }}
        >
          <Sider style={{ background: "#262626" }} width={350}>
            <Flex
              vertical
              style={{ padding: "1rem", gap: "2rem", position: "relative" }}
            >
              <Space>
                <IconMap size="2rem" color="white" />
                <Typography.Title
                  style={{ color: "white", marginTop: "0.4rem" }}
                  level={3}
                >
                  My Maps
                </Typography.Title>
              </Space>

              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                size="large"
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />

              <Button type="primary" size="large">
                Iniciar rota
              </Button>
            </Flex>
          </Sider>
          <Content
            style={{ minHeight: 280, background: "#262626", padding: "1rem" }}
          >
            <MapContent />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
