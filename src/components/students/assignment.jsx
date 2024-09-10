import Sidebar from "./sidebar";
import { Container, Input, Button, Select, MenuItem, FormControl } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";
import "./assignment.css";

export default function Assignments() {
  const [assignments, setAssignments] = useState([ // Array of assignment objects
    { subject: "C++ Practical", topic: "Loop", teacher: "Xyz", status: "Not Started", file: null },
    { subject: "C++ Practical", topic: "DSA Questions", teacher: "Xyz sir", status: "In Progress", file: null },
    { subject: "Operating System", topic: "types of screens", teacher: "Xyz", status: "Not Started", file: null },
    { subject: "C++ Practical", topic: "Loop", teacher: "Xyz", status: "In Progress", file: null },
  ]);

  function handleStatusChange(event, index) {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].status = event.target.value;
    setAssignments(updatedAssignments);
  }

  function handleFileChange(event, index) {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].file = event.target.files[0]; // Get the first selected file
    setAssignments(updatedAssignments);
  }

  function Save() {
    const updatedAssignmentsString = JSON.stringify(assignments);
    localStorage.setItem("assignments", updatedAssignmentsString);
    alert("Task Status and Files Updated!");
  }

  return (
    <div style={{ display: 'flex', flexDirection: "row" }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Container>
          <h1>List of Assignments</h1>
          <table style={{
            width: "80vw",
            borderRadius: "10px",
            color: "black",
            fontFamily: "sans-serif",
            padding: "2%",
            backgroundColor: "white",
            marginTop: "5%"
          }}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Topic</th>
                <th>Teacher</th>
                <th>Status</th>
                <th>Submit File</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={index}>
                  <td>{assignment.subject}</td>
                  <td>{assignment.topic}</td>
                  <td>{assignment.teacher}</td>
                  <td>
                    <FormControl>
                      <Select
                        value={assignment.status}
                        onChange={(event) => handleStatusChange(event, index)}
                      >
                        <MenuItem value="Not Started">Not Started</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        {/* Add more options as needed */}
                      </Select>
                    </FormControl>
                  </td>
                  <td>
                    <Input type="file" onChange={(event) => handleFileChange(event, index)} />
                  </td>
                </tr>
              ))}
            </tbody>
            <Button variant="contained" onClick={Save} style={{ marginLeft: "150%", width: "100%", marginTop: "8%" }}>
            <SaveIcon /> Save Changes
          </Button>
          </table>
          
        </Container>
      </div>
    </div>
  );
}