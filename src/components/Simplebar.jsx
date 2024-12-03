
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WeeklyComparison = () => {
  
  const [thisdWeek, setThisWeek] = useState( "This Week");
  const [lastWek,setLastweek]=useState("Last Week")


  const data = [
    { day: "17 Sun", "Last week": 50000, "This week": 49000 },
    { day: "18 Mon", "Last week": 20000, "This week": 27000 },
    { day: "19 Tue", "Last week": 49000, "This week": 8000 },
    { day: "20 Wed", "Last week": 20000, "This week": 27000 },
    { day: "21 Thu", "Last week": 21000, "This week": 29000 },
    { day: "22 Fri", "Last week": 9000, "This week": 27000 },
    { day: "23 Sat", "Last week": 20000, "This week": 27000 },
  ];

  const handleSelectionChange = (event) => {
    setLastweek(event.target.value)
    setThisWeek(event.target.value);
  };

  return (
    <div style={{ width: "100%",}}>
      {/* Dropdown */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className="font-bold px-5">Weekly Comparison</h2>
        <select
        
          value={setThisWeek}
          onChange={handleSelectionChange}
          style={{
            padding: "0px",           
            cursor: "pointer",
          }}
        >
          <option value=""></option>
          <option value="This Week">This Week</option>
          <option value="Last Week">Last Week</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          barSize={18}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip />
          <Legend />
          {/* Conditionally render the bar based on the selected week */}
          {thisdWeek === "This Week" && <Bar dataKey="This week" fill="#FF698D" />}
          {lastWek === "Last Week" && <Bar dataKey="Last week" fill="#E8E8E8" />}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyComparison;
