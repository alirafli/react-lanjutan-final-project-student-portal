// TODO: answer here

import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      display={"flex"}
      justifyContent={"space-evenly"}
      bgColor={"#147BD1"}
    >
      <p className="studentName">Mohammad Ali Rafli</p>
      <p className="studentId">FE4234561</p>
    </Box>
  );
};

export default Footer;
