import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Footer from "../components/main/footer/Footer";
import Container from "~/components/main/container/Container";

const MainLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Container>
  );
};

export default MainLayout;
