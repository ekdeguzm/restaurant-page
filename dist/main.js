(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Welcome to Pizza Town!",t.appendChild(n);const a=document.createElement("img");a.src="../dist/images/background.jpg",a.height="300",t.appendChild(a);const o=document.createElement("p");o.textContent="We serve the best pizza in town. Come and take a bite!",t.appendChild(o),e.appendChild(t)};function t(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const o=document.createElement("p");o.textContent=t;const c=document.createElement("img");return c.src=`images/pizzas/${e.toLowerCase()}.png`,c.alt=`${e}`,n.appendChild(c),n.appendChild(a),n.appendChild(o),n}function n(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}const a=()=>{const a=document.querySelector("#content"),o=document.createElement("div");o.classList.add("tab-container"),console.log("Tab container created!");const c=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div");c.setAttribute("id","home-btn"),d.setAttribute("id","menu-btn"),i.setAttribute("id","contact-btn"),c.classList.add("tab"),d.classList.add("tab"),i.classList.add("tab"),c.textContent="Home",d.textContent="Menu",i.textContent="Contact",o.appendChild(c),o.appendChild(d),o.appendChild(i),a.appendChild(o),c.addEventListener("click",(()=>{n(),e()})),d.addEventListener("click",(()=>{n(),document.getElementById("content").appendChild(function(){document.querySelector("#content");const e=document.createElement("div");e.classList.add("page-content");const n=document.createElement("div");n.classList.add("menu");const a=document.createElement("h1");return a.textContent="Our Menu",n.appendChild(t("Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),n.appendChild(t("Gamberi","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil")),n.appendChild(t("Pepe","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil")),n.appendChild(t("Disgustoso","Tomato sauce, Bacon, Pineapple, Olives, Basil")),n.appendChild(t("Colorato","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil")),n.appendChild(t("Pomodoro","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli")),n.appendChild(t("Crema","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil")),n.appendChild(t("Carne","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli")),e.appendChild(a),e.appendChild(n),e}())})),i.addEventListener("click",(()=>{n(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form"),document.createElement("div").classList.add("contact");const a=document.createElement("p");a.textContent="📞 123 456 789",n.appendChild(a);const o=document.createElement("p");o.textContent="🏠 Golden Gate Street. 42, San Francisco, USA",n.appendChild(o);const c=document.createElement("img");c.src="../dist/images/restaurant-location.png",c.alt="Pizza Town's restaurant location",n.appendChild(c),t.appendChild(n),e.appendChild(t)})()}))};a(),e()})();