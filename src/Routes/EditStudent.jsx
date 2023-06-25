// TODO: answer here

import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Img, Input, Select } from "@chakra-ui/react";

const EditStudent = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getStudentById = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/student/${id}`);
      const data = await res.json();
      console.log(data);
      setNewStudent(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getStudentById();
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  return (
    <Box>
      <Img src={newStudent.profilePicture} alt={newStudent.fullname} />

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <label>FullName</label>
        <Input
          type="text"
          name="Fullname"
          data-testid="name"
          aria-label="Fullname"
          id="input-name"
          value={newStudent.fullname}
          onChange={(e) =>
            setNewStudent({ ...newStudent, fullname: e.target.value })
          }
        />

        <label>Address</label>
        <Input
          type="text"
          name="Address"
          data-testid="address"
          aria-label="Address"
          value={newStudent.address}
          id="input-Address"
          onChange={(e) =>
            setNewStudent({ ...newStudent, address: e.target.value })
          }
        />

        <label>Phone Number</label>
        <Input
          type="text"
          name="phone"
          data-testid="phoneNumber"
          aria-label="phone"
          value={newStudent.phoneNumber}
          id="input-phone"
          onChange={(e) =>
            setNewStudent({ ...newStudent, phoneNumber: e.target.value })
          }
        />

        <label>Birth Date</label>
        <Input
          type="text"
          name="birthDate"
          data-testid="date"
          aria-label="birthDate"
          value={newStudent.birthDate}
          id="input-birthDate"
          onChange={(e) =>
            setNewStudent({ ...newStudent, birthDate: e.target.value })
          }
        />

        <label>Gender</label>
        <Select
          id="input-gender"
          aria-label="Gender"
          value={newStudent.gender}
          data-testid="gender"
          onChange={(e) =>
            setNewStudent({ ...newStudent, gender: e.target.value })
          }
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>

        <label>Program Study</label>
        <Select
          id="input-prody"
          aria-label="Program Study"
          data-testid="prody"
          value={newStudent.programStudy}
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
          <option value="Hubungan Internasional">Hubungan Internasional</option>
          <option value="Teknik Sipil">Teknik Sipil</option>
          <option value="Arsitektur">Arsitektur</option>
          <option value="Matematika">Matematika</option>
          <option value="Fisika">Fisika</option>
          <option value="Informatika">Informatika</option>
        </Select>

        <Button data-testid="edit-btn" onClick={handleEdit} type="submit">
          Edit data
        </Button>
      </form>
    </Box>
  );
};

export default EditStudent;
