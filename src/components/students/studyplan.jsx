import Sidebar from "./sidebar"

export default function Studyplan(){



    return(
        <div style={{ display: 'flex', flexDirection: "row" }}>           

                    <Sidebar/>
                 
            <div className="second" style={{marginLeft:"5%"}}>
            
            <br></br>
            <h1 style={{fontFamily:"cursive", textAlign:"center"}}>Time Table for September </h1>
            <div style={{padding:"1%",backgroundColor:"white",fontFamily:"cursive",width:"100%", borderRadius:"10px"}}>
                <table style={{width:"100%", height:"55vh",}}>
                    <thead style={{backgroundColor:"#FF78AC",color:"white",fontSize:"larger",textAlign:"center", border:"2px solid black"}}>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </thead>
                    <tbody style={{backgroundColor:"teal",fontSize:"larger",textAlign:"center", color:"white", border:"2px solid black"}}>
                        <tr style={{backgroundColor:"#F2F0EA",color:"black"}}>
                            <td>09:30 to 10:30</td>
                            <td>System Design</td>
                            <td>C++ Practical</td>
                            <td>Operating System</td>
                            <td>Data Structure-1</td>
                            <td>Database System</td>
                        </tr>
                        <tr>
                            <td>10:30 to 11:30</td>
                            <td>Operating System</td>   
                            <td>C++ Practical</td>
                            <td>Database System</td>
                            <td>System Design</td>
                            <td>Data Structure-1</td>      
                        </tr>
                        <tr style={{backgroundColor:"#F2F0EA",color:"black"}}>
                            <td>11:30 to 12:30</td>
                            <td>Data Structure-1</td>  
                            <td>System Design</td>
                            <td>Operating System</td>     
                            <td>C++ Practical</td> 
                            <td>Database System</td>  
                        </tr>
                        <tr>
                            <td>01:30 to 02:30</td>
                            <td>Lunch</td> 
                            <td>Lunch</td> 
                            <td>Lunch</td> 
                            <td>Lunch</td> 
                            <td>Lunch</td>           
                        </tr>
                        <tr style={{backgroundColor:"#F2F0EA",color:"black"}}>
                            <td>12:30 to 01:30</td>
                            <td>C++ Practical</td> 
                            <td>Data Structure-1</td>  
                            <td>System Design</td>
                            <td>Database System</td> 
                            <td>Operating System</td>           
                        </tr>
                       
                        <tr>
                            <td>2:40 to 3:30</td>
                            <td>Database System</td> 
                            <td>C++ Practical</td> 
                            <td>Data Structure-1</td>  
                            <td>System Design</td>      
                            <td>Operating System</td>           
                        </tr>

                       
                    </tbody>
                </table>
                
                <div className="Notes" style={{ marginTop:"2%"}}>
                 <h1 style={{textAlign:"center"}}>Important Test</h1>

                 <table style={{width:"100%", textAlign:"center"}}>
                    <thead style={{backgroundColor:"#FF78AC",color:"white",fontSize:"larger",textAlign:"center", border:"2px solid black"}}>
                    <th>Date</th>
                        <th>Time</th>
                        <th>Subject</th>
                        <th>Topic</th>
                        
                    </thead>
                    <tbody>
                    <tr style={{backgroundColor:"#F2F0EA",color:"black"}}>
                            <td>10-Sep-2024</td>
                            <td>10:30</td>
                            <td>Operating System</td>
                            <td>Memory Management System</td>
                        </tr>

                        <tr style={{backgroundColor:"teal",color:"white"}}>
                            <td>12-Sep-2024</td>
                            <td>10:30</td>
                            <td>C -Practical</td>
                            <td>Arrays,Functions</td>
                        </tr>
                        <tr style={{backgroundColor:"#F2F0EA"}}>
                            <td>16-Sep-2024</td>
                            <td>10:30</td>
                            <td>Database System</td>
                            <td>CRUD-operation, SQL</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
           
             
        </div>
    )
}