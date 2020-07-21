
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

import AppHeader from './AppHeader'
import AppSider from './AppSider'

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            { children }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout