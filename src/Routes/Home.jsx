// TODO: answer here
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Button borderRadius={6} bgColor={"#147BD1"}>
      <Link
        to="/student"
        data-testid="student-btn"
        style={{ textDecoration: "none", padding: "4px", color: "#000" }}
      >
        All Student
      </Link>
    </Button>
  );
};

export default Home;
