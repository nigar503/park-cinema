let url = new URLSearchParams(window.location.search);
let id = url.get("id");
console.log(id);


async function showDetail(){
    let res = await fetch('https://parkcinema-data-eta.vercel.app/detail')
    let data = await res.json()
    
    let iconFlag =''
    let subTit = ''
   
   

    const time = document.getElementById('time')

    data.forEach(item =>{
         if(item.language === 'RU'){
            iconFlag = `<img src="../img/rus.webp" class="inline rounded-full w-6 h-6 mr-1" alt="RU" />`
           
        }
        else {
            iconFlag = `<img src="../img/azpng.png" class="inline rounded-full w-6 h-6 mr-1" alt="AZ" />`
        }
        const subtitleText = item.subtitle === 'AZ' ? 'AZ' : 'Altyazı yoxdur';
        time.innerHTML += `
        <table class="text-white text-[14px] font-medium w-full border-b-2 border-b-white text-center">

            <tr>
                <td class="w-[16.6%] py-3">${item.time}</td>
                <td class="w-[16.6%] py-3">${item.theatreTitle} | ${item.hallTitle}</td>
                <td class="w-[16.6%] py-3">${item.type.slice(1)}</td>
                <td class="w-[16.6%] py-3">${iconFlag}</td>
                <td class="w-[16.6%] py-3">${subtitleText}</td>
                <td class="w-[16.6%] py-3">
                  <button class= "bg-[#86312a] text-[#d5d2d2] py-2 px-[50px] rounded-[30px]">Bilet Al</button>
                </td>
            </tr>

        </table>
        `
    })
}
showDetail()

const dates = [
  { month: "May", day: 29 },
  { month: "May", day: 30 },
  { month: "May", day: 31 },
  { month: "Jun", day: 1 },
  { month: "Jun", day: 2 },
  { month: "Jun", day: 3 },
  { month: "Jun", day: 4 },
];

const container = document.getElementById("date-container");

dates.forEach(date => {
  container.innerHTML += `
    <div class="bg-[#555757] text-[#cccfd2] rounded-3xl text-center flex flex-col items-center justify-center h-24 w-full shadow-md hover:bg-[#6b6d6e] transition">
      <p class="text-sm">${date.month}</p>
      <p class="bg-[#797a7b] text-white py-2 px-4 mt-2 rounded-full w-10 h-10 flex items-center justify-center">${date.day}</p>
    </div>
  `;
});
function toggleDropdownSecond(d){
    d==1 ? document.getElementById("dropdown4").classList.toggle("hidden") :
     document.getElementById("dropdown4").classList.add("hidden")
    d==2 ? document.getElementById("dropdown5").classList.toggle("hidden") :
     document.getElementById("dropdown5").classList.add("hidden")
}
