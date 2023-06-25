// TODO: answer here

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Select } from "@chakra-ui/react";

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newStudent,
          profilePicture: "https://randomuser.me/api/portraits/men/45.jpg",
        }),
      }).then(() => navigate("/student"));
    } catch (error) {
      console.log(error);
    }
  };

  const setFaculty = (data) => {
    if (data === "Ekonomi" || data === "Manajemen" || data === "Akuntansi")
      return "Fakultas Ekonomi";

    if (
      data === "Administrasi Publik" ||
      data === "Administrasi Bisnis" ||
      data === "Hubungan Internasional"
    )
      return "Fakultas Ilmu Sosial dan Politik";

    if (data === "Teknik Sipil" || data === "Arsitektur")
      return "Fakultas Teknik";

    if (data === "Matematika" || data === "Fisika" || data === "Informatika")
      return "Fakultas Teknologi Informasi dan Sains";
  };
  return (
    <Box>
      <form
        id="form-student"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Box>
          <label>Fullname</label>
          <Input
            type="text"
            name="Fullname"
            data-testid="name"
            aria-label="Fullname"
            id="input-name"
            onChange={(e) =>
              setNewStudent({ ...newStudent, fullname: e.target.value })
            }
          />
        </Box>

        <Box>
          <label>profile picture</label>
          <Input
            type="text"
            name="profilepicture"
            data-testid="profilePicture"
            aria-label="profilepicture"
            id="input-profilepicture"
            // onChange={(e) =>
            //   setNewStudent({ ...newStudent, profilepicture: e.target.value })
            // }
          />
        </Box>

        <Box>
          <label>Address</label>
          <Input
            type="text"
            name="address"
            data-testid="address"
            aria-label="profiaddresslepicture"
            id="input-address"
            onChange={(e) =>
              setNewStudent({ ...newStudent, address: e.target.value })
            }
          />
        </Box>

        <Box>
          <label>phone number</label>
          <Input
            type="text"
            name="number"
            data-testid="phoneNumber"
            aria-label="number"
            id="input-number"
            onChange={(e) =>
              setNewStudent({ ...newStudent, phoneNumber: e.target.value })
            }
          />
        </Box>

        <Box>
          <label htmlFor="Birth Date">Birth Date</label>
          <Input
            type="date"
            aria-label="Birth Date"
            id="input-date"
            data-testid="date"
            onChange={(e) =>
              setNewStudent({ ...newStudent, birthDate: e.target.value })
            }
          ></Input>
        </Box>

        <Box>
          <label htmlFor="Gender">Gender</label>
          <Select
            id="input-gender"
            aria-label="Gender"
            data-testid="gender"
            onChange={(e) =>
              setNewStudent({ ...newStudent, gender: e.target.value })
            }
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </Box>

        <Box>
          <label htmlFor="Program Study">Program Study</label>
          <Select
            id="input-prody"
            aria-label="Program Study"
            data-testid="prody"
            onChange={(e) =>
              setNewStudent({
                ...newStudent,
                programStudy: e.target.value,
                faculty: setFaculty(e.target.value),
              })
            }
          >
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </Select>
        </Box>

        <Button
          onClick={handleSubmit}
          type="submit"
          id="add-btn"
          value="Add student"
          data-testid="add-btn"
        >
          Add student
        </Button>
      </form>
      {/* TODO: answer here */}
    </Box>
  );
};

export default AddStudent;
