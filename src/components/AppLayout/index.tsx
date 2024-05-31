import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Flex, Layout, Select, Typography, theme } from "antd";
import { IconMap } from "@tabler/icons-react";

const { Header, Content, Footer, Sider } = Layout;

export const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#262626",
          padding: "1rem",
        }}
      >
        <Flex justify="space-between" align="center" gap="small">
          <IconMap size="2rem" color="white" />
          <Typography.Title
            style={{ color: "white", marginTop: "0.4rem" }}
            level={3}
          >
            My Maps
          </Typography.Title>
        </Flex>
      </Header>
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
            <Flex vertical style={{ padding: "1rem", gap: "2rem" }}>
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
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
