import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
