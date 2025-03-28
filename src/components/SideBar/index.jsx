import {Sidebar} from 'primereact/sidebar';


export const MenuSideBar = ({ visible, setVisible }) => {

    return (
        <Sidebar
            visible={visible}
            onHide={() => setVisible(false)}
        >
            <h2>Sidebar</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
        </Sidebar>
    )
}