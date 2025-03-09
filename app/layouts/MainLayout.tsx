import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Container from "~/components/container/Container";
const MainLayout = () => {
  return (
    <Container>
      <Outlet />
      <Footer />
    </Container>
  );
};
export default MainLayout;
