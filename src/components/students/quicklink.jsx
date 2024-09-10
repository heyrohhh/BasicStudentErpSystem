import Sidebar from "./sidebar";
import { Container, } from "@mui/material";
import { Table, TableHead, TableBody, TableRow, TableCell, Link as MuiLink } from '@mui/material';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
const data = [
    { id: 1, topic: 'DSA', link: 'https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/' },
    { id: 2, topic: 'System Design', link: 'https://www.geeksforgeeks.org/system-design-tutorial/' },
    { id: 3, topic: 'Practice Problem', link: 'https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions&itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=practice_header'   
   },
    { id: 4, topic: 'Programming Puzzles', link: 'https://www.geeksforgeeks.org/puzzles/' },
    { id: 5, topic: 'Aptitude', link: 'https://www.geeksforgeeks.org/aptitude-questions-and-answers/' },
    { id: 6, topic: 'Upcoming Hackthons', link: ' https://www.hackerearth.com/challenges/hackathon/' },
   
  ];

export default function Quicklink(){


    return(
        <div style={{ display: 'flex', flexDirection: "row" }}>
            <div><Sidebar/></div>

            <div>
                    <Container sx={{ml:13}} style={{ display: 'flex', flexDirection: "row" }}>
                    <Table sx={{width:"50vw",mt:5}}>
      <TableHead>
        <TableRow>
          <TableCell>Serial No.</TableCell>
          <TableCell>Topic Name</TableCell>
          <TableCell>Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.topic}</TableCell>
            <TableCell>
              <MuiLink href={row.link} target="_blank" underline="hover">
                {row.link.slice(0, 30) + (row.link.length > 30 ? '...' : '')}
              </MuiLink>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div className="note" style={{  boxShadow:"0 3px 10px  rgb(135, 158, 251", fontFamily:"sans-serif",padding:"2%", width:"20vw", height:"30vh", marginTop:"5%", marginLeft:"2%",borderRadius:"10px"}}>
         <h2><TipsAndUpdatesOutlinedIcon/>Some Points to remember</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab inventore provident fuga ducimus libero at voluptate deserunt. Deleniti excepturi repellat, culpa facere, temporibus earum possimus odit, ratione soluta rerum perferendis ipsa </p>
    </div>
                    </Container>
            </div>
        </div>
    )
}