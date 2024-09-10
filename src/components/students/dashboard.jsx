import Sidebar from "./sidebar"
import { Container } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Dashboard() {

    return (
        <div style={{ display: 'flex', flexDirection: "row" }}>
            <div className="sidebar">
                <Sidebar />
            </div>

            <Container sx={{p:1}}>
                <h1 style={{color:"blue",fontFamily:"cursive", backgroundColor:"white",width:"auto", borderRadius:"0px 0px 25px 25px",textAlign:"center",padding:"1%" }}> <strong>Thoughts💭:</strong> You're Never Too Old to Learn New Skills</h1>

{/* compnents of dashboard */}
<div className="compo" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
 {/* show timetable card start */}
 <Card sx={{ maxWidth: 345, mt: 5, borderRadius: 4, boxShadow:"0 3px 10px  rgb(135, 158, 251)" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://img.freepik.com/free-vector/modern-planning-schedule-concept_23-2147952304.jpg?w=740&t=st=1725964526~exp=1725965126~hmac=9e4d516bee880e8a60d712d6217dcc508482349402dcc29ead7b70d1fd43291e"
                        title="Time Tbale Image"
                        size="cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Class Schedule
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Schedule of September Month
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="/dashboard/studyplan"><Button size="small">View schedule</Button></a>

                    </CardActions>
                </Card>
                {/* show timetable card end */}
                {/* Mark Attendence Start */}
                <Card sx={{ maxWidth: 345, mt: 5, borderRadius: 4, boxShadow:"0 3px 10px  rgb(135, 158, 251)" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://img.freepik.com/premium-photo/cartoon-boy-sits-desk-with-books-book-titled-word_1328214-2257.jpg?w=826"
                        title="Time Tbale Image"
                        size="cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Assignments
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Assignments of September Month
                        </Typography>
                    </CardContent>
                    <CardActions>
                       <a href="/dashboard/assignments"> <Button size="small">View Assignments</Button></a>

                    </CardActions>
                </Card>
                {/**Assignment end */}
                  
                            {/* fee details start */}
                            <Card sx={{ maxWidth: 345, mt: 5, borderRadius: 4,boxShadow:"0 3px 10px  rgb(135, 158, 251)" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://img.freepik.com/free-vector/men-with-business-service-tax-tablet_24877-53418.jpg?t=st=1725965991~exp=1725969591~hmac=fa5a5e9f45cf0681a7203f47e2416cca2f78df6e60e5f3d3d0fbdd024d80eb37&w=740"
                        title="Time Tbale Image"
                        size="cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Financial Information
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Whole Course Fee Details
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View Financial Info</Button>

                    </CardActions>
                </Card>
                {/* fee ends */}
          
          {/* quick Links */}
          <Card sx={{ maxWidth: 345, mt: 5, borderRadius: 4,boxShadow:"0 3px 10px  rgb(135, 158, 251)" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://img.freepik.com/free-vector/illustration-landing-page-with-time-management-concept_23-2148241780.jpg?t=st=1725966963~exp=1725970563~hmac=32278ae68b37a9e860826e045c82e113255ef5e2fea1b48e95c45e264385be1b&w=740"
                        title="Time Tbale Image"
                        size="cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Quick Links
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                           Quick Links for Your Self Improvements. Spend Some time to Learn these Skills
                        </Typography>
                    </CardContent>
                    <CardActions>
                      <a href="/dashboard/quicklink"> <Button size="small">View Links</Button></a> 

                    </CardActions>
                </Card>

                {/* Quick Links Ends */}

                {/* Events card */}
                <Card sx={{ maxWidth: 345, mt: 5, borderRadius: 4,boxShadow:"0 3px 10px  rgb(135, 158, 251)" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://img.freepik.com/free-photo/people-celebrating-new-year-s-eve_23-2151070865.jpg?t=st=1725967400~exp=1725971000~hmac=4b2a4555a030b91a6cbec5d129663c65397f279a7651bcc4c611bc9c1c245d17&w=740"
                        title="Time Tbale Image"
                        size="cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Events
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          See Upcoming Events Here and you can participate in events preperation as a volunteer.
                        </Typography>
                    </CardContent>
                    <CardActions>
                       <a href="/dashboard/events"><Button size="small">View Events</Button>
                       </a> 
                    </CardActions>
                </Card>
                {/* Events Cards Ends */}

</div>
               

            </Container>
        </div>

    )

}