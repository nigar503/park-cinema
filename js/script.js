function toggleDropdown(d) {
  d == "1"
    ? document.getElementById("dropdown1").classList.toggle("hidden")
    : document.getElementById("dropdown1").classList.add("hidden");

  d == "2"
    ? document.getElementById("dropdown2").classList.toggle("hidden")
    : document.getElementById("dropdown2").classList.add("hidden");

  d == "3"
    ? document.getElementById("dropdown3").classList.toggle("hidden")
    : document.getElementById("dropdown3").classList.add("hidden");
}

const ageMap = {
  ZERO: 0,
  SIX: 6,
  TWELVE: 12,
  SIXTEEN: 16,
  EIGHTEEN: 18,
};

async function showCards() {
  let res = await fetch("https://parkcinema-data-eta.vercel.app/landing");
  let data = await res.json();

  const cards = document.getElementById("cards");

  data.map((item) => {
    const ageLimit = ageMap[item.ageLimit];

    cards.innerHTML += `<div onclick= "navigate('${
      item.id
    }')" class="my-2 relative">

  <div class="w-[290px] h-[400px] rounded-4xl shadow-inner overflow-hidden bg-black">
    <img class="hover:scale-105 duration-300 w-full opacity-65 h-full object-cover" 
         src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${
           item.image
         }&w=640&q=75" 
         alt="movie" />
  </div>


  <div class="absolute bottom-2 left-2">
    <p class="text-[22px] font-bold text-white">${item.name}</p>
    <p class="text-white">${item.firstScreeningDate.split("T")[0]}</p>
    <p class="text-white">${ageLimit}+</p>
  </div>
</div>
`;
  });
}
showCards();
function navigate(id) {
  location.href = `../html/details.htm?id=${id}`;
}
