import { Outlet } from "react-router-dom";
import IndexNav from '../components/Navegacao/mobile/IndexNav'


export default function HomeLayout() {
    return (
        <>
          <Outlet />
        <IndexNav />
        </>
    )
}