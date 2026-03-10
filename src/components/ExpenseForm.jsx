import { useState } from "react";
import Notiflix from "notiflix";

function ExpenseForm({addExpense}){

const [title,setTitle] = useState("");
const [amount,setAmount] = useState("");
const [category,setCategory] = useState("Food");

const submit=(e)=>{

e.preventDefault();

if(!title || !amount){

Notiflix.Notify.failure(
"Pencatatan wajib diisi"
);

return;

}

addExpense({
id: Date.now(),
title,
amount:Number(amount),
category,
date:new Date().toISOString()
});

Notiflix.Notify.success("Data berhasil ditambahkan");

setTitle("");
setAmount("");

};

return(

<form onSubmit={submit} className="space-y-2">

<input
className="border p-2 rounded w-full bg-white dark:bg-gray-700"
placeholder="Expense name"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="number"
className="border p-2 rounded w-full bg-white dark:bg-gray-700"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<select
className="border p-2 rounded w-full bg-white dark:bg-gray-700"
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option>Makanan</option>
<option>Transport</option>
<option>Belanja</option>
<option>Bills</option>

</select>

<button
disabled={!title || !amount}
className="bg-slate-800 hover:bg-slate-700 text-white 
dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300
w-full py-2 rounded disabled:opacity-50"
>
Simpan catatan
</button>

</form>

)

}

export default ExpenseForm;