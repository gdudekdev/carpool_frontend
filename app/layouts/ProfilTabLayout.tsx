import { Outlet } from "react-router-dom";
import Nav from "../components/main/nav/Nav";

const ProfilTabLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default ProfilTabLayout;
