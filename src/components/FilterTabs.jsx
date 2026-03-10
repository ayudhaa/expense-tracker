function FilterTabs({filter,setFilter}){

const active = "bg-slate-800 text-white dark:bg-slate-200 dark:text-black";
const normal = "bg-gray-200 dark:bg-gray-700";

return(

<div className="flex gap-2 mt-2">

<button
onClick={()=>setFilter("all")}
className={`px-3 py-1 rounded ${filter==="all" ? active : normal}`}
>
All
</button>

<button
onClick={()=>setFilter("today")}
className={`px-3 py-1 rounded ${filter==="today" ? active : normal}`}
>
Today
</button>

<button
onClick={()=>setFilter("month")}
className={`px-3 py-1 rounded ${filter==="month" ? active : normal}`}
>
Month
</button>

</div>

)

}

export default FilterTabs;