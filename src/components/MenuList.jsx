import PropTypes from 'prop-types'
import { Menu } from 'antd';
import { BarsOutlined, HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons'

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark': 'light'} mode='inline' className='menu-bar'>
        <Menu.Item
            key="home"
            icon={<HomeOutlined />}
        >
            Home
        </Menu.Item>

        <Menu.Item
            key="activity"
            icon={<AppstoreOutlined />}
        >
            Activity
        </Menu.Item>
        <Menu.SubMenu 
            key="subtasks"
            icon={<BarsOutlined />}
            title="Tasks"
        >
            <Menu.Item key="task-1">Task 1</Menu.Item>
            <Menu.Item key="task-2">Task 2</Menu.Item>
            <Menu.SubMenu 
                key="task-3" 
                title="Task 3"
            >
                <Menu.Item key="sub-task-1">Step 1</Menu.Item>
                <Menu.Item key="sub-task-2">Step 2</Menu.Item>
                <Menu.Item key="sub-task-3">Step 3</Menu.Item>
            </Menu.SubMenu>
        </Menu.SubMenu>

        <Menu.Item
            key="progress"
            icon={<AreaChartOutlined />}
        >
            Progress
        </Menu.Item>

        <Menu.Item
            key="payment"
            icon={<PayCircleOutlined />}
        >
            Payment
        </Menu.Item>

        <Menu.Item
            key="settings"
            icon={<SettingOutlined />}
        >
            Settings
        </Menu.Item>

    </Menu>
  )
}

MenuList.propTypes = {
    darkTheme: PropTypes.bool
}

export default MenuList