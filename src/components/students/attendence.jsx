import Sidebar from "./sidebar";
import './attendence.css';
import { colors, Container } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
export function Attendance(){

    const RADIAN = Math.PI / 30;
const data = [
  { name: 'Present', value:15, color: '#ff0000' },
  { name: 'Absent', value:1, color: '#00ff00' },
  {name:'Holiday',value:9, color:'#ff2678'},
  { name: 'Pending', value:5, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - total / value);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};


    return(
        <div  style={{ display: 'flex', flexDirection: "row" }}>
            <div><Sidebar/></div>

            <Container sx={{width:"90vw", mt:10}}>
                <div className="div" style={{ display: 'flex', flexDirection: "row", justifyContent:"space-around" }}>
                <div > 
              
              <table className="table">
              <thead>  <h3>Attendance Sheet</h3></thead>
               <thead>
                   <th>Date</th>
                   <th>Attendance</th>
               </thead>
               <tbody>
                   <tr>
                       <td>02-09-2024</td>
                       <td>Present</td>
                   </tr>
                   <tr>
                   <td>03-09-2024</td>
                   <td>Present</td>
                   </tr>
                   <tr>
                   <td>04-09-2024</td>
                   <td>Present</td>
                   </tr>
                   <tr>
                   <td>05-09-2024</td>
                   <td>Present</td>
                   </tr>
                   <tr>
                   <td>06-09-2024</td>
                   <td>Present</td>
                   </tr>
                   <tr>
                   <td>10-09-2024</td>
                   <td>Absent</td>
                   </tr>
               </tbody>
              </table>
       </div>
       <div className="pieChart">
        <div>
        <li className="pre">Present</li>
          <li className="abs">Absent</li>
          <li className="holi">Holidays</li>
          <li className="pen">Days Left</li>
        </div>
         <div>
         <PieChart width={300} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(value, data, cx, cy, iR, oR, '#d0d000')}
    </PieChart>
         </div>
      
       </div>
                </div>
           
                
            </Container>
           
        </div>

    )
}