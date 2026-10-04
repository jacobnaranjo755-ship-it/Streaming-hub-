const services = [
  {name:"HBO Max", short:"MAX", logo:"#5b39a9", url:"https://www.max.com/"},
  {name:"Netflix", short:"N", logo:"#e50914", url:"https://www.netflix.com/"},
  {name:"Hulu", short:"h", logo:"#1ce783", url:"https://www.hulu.com/"},
  {name:"Disney+", short:"D+", logo:"#113ccf", url:"https://www.disneyplus.com/"},
  {name:"Prime Video", short:"▶", logo:"#00a8e1", url:"https://www.primevideo.com/"},
  {name:"Paramount+", short:"P+", logo:"#0064ff", url:"https://www.paramountplus.com/"},
  {name:"Peacock", short:"P", logo:"#111827", url:"https://www.peacocktv.com/"},
  {name:"Apple TV+", short:"", logo:"#111111", url:"https://tv.apple.com/"},
  {name:"STARZ", short:"S", logo:"#111111", url:"https://www.starz.com/"},
  {name:"Tubi", short:"T", logo:"#1b1b1b", url:"https://tubitv.com/"}
];

const grid=document.getElementById("services");
const count=document.getElementById("count");
count.textContent=`${services.length} services`;
services.forEach(s=>{
  const a=document.createElement("a");
  a.className="card"; a.href=s.url; a.target="_blank"; a.rel="noopener";
  a.innerHTML=`<div class="logo" style="--logo:${s.logo}">${s.short}</div><div class="name">${s.name}</div><div class="hint">Open & sign in</div><div class="arrow">↗</div>`;
  grid.appendChild(a);
});

const seasons={
 winter:{label:"WINTER MODE",title:"Cozy Streaming",emoji:"❄️"},
 spring:{label:"SPRING MODE",title:"Fresh Streaming",emoji:"🌸"},
 summer:{label:"SUMMER MODE",title:"Summer Streaming",emoji:"☀️"},
 fall:{label:"FALL MODE",title:"Cozy Fall Streaming",emoji:"🍂"}
};
function autoSeason(){
 const m=new Date().getMonth()+1;
 return m>=3&&m<=5?"spring":m>=6&&m<=8?"summer":m>=9&&m<=11?"fall":"winter";
}
let season=localStorage.getItem("streamseason-season")||autoSeason();
function applySeason(){
 document.body.className=season;
 const s=seasons[season];
 document.getElementById("seasonLabel").textContent=s.label;
 document.getElementById("title").textContent=s.title;
 document.getElementById("seasonBtn").textContent=s.emoji;
}
applySeason();

document.getElementById("seasonBtn").addEventListener("click",()=>{
 const order=["winter","spring","summer","fall"];
 season=order[(order.indexOf(season)+1)%order.length];
 localStorage.setItem("streamseason-season",season);
 applySeason();
});
document.getElementById("year").textContent=new Date().getFullYear();

if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
