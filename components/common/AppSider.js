import { useContext } from 'react'
import Link from 'next/link'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import AppContext from './AppContext'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AppSider = () => {
  const { categoryList } = useContext(AppContext);

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        { 
          categoryList.map((category) => {
            let { name, id, children } = category
            return (
              <SubMenu key={id} title={name}>
                {
                  children.map((childCategory) => {
                    let { name, id } = childCategory
                    return (
                      <Menu.Item key={id}>
                        <Link href={`/categories/${id}`}><a>{name}</a></Link>
                      </Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    </Sider>
  )
}

export default AppSider