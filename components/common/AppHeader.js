import { Layout, Menu } from 'antd'

const { Header } = Layout

export default function AppHeader() {
  const menuItems = ['nav 1', 'nav 2', 'nav 3']
  return (
    <Header className="header">
      <div className="logo" />   
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {
          menuItems.map((name, index) => {
            return (
              <Menu.Item key={index + 1}>{name}</Menu.Item>
            )
          })
        }
      </Menu>
    </Header>
  )
}