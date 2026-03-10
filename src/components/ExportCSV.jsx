import { saveAs } from "file-saver";
import Notiflix from "notiflix";

function ExportCSV({expenses}){

const formatDate=(date)=>{

return new Date(date).toLocaleString("id-ID",{
timeZone:"Asia/Jakarta",
day:"2-digit",
month:"2-digit",
year:"numeric",
hour:"2-digit",
minute:"2-digit"
});

};

const getFileName=()=>{

const now = new Date();

const formatted = now.toLocaleString("id-ID",{
timeZone:"Asia/Jakarta",
day:"2-digit",
month:"2-digit",
year:"numeric",
hour:"2-digit",
minute:"2-digit"
})
.replace(/\//g,"-")
.replace(/:/g,"-");

return `${formatted}_Expense.csv`;

};

const exportFile=()=>{

if(expenses.length === 0){

Notiflix.Notify.failure(
"Tidak ada data untuk di export"
);

return;

}

const header="Title,Amount,Category,Date\n";

const rows = expenses.map(e=>
`${e.title},${e.amount},${e.category},${formatDate(e.date)}`
).join("\n");

const blob = new Blob([header+rows],{
type:"text/csv;charset=utf-8;"
});

saveAs(blob,getFileName());

Notiflix.Notify.success("CSV berhasil di export");

};

return(

<button
onClick={exportFile}
className="bg-slate-800 hover:bg-slate-700 text-white
dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300
w-full py-2 rounded"
>
Export CSV
</button>

)

}

export default ExportCSV;