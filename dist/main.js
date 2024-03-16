(()=>{const e=document.querySelector("#container"),t=document.querySelector("#city"),r=document.querySelector("#country"),o=document.querySelector("#degreesC"),n=document.querySelector("#degreesF"),c=document.querySelector("#feelsLikeC"),i=document.querySelector("#feelsLikeF"),l=document.querySelector("#humidity"),u=document.querySelector("#location");document.querySelector("#search").addEventListener("click",(async a=>{a.preventDefault();const s=u.value.trim();if(s){const u=await async function(e){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=33417db233ee48d59c313733240603&q=${e}`,{mode:"cors"});if(!t.ok)throw alert("Invalid location or API key"),new Error("Invalid location or API key");const r=await t.json();if(!r.current)throw alert("Invalid location or API key."),new Error("Invalid location or API key.");const o=r.current.temp_c,n=r.current.temp_f,c=r.current.feelslike_c,i=r.current.feelslike_f;return{degrees_c:o,degrees_f:n,feelsLike_c:c,feelsLike_f:i,humidity:r.current.humidity,country:r.location.country,city:r.location.name}}catch(e){console.error("There has been a problem with your fetch operation:",e)}}(s);o.textContent=`Degrees: ${u.degrees_c} °C`,n.textContent=`Degrees: ${u.degrees_f} °F`,c.textContent=`Feels like: ${u.feelsLike_c} °C`,i.textContent=`Feels like: ${u.feelsLike_f} °F`,l.textContent=`Humidity: ${u.humidity}`,t.textContent="City: "+u.city,r.textContent="Country: "+u.country,e.classList.add("result")}else alert("Please enter a location")}))})();