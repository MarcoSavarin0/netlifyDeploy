import{t as x,p as h,l as v,s as y,a as f}from"./constants.vhMIeaWo.js";const L=document.querySelectorAll(".card"),E=document.querySelectorAll(".showImage"),k=document.querySelectorAll(".Boton"),C=[v,[L,{y:["40%","0%"],opacity:[0,1]},{at:"-0.1",duration:.4,delay:y(.5),easing:f({velocity:100,stiffness:50,damping:10})}],[k,{y:["40%","0%"],opacity:[0,1]},{at:"-0.1",duration:.4,delay:y(.5),easing:f({velocity:100,stiffness:50,damping:10})}]];x(C);function w(e,i){let o=0;const r=document.querySelector(".div-imagenes");r&&r.remove();const d=document.createElement("div");d.classList.add("fixed","inset-0","z-50","overflow-auto","bg-black","bg-opacity-75","flex","justify-center","items-center","div-imagenes");const a=document.createElement("div");a.classList.add("bg-gray-900","p-4","max-w-lg","mx-auto","rounded","overflow-hidden","relative");const c=document.createElement("div");c.classList.add("loader","flex","justify-center","items-center","w-16","h-16","absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","bg-white","opacity-75","z-50");const g=document.createElement("div");g.classList.add("animate-spin","rounded-full","h-8","w-8","border-t-2","border-b-2","border-purple-500"),c.appendChild(g),a.appendChild(c);const l=document.createElement("img");l.src=e[o],l.classList.add("w-full","h-auto","aspect-w-16","aspect-h-9","opacity-0","transition-opacity","duration-500"),l.onload=()=>{c.style.display="none",l.classList.remove("opacity-0")},a.appendChild(l);const u=document.createElement("button");if(u.classList.add("absolute","top-0","right-0","m-2","text-purple-800","hover:text-purple-600","text-2xl","bg-gray-200","rounded","p-2"),u.innerHTML="&times;",u.addEventListener("click",()=>{d.remove()}),a.appendChild(u),e.length>1){const t=document.createElement("button");t.classList.add("absolute","left-0","top-1/2","transform","-translate-y-1/2","p-4","text-2xl","text-purple-800","hover:text-gray-600","bg-gray-300","rounded"),t.textContent="<",t.addEventListener("click",()=>{o=(o-1+e.length)%e.length,l.src=e[o]}),a.appendChild(t);const n=document.createElement("button");n.classList.add("absolute","right-0","top-1/2","transform","-translate-y-1/2","text-2xl","p-4","text-purple-800","hover:text-gray-600","bg-gray-300","rounded"),n.textContent=">",n.addEventListener("click",()=>{o=(o+1)%e.length,l.src=e[o]}),a.appendChild(n)}const m=document.createElement("div");m.classList.add("flex","flex-col","items-center","mt-4");function b(t,n){return(h[n].link?.filter(p=>p.includes("github"))).length>1?n===1?"Github (api)":"Github (cliente)":t.includes("github")?"Github":"Deploy"}h[i].link?.forEach((t,n)=>{const s=document.createElement("a");s.href=t,s.target="_blank",s.rel="noopener noreferrer";const p=b(t,n);s.textContent=p,p.includes("Github")?s.classList.add("text-white","github-link"):s.classList.add("text-white","deploy-link"),m.appendChild(s)}),a.appendChild(m),d.appendChild(a),document.body.appendChild(d)}E.forEach((e,i)=>{e.addEventListener("click",()=>{const r=h[i];w(r.images,i)})});
