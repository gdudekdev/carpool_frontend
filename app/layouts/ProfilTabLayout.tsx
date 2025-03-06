import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

const ProfilTabLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default ProfilTabLayout;
