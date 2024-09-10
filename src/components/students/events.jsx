import Sidebar from "./sidebar";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { Button, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";


function handleLike() {
    const style = {
      color: "red"
    };
  
    return style; 
  }

export default function Event() {
    const [isLiked, setIsLiked] = useState(false);
    const stylec = isLiked ? handleLike() : {};

    function handleEventBut(){
        alert("Event Reminder set")
    }
    
    return (

        <div style={{ display: 'flex', flexDirection: "row" }}>
            <div><Sidebar /></div>
            <div>
                <Container sx={{mt:4, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridGap:"1.5rem"}}> 
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                               A
                            </Avatar>
                        }

                        title="Arjit Singh"
                        subheader="September 25, 2024"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://w0.peakpx.com/wallpaper/728/348/HD-wallpaper-rajasthan-diwas-bollywood-sensation-arijit-singh-with-his-majestic-voice-stunned-the-public-humming-a-best-music-artists-indian-singers-country-music-artists-thumbnail.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                       <Button style={{color:"black"}} onClick={() => setIsLiked(!isLiked)}>     <p style={stylec} >
                       <FavoriteIcon />
                       </p>
                       </Button>

                        <Button color="black" onClick={handleEventBut}> Add Reminder <AddCircleIcon /></Button> 


                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                               A
                            </Avatar>
                        }

                        title="Arjit Singh"
                        subheader="September 25, 2024"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://w0.peakpx.com/wallpaper/728/348/HD-wallpaper-rajasthan-diwas-bollywood-sensation-arijit-singh-with-his-majestic-voice-stunned-the-public-humming-a-best-music-artists-indian-singers-country-music-artists-thumbnail.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                       <Button style={{color:"black"}} onClick={() => setIsLiked(!isLiked)}>     <p>
                       <FavoriteIcon />
                       </p>
                       </Button>

                        <Button color="black" onClick={handleEventBut}> Add Reminder <AddCircleIcon /></Button> 


                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                               A
                            </Avatar>
                        }

                        title="Arjit Singh"
                        subheader="September 25, 2024"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://w0.peakpx.com/wallpaper/728/348/HD-wallpaper-rajasthan-diwas-bollywood-sensation-arijit-singh-with-his-majestic-voice-stunned-the-public-humming-a-best-music-artists-indian-singers-country-music-artists-thumbnail.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                       <Button style={{color:"black"}} onClick={() => setIsLiked(!isLiked)}>     <p >
                       <FavoriteIcon />
                       </p>
                       </Button>

                        <Button color="black" onClick={handleEventBut}> Add Reminder <AddCircleIcon /></Button> 


                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                               A
                            </Avatar>
                        }

                        title="Arjit Singh"
                        subheader="September 25, 2024"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://w0.peakpx.com/wallpaper/728/348/HD-wallpaper-rajasthan-diwas-bollywood-sensation-arijit-singh-with-his-majestic-voice-stunned-the-public-humming-a-best-music-artists-indian-singers-country-music-artists-thumbnail.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                       <Button style={{color:"black"}} onClick={() => setIsLiked(!isLiked)}>     <p>
                       <FavoriteIcon />
                       </p>
                       </Button>

                        <Button color="black" onClick={handleEventBut}> Add Reminder <AddCircleIcon /></Button> 


                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                               A
                            </Avatar>
                        }

                        title="Arjit Singh"
                        subheader="September 25, 2024"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://w0.peakpx.com/wallpaper/728/348/HD-wallpaper-rajasthan-diwas-bollywood-sensation-arijit-singh-with-his-majestic-voice-stunned-the-public-humming-a-best-music-artists-indian-singers-country-music-artists-thumbnail.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                       <Button style={{color:"black"}} onClick={() => setIsLiked(!isLiked)}>     <p>
                       <FavoriteIcon />
                       </p>
                       </Button>

                        <Button color="black" onClick={handleEventBut}> Add Reminder <AddCircleIcon /></Button> 


                    </CardActions>

                </Card>
                </Container>
               
            </div>
        </div>
    )
}