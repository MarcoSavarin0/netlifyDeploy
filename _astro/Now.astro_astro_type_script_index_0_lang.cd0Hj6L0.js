let o=window.location.pathname;o.includes("/en")&&(document.querySelector("h6").innerHTML="Welcome",document.querySelector("p").innerHTML="Hi! I am <b class='font-bold'>Marco Savarino</b>, Backend Developer & <br>  DevOps Engineer.",document.querySelector(".translate-A")?.setAttribute("href","/"));let r=window.location.pathname;r.includes("/en")&&(document.querySelector("h1").innerHTML="Let's get started!",document.querySelector("address").innerHTML="<h2>Contact Details</h2><p>savarinomarco50@gmail.com</p><p>Argentina</p>",document.querySelector(".h2Media").innerHTML="Social Media");document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".carousel"),t=n?.querySelectorAll(".slide");Array.from(t||[]).map(e=>e.cloneNode(!0)).forEach(e=>n?.appendChild(e))});let a=window.location.pathname,i=document.querySelector(".title"),l=document.querySelector(".first-p"),c=document.querySelector(".second-p"),d=document.querySelector(".third-p");a.includes("/en")&&(i.innerHTML="About Me",l.innerHTML="Hello! I am Marco Savarino, a passionate 20-year-old programmer from Santa Fe, Argentina I started programming in October 2022 with a course at Digital House, and since then, I have been immersed in the world of technology",c.innerHTML="Currently, I am studying the Certified Tech Developer program at Digital House, while also working on personal projects and continuing to learn on my own",d.innerHTML="I have experience working in a team with agile methodologies (Scrum), handling cloud services like AWS or Google Cloud, as well as knowledge in VPS and the use of Linux systems (Ubuntu), using Docker to run APIs and a database in containers, and knowledge in testing, backend, and frontend");let s=window.location.pathname;s.includes("/en")&&(document.querySelector(".statusTitle").innerHTML="Status",document.querySelector(".estadoText").innerHTML="I am studying at Digital House (Certified Tech Developer) <br> <strong>Currently studying Infraestructura 1 and Frontend 2</strong> ");
