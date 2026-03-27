import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-area">
        <Outlet />
      </div>
    </div>
  );
}
