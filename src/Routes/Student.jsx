// TODO: answer here

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterBy, setFilterBy] = useState("All");

  const handleFilterBy = (value) => {
    setFilterBy(value);
  };

  const deleteStudent = async (id) => {
    try {
      setIsLoading(true);
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3001/student");
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <Box data-testid="student-btn" className="test-table-container">
      <Select
        name="filter"
        id="filter"
        data-testid="filter"
        onChange={(e) => handleFilterBy(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </Select>
      <Table id="table-student" variant='striped' colorScheme='teal'>
        {students ? (
          <>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th data-testid="name">Full Name</Th>
                <Th data-testid="date">BirTh Date</Th>
                <Th data-testid="gender">Gender</Th>
                <Th data-testid="prody">Faculty</Th>
                <Th>Program Study</Th>
                <Th>Option</Th>
                <Th data-testid="address"></Th>
                <Th data-testid="profilePicture"></Th>
                <Th data-testid="phoneNumber"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {students
                .filter((data) => {
                  if (filterBy === "All") {
                    return data.faculty !== "All";
                  }
                  return data.faculty === filterBy;
                })
                .map((data) => {
                  return (
                    <Tr key={data.id} className="student-data-row">
                      <Td>{data.id}</Td>
                      <Td>
                        <Link to={`/student/${data.id}`}>{data.fullname}</Link>
                      </Td>
                      <Td>{data.birThDate}</Td>
                      <Td>{data.gender}</Td>
                      <Td>{data.faculty}</Td>
                      <Td>{data.programStudy}</Td>
                      <Td>
                        <Button
                          data-testid={`delete-${data.id}`}
                          onClick={() => deleteStudent(data.id)}
                        >
                          delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </>
        ) : (
          <Tr>
            <Th>No</Th>
            <Th>Full Name</Th>
            <Th>BirTh Date</Th>
            <Th>Gender</Th>
            <Th>Faculty</Th>
            <Th>Program Study</Th>
            <Th>Option</Th>
          </Tr>
        )}
      </Table>
    </Box>
  );
};

export default Student;
