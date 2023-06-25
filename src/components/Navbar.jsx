// TODO: answer here

import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const NavBar = () => {
  return (
    <Box
      minH="calc(100vh)"
      display="flex"
      flexDirection="column"
      justifyContent={"space-between"}
    >
      <Box>
        <Box display={"flex"} justifyContent={"space-around"} mb="24">
          <Link
            as={RouterLink}
            to="/"
            data-testid="home-page"
            style={{
              textDecoration: "none",
              color: "#000",
              backgroundColor: "#147BD1",
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
            }}
          >
            Student Portal
          </Link>

          <Link
            as={RouterLink}
            to="/student"
            data-testid="student-page"
            style={{
              textDecoration: "none",
              color: "#000",
              backgroundColor: "#147BD1",
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
            }}
          >
            All Student
          </Link>

          <Link
            as={RouterLink}
            to="/add"
            data-testid="add-page"
            style={{
              textDecoration: "none",
              color: "#000",
              backgroundColor: "#147BD1",
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
            }}
          >
            Add Student
          </Link>
        </Box>

        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default NavBar;
