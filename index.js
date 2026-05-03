/* empty css                      */import{a as p,S as y,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="ВАШ_КЛЮЧ_PIXABAY",g="https://pixabay.com/api/";function b(o){return p.get(g,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${i}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${n}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${m}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){u.innerHTML=""}function P(){d.classList.remove("is-hidden")}function c(){d.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=l.elements["search-text"].value.trim();r&&(v(),P(),b(r).then(i=>{if(c(),i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}S(i.hits)}).catch(()=>{c(),a.error({message:"Something went wrong. Please try again!"})}))});
//# sourceMappingURL=index.js.map
