// TODO: answer here
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>404 | Not Found</h1>
      <Button data-testid="back" onClick={handleBack}>
        back
      </Button>
    </>
  );
};

export default NotFound;
