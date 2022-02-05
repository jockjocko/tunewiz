import { HomeOutlined } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import Layout, { SidebarLinkProps } from './components/Layout';

export default function App() {
    const links: Array<SidebarLinkProps> = [{ url: '/', text: 'Home', Icon: HomeOutlined }];

    return (
        <Layout links={links}>
            <Outlet />
        </Layout>
    );
}
