import { useState } from "react";
import { Input,Button, Card,CardActions,CardContent,Typography,CardMedia } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from "./sidebar";


export default function Profile(){
     const [sname,setSname] = useState(null);
     const [fname,setFname] = useState(null);
     const [mname,setMname] = useState(null);
     const [number,setNumber] = useState(null);
     const [econtact,setemcontact] = useState(null);
     const [econtact1,setemcontact1] = useState(null);
     const [relative,setRelative] = useState(null);
     const [relative1,setRelative1] = useState(null);
     const [pimg,setPimg] = useState(null);
     const [area,setArea] =useState(null);
     const [street,setStreet]=useState(null);
     const [city,setCity] = useState(null);
     const [state,setState] =useState(null);
     const [pincode,setPicode] = useState(null);
     const [area1,setArea1] =useState(null);
     const [street1,setStreet1]=useState(null);
     const [city1,setCity1] = useState(null);
     const [state1,setState1] =useState(null);
     const [pincode1,setPicode1] = useState(null);
     const [submit,setSubmit] = useState(true);

     const handleImageChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        setPimg(e.target.result);
      };
  
      reader.readAsDataURL(file);
    };



     const Detail = {
        Name : sname,
        Area : area,
        Street : street,
        City : city,
        State : state,
        Pincode : pincode,
        Number : number,
        Emergency_contact : econtact,
        Image : pimg,
        Father : fname,
    }

     function handleSubmit(){
        
        if(number.length<10||number.length>10){
            alert("Please Enter valid Mobile Number");
            return;
        }else if(econtact.length<10||econtact.length>10){
            alert("Please Enter Valid Emergency Mobile Number 1")
            return;
        }else if(econtact1.length<10||econtact1.length>10){
            alert("Please Enter Valid Emergency Mobile Number 2")
            return;
        }

             setSubmit(!submit)
             
     }

    
    return(
        <div style={{ display: 'flex', flexDirection: "row" }} >  

            <Sidebar/>


<div style={{marginLeft:"10%"}}>

</div>
            {submit ? ( <div className="leftSide" style={{width:"100%", }}>
 {/* Personal details of student start */}
 <h2>Personal Details</h2>
                <form  >
                <div className="personalDetails" style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
            <label>Image: <Input type="file" accept="image" onChange={handleImageChange}></Input></label>
                <label>Full Name: <Input type="text" onChange={(event)=>setSname(event.target.value)}/></label>
                <label>Father Name: <Input type="text" onChange={(event)=> setFname(event.target.value)}></Input></label>
                <label>Mother Name: <Input type="text" onChange={(event)=> setMname(event.target.value)}></Input></label>
                <label>Contact Number: <Input type="text" onChange={(event)=> setNumber(event.target.value)}></Input></label>
            </div>
                     {/* personal detail of student end */}
                 
                    {/* Current and Permannet Address of Student */}

            <div className="address">  
            <h2>Current Address</h2>
                <div className="currentAddress" style={{display:"grid", gridTemplateColumns:"repeat(2,2fr)"}}>
               
                <label>Area Name: <Input  type="text" onChange={(event)=> setArea(event.target.value)}></Input></label>
                <label>Street Number: <Input  type="number" onChange={(event)=> setStreet(event.target.value)} ></Input></label>
                <label>City: <Input  type="text" onChange={(event)=> setCity(event.target.value)}></Input></label>
                <label>State: <Input  type="text" onChange={(event)=> setState(event.target.value)}></Input></label>
                <label>Pincode: <Input  type="text" onChange={(event)=> setPicode(event.target.value)}></Input></label>
                
                </div>
                <h2>Permanent Address</h2>
                <div className="permanentAddress" style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
                
                <label>Area Name: <Input  type="text" onChange={(event)=> setArea1(event.target.value)}></Input></label>
                <label>Street Number: <Input  type="number" onChange={(event)=> setStreet1(event.target.value)} ></Input></label>
                <label>City: <Input  type="text" onChange={(event)=> setCity1(event.target.value)}></Input></label>
                <label>State: <Input  type="text" onChange={(event)=> setState1(event.target.value)}></Input></label>
                <label>Pincode: <Input  type="text" onChange={(event)=> setPicode1(event.target.value)}></Input></label>
                </div>
            </div>

              {/* Current and Permannet Address of Student End */}

            
            <h2>Emergency Contact</h2>
        <div className="emergencyContact"  style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
               
                <label>Emergency contact 1: <Input  type="number" onChange={(event)=> setemcontact(event.target.value)}></Input></label>
                <label>Relation: <Input  type="text" onChange={(event)=> setRelative(event.target.value)}></Input></label>
                <label>Emergency contact 1: <Input  type="number" onChange={(event)=> setemcontact1(event.target.value)}></Input></label>
                <label>Relation: <Input  type="text" onChange={(event)=> setRelative1(event.target.value)}></Input></label>
                
        </div>

        {/* // Emergency contact of student end */}
        <br></br>
         <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </form>
            </div>):(  <div className="rightSide" >
           <Card maxWidth={345} sx={{mt:3,boxShadow:"0 3px 10px  rgb(135, 158, 251)"}}>
           <CardMedia sx={{ height: 140 }} title="Profile image">
                {pimg && <img src={pimg} alt="Uploaded Profile Image" style={{height:"10rem", width:"10rem", borderRadius:"100px", marginLeft:"25%"}} />}
              </CardMedia>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
            {Detail.Name} - BCA (2021-2024)
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
            Contact : {Detail.Number} <br></br>
            Father Name : {Detail.Father} <br></br>
         Current Address: {Detail.Area} {Detail.Street} {Detail.City} {Detail.State} {Detail.Pincode} 

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" onClick={handleSubmit}><EditIcon/></Button>
      </CardActions>
    </Card> 
            </div>
          ) }

        </div>

    )
}