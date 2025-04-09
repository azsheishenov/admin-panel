import {Avatar} from 'primereact/avatar';
import {useNavigate} from "react-router-dom";

export const getSidebarMenuList = (onLinkClicked) => {
    let navigate = useNavigate();
    return [
        {
            label: 'Main Pages',
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    command: () => {
                        navigate('/')
                        onLinkClicked()
                    }
                }
            ]
        },
        {
            label: 'Movies and serials',
            items: [
                {
                    label: 'Anilibria',
                    icon: 'pi pi-video',
                    command: () => {
                        navigate('/anilibria')
                        onLinkClicked()
                    }
                }
            ]
        }
    ]
}

export const SIDEBAR_HEADER = (
    <div className="sidebar__header">
        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle"/>
        <span className="font-bold">Amy Elsner</span>
    </div>
)