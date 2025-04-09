import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header/ui/index.jsx';

const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">
            <Header />
            <div className='container'>
                <Outlet />
            </div>
            <footer>
                <div className="container">
                    <p>&copy; All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default DefaultLayout;