import { PieChart,Pie,Cell,Tooltip } from "recharts";

function ExpenseChart({expenses}){

const data={};

expenses.forEach(e=>{
data[e.category]=(data[e.category] || 0) + e.amount;
});

const chartData = Object.keys(data).map(k=>({
name:k,
value:data[k]
}));

const colors=["#3b82f6","#22c55e","#f59e0b","#ef4444"];

return(

<PieChart width={300} height={220}>

<Pie
data={chartData}
dataKey="value"
nameKey="name"
cx="50%"
cy="50%"
outerRadius={80}
>

{chartData.map((entry,index)=>(
<Cell key={index} fill={colors[index % colors.length]}/>
))}

</Pie>

<Tooltip/>

</PieChart>

)

}

export default ExpenseChart;