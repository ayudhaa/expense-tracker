import { useState,useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import FilterTabs from "./components/FilterTabs";
import ExportCSV from "./components/ExportCSV";
import useLocalStorage from "./hooks/useLocalStorage";
import Notiflix from "notiflix";

Notiflix.Notify.init({
position:"right-top",
timeout:3000
});

function App(){

const [expenses,setExpenses] = useLocalStorage("expenses",[]);
const [filter,setFilter] = useState("all");

const [dark,setDark] = useState(
localStorage.getItem("darkMode") === "true"
);

useEffect(()=>{

localStorage.setItem("darkMode",dark);

if(dark){
document.documentElement.classList.add("dark");
}else{
document.documentElement.classList.remove("dark");
}

},[dark]);

const addExpense=(exp)=>{
setExpenses([exp,...expenses]);
};

const deleteExpense=(id)=>{
     Notiflix.Confirm.show(
        'Hapus Catatan',
        'Apakah kamu yakin ingin menghapus data ini?',
        'Ya, Hapus',
        'Batal',
        () => {
        setExpenses(expenses.filter(e => e.id !== id));
        }
    );
};

const today = new Date().toISOString().slice(0,10);

let filtered = expenses;

if(filter === "today"){
filtered = expenses.filter(e => e.date.slice(0,10) === today);
}

if(filter === "month"){
const month = new Date().toISOString().slice(0,7);
filtered = expenses.filter(e => e.date.slice(0,7) === month);
}

const total = filtered.reduce((sum,e)=>sum + e.amount,0);

return(

<div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center p-4">

<div className="w-full max-w-md bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-xl shadow">

<div className="flex justify-between mb-4">

<h1 className="text-xl font-bold">
Kelola Pengeluaran
</h1>

<button
onClick={()=>setDark(!dark)}
className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
>
{dark ? "☀️" : "🌙"}
</button>

</div>

<div className="text-lg font-semibold mb-2">
Total : Rp {total.toLocaleString("id-ID")}
</div>

<FilterTabs filter={filter} setFilter={setFilter}/>

<div className="mt-3">
<ExpenseForm addExpense={addExpense}/>
</div>

<div className="mt-5">
<ExpenseChart expenses={filtered}/>
</div>

<div className="mt-4">
<ExportCSV expenses={filtered}/>
</div>

<ExpenseList
expenses={filtered}
deleteExpense={deleteExpense}
/>

</div>

</div>

)

}

export default App;