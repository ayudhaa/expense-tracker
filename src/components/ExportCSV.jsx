import { saveAs } from "file-saver";
import Notiflix from "notiflix";

function ExportCSV({expenses}){

const formatDate = (date) => {

const d = new Date(date);

const day = String(d.getDate()).padStart(2,"0");
const month = String(d.getMonth()+1).padStart(2,"0");
const year = d.getFullYear();

const hour = String(d.getHours()).padStart(2,"0");
const minute = String(d.getMinutes()).padStart(2,"0");

return `${day}-${month}-${year} ${hour}:${minute}`;

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

return `${formatted}_Catatan_Pengeluaran.csv`;

};

const exportFile=()=>{

if(expenses.length === 0){

Notiflix.Notify.failure(
"Tidak ada data untuk di export"
);

return;

}

const header="Nama pengeluaran,Harga,Kategori,Tanggal dan jam\n";

const rows = expenses.map(e =>
`${e.title},${e.amount},${e.category},${formatDate(e.date)}`
).join("\n");

const total = expenses.reduce((sum,e)=>sum + e.amount,0);

const totalRow = `\n\nTOTAL,${total},,\n`;

const blob = new Blob([header + rows + totalRow],{
type:"text/csv;charset=utf-8;"
});

saveAs(blob,getFileName());

Notiflix.Notify.success("Laporan berhasil di export");

};

return(

<button
onClick={exportFile}
className="bg-slate-800 hover:bg-slate-700 text-white
dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300
w-full py-2 rounded"
>
Export
</button>

)

}

export default ExportCSV;