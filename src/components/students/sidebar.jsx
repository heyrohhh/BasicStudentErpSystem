
import { List, ListItem, Grid2 } from '@mui/material';


export default function Sidebar() {

    return (
        <div style={{ display: 'flex', flexDirection: "row" }}>
            <div className='Sidebar' style={{ maxWidth: "110%", border:"none" }}>
                <List sx={{
                    width: "100%",
                    backgroundColor: "Highlight",
                    height: "100vh",
                    fontFamily: "initial",
                    fontSize: "1.5rem",
                    color: "white",
                   
                }}>
                         <a href='/'> <ListItem sx={{
                        ":hover": {
                            backgroundColor: "rgb(222, 231, 248)",
                            color: "Highlight"
                        }
                    }}>DashBoard</ListItem></a> 
                   
                   <a href='/Profile'>
                   <ListItem sx={{
                        ":hover": {
                            backgroundColor: "rgb(222, 231, 248)",
                            color: "Highlight"
                        }
                    }}>Profile</ListItem>
                   </a>
                     <a href='/assignments'>
                     <ListItem sx={{
                        ":hover": {
                            backgroundColor: "rgb(222, 231, 248)",
                            color: "Highlight"
                        }
                    }}> Assignments</ListItem>
                     </a>
                  
                  <a href='/attendance'> <ListItem sx={{
                        ":hover": {
                            backgroundColor: "rgb(222, 231, 248)",
                            color: "Highlight"
                        }
                    }}>Attendance</ListItem></a>
                   <a href='/grades'>
                   <ListItem sx={{
                        ":hover": {
                            backgroundColor: "rgb(222, 231, 248)",
                            color: "Highlight"
                        }
                    }}>Grades</ListItem>
                   </a>
                  
                </List>
            </div>

            {/* profile Section of student */}

        </div>
    )
}