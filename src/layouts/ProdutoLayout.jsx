import { Outlet } from "react-router-dom";
import ProductNav from "../components/Navegacao/mobile/ProductNav";



export default function ProductLayout() {
    return (
        <>
          <Outlet />
        <ProductNav />
        </>
    )
}