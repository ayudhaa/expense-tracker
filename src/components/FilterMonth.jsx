function FilterMonth({month,setMonth}){

return(

<input
type="month"
value={month}
onChange={(e)=>setMonth(e.target.value)}
className="border p-2 rounded w-full bg-white dark:bg-gray-700 dark:text-white"
/>

)

}

export default FilterMonth