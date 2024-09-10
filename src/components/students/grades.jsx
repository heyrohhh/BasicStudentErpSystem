import Sidebar from "./sidebar";
import { Container, Select, MenuItem, Button, Collapse } from "@mui/material";
import './grades.css';
import { useState } from "react";

export default function Grades() {
  const [sem, setSem] = useState("Sem1");
  const [result, setResult] = useState(false); // Assuming result is for displaying final result

  const handleSemChange = (event) => {
    setSem(event.target.value);
  };

  // Function to conditionally render semester details and result based on selected semester
  const renderSemesterDetails = () => {
    if (sem === "Sem1") {
      return (
        <div>
          
          <table style={{width:"70vw"}} className="gtable">
                            <thead>
                                <th>Subject Code</th>
                               <th>Theory Marks</th>
                                <th>Practical Marks</th>
                                <th>Sessional Marks</th>
                                <th>Total Marks</th>
                            </thead>
                            <tbody>
                                <tr>
                                     <td>BCA-101</td>
                                     <td>46</td>
                                     <td> </td>
                                     <td>11</td>
                                     <td>57</td>
                                </tr>
                                <tr>
                                     <td>BCA-102</td>
                                     <td>36</td>
                                     <td> </td>
                                     <td>09</td>
                                     <td>45</td>
                                </tr>
                                <tr>
                                    <td>BCA-103</td>
                                    <td>55</td>
                                    <td></td>
                                    <td>11</td>
                                    <td>66</td>
                                </tr>
                                <tr>
                                    <td>BCA-104</td>
                                    <td>34</td>
                                    <td>50</td>
                                    <td>09</td>
                                    <td>43</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total Marks:500</td>
                                    <td>Obtained Marks: 256</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>Final Result: Pass</tr>
                            </tbody>
                        
          </table>

        </div>
      );
    } else if (sem === "Sem2") {
      return (
        <div>
          
          <table style={{width:"70vw"}} className="gtable">
                            <thead>
                                <th>Subject Code</th>
                               <th>Theory Marks</th>
                                <th>Practical Marks</th>
                                <th>Sessional Marks</th>
                                <th>Total Marks</th>
                            </thead>
                            <tbody>
                                <tr>
                                     <td>BCA-201</td>
                                     <td>36</td>
                                     <td> </td>
                                     <td>11</td>
                                     <td>47</td>
                                </tr>
                                <tr>
                                     <td>BCA-202</td>
                                     <td>35</td>
                                     <td> </td>
                                     <td>09</td>
                                     <td>44</td>
                                </tr>
                                <tr>
                                    <td>BCA-203</td>
                                    <td>39</td>
                                    <td></td>
                                    <td>11</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>BCA-204</td>
                                    <td>54</td>
                                    <td>25</td>
                                    <td>09</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total Marks:500</td>
                                    <td>Obtained Marks: 229</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>Final Result: Pass</tr>
                            </tbody>
                        
          </table>
        </div>
      );
    } else {
      return null; // Handle unexpected semester values
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: "row" }}>
      <div><Sidebar /></div>
      <div>
        <Container sx={{ mt: 2, ml: 8 }}>
          <label>
            Select Course <Select sx={{ width: "35%" }} value={"Bachelor of Computer Apllication(BCA)"}>
              <MenuItem value="Bachelor of Computer Apllication(BCA)">
                Bachelor of Computer Apllication(BCA)
              </MenuItem>
            </Select>
          </label>

          <label>
            Select Semester:
            <Select sx={{ width: "10%" }} value={sem} onChange={handleSemChange}>
              <MenuItem value="Sem1">Sem1</MenuItem>
              <MenuItem value="Sem2">Sem2</MenuItem>
            </Select>
          </label>

          {renderSemesterDetails()}
        </Container>
      </div>
    </div>
  );
}