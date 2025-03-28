import {useState} from "react";
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';

import {MenuSideBar} from "../SideBar/index.jsx";

import './index.css';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const onClick = () => {
        isOpenMenu(true)
    }

    const LogoutButtonTemplate = (
        <Button
            onClick={onClick}
            rounded
            icon="pi pi-sign-out"
            severity="help"
        />
    )

    const MenuButtonTemplate = (
        <Button
            text
            rounded
            onClick={onClick}
            icon="pi pi-bars"
        />
    )

    return (
        <header className="header">
            <div className="container">
                <Menubar
                    start={MenuButtonTemplate}
                    end={LogoutButtonTemplate}
                />
            </div>

            <MenuSideBar
                visible={isOpenMenu}
                setVisible={setIsOpenMenu}
            />
        </header>
    )
}

export default Header;