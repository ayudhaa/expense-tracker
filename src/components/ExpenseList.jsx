function ExpenseList({expenses,deleteExpense}){

return(

<div className="mt-4 space-y-2">

{expenses.map(e=>(

<div
key={e.id}
className="flex justify-between items-center border p-2 rounded"
>

<div>

<div className="font-semibold">
{e.title}
</div>

<div className="text-sm text-gray-500">
{e.category}
</div>

</div>

<div className="flex items-center gap-2">

<div className="font-bold">
Rp {e.amount.toLocaleString("id-ID")}
</div>

<button
onClick={()=>deleteExpense(e.id)}
className="text-gray-400 hover:text-red-500"
>
✕
</button>

</div>

</div>

))}

</div>

)

}

export default ExpenseList;