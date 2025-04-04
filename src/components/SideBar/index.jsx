import {Sidebar} from 'primereact/sidebar';
import {Menu} from 'primereact/menu';
import {getSidebarMenuList, SIDEBAR_HEADER} from "./constants.jsx";

import './index.css'

export const MenuSideBar = ({visible, setVisible}) => {

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