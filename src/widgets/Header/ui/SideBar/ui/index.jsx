import {Sidebar} from 'primereact/sidebar';
import {Menu} from 'primereact/menu';

import {getSidebarMenuList, SIDEBAR_HEADER} from "../model/constants/index.jsx";

import './index.css'

const MenuSideBar = ({visible, setVisible}) => {

    const handleHideSidebar = () => setVisible(false);

    const sidebarMenuList = getSidebarMenuList(handleHideSidebar)
    return (
        <Sidebar
            header={SIDEBAR_HEADER}
            visible={visible}
            onHide={handleHideSidebar}
        >
            <Menu
                className='sidebar__menu'
                model={sidebarMenuList}
            />
        </Sidebar>
    )
}

export default MenuSideBar;