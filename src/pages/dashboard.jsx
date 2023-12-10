import {Outlet} from 'react-router-dom';
import Sidebar from '../components/sidebar.jsx';

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <Outlet/>
        </div>
    );
}
export default Dashboard;