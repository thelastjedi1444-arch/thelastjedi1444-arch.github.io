import{t as e}from"./contact.Bwwxgdq3.js";import{t}from"./images.tvhfaLHH.js";import{c as n}from"./contact.CH_mUrp4.js";import{t as r}from"./site.C7W3z2zL.js";import{r as i}from"./analytics.BspHOeUE.js";var a=[{after:`/assets/cases/clinical-03-after.jpg`,before:`/assets/cases/clinical-03-before.jpg`,caption:`Lemon Clinic Patient Result • Sapphire FUE`},{after:`/assets/cases/clinical-04-after.jpg`,before:`/assets/cases/clinical-04-before.jpg`,caption:`Lemon Clinic Patient Result • DHI + Sapphire`},{after:`/assets/cases/studio-03-after.jpg`,before:`/assets/cases/studio-03-before.jpg`,caption:`Lemon Clinic Patient Result • Frontal Density`},{after:`/assets/cases/studio-02-after.jpg`,before:`/assets/cases/studio-02-before.jpg`,caption:`Lemon Clinic Patient Result • Natural Hairline`},{after:`/assets/cases/clinical-01-after.jpg`,before:`/assets/cases/clinical-01-before.jpg`,caption:`Lemon Clinic Patient Result • Full Restoration`}],o=0,s=null;function c(){if(typeof window>`u`||!window.matchMedia)return!1;try{return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function l(e){o=(e+a.length)%a.length;let n=a[o],r=document.getElementById(`hero-main-after-img`),i=document.getElementById(`hero-small-before-img`);r&&i&&(r.style.opacity=`0.35`,i.style.opacity=`0.35`,setTimeout(()=>{r.closest(`picture`)?.querySelectorAll(`source`).forEach(e=>e.remove()),i.closest(`picture`)?.querySelectorAll(`source`).forEach(e=>e.remove()),r.removeAttribute(`srcset`),i.removeAttribute(`srcset`),r.src=t(n.after),i.src=t(n.before),r.style.opacity=`1`,i.style.opacity=`1`},140)),document.querySelectorAll(`#hero-dots .dot`).forEach((e,t)=>{e.classList.toggle(`active`,t===o)})}function u(e){l(o+e),d()}function d(){s&&=(clearInterval(s),null),c()||(s=setInterval(()=>{l(o+1)},3800))}function f(){let e=document.querySelector(`.hero-stage`);if(!e)return;let t=0,n=0,r=!1;e.addEventListener(`pointerdown`,e=>{t=e.clientX,n=e.clientY,r=!0},{passive:!0}),e.addEventListener(`pointerup`,e=>{if(!r)return;r=!1;let i=e.clientX-t,a=e.clientY-n;Math.abs(i)>40&&Math.abs(i)>Math.abs(a)&&u(i<0?1:-1)},{passive:!0}),e.addEventListener(`pointercancel`,()=>{r=!1},{passive:!0})}function p(){a.forEach(e=>{e.after=t(e.after),e.before=t(e.before)});let e=document.getElementById(`hero-prev-btn`),n=document.getElementById(`hero-next-btn`);if(e&&e.addEventListener(`click`,()=>u(-1)),n&&n.addEventListener(`click`,()=>u(1)),document.querySelectorAll(`#hero-dots .dot`).forEach((e,t)=>{e.addEventListener(`click`,()=>{l(t),d()})}),f(),typeof window<`u`&&window.matchMedia)try{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>{d()};e.addEventListener?e.addEventListener(`change`,t):e.addListener&&e.addListener(t)}catch{}window.setHeroSlide=l,window.moveHeroSlide=u,window.resetHeroTimer=d,window.isReducedMotion=c,d()}var m=`<svg fill="none" height="22" viewBox="0 0 24 24" width="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="m18 2 4 4"/><path d="m17 7-3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/></svg>`,h=`<svg fill="none" height="22" viewBox="0 0 24 24" width="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6"/><path d="M12 18v4"/><path d="M4.93 10.93 8 14"/><path d="m16 10 3.07 3.07"/><path d="M2 18h20"/><path d="M12 10a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4Z"/></svg>`,g=`<svg fill="none" height="22" viewBox="0 0 24 24" width="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>`,_=[{id:`case-1`,patientName:`Patient Result`,beforeImg:`/assets/cases/clinical-03-before.jpg`,afterImg:`/assets/cases/clinical-03-after.jpg`,fullImg:`/assets/cases/clinical-03-full.jpg`},{id:`case-2`,patientName:`Patient Result`,beforeImg:`/assets/cases/clinical-04-before.jpg`,afterImg:`/assets/cases/clinical-04-after.jpg`,fullImg:`/assets/cases/clinical-04-full.jpg`},{id:`case-3`,patientName:`Patient Result`,beforeImg:`/assets/cases/studio-03-before.jpg`,afterImg:`/assets/cases/studio-03-after.jpg`,fullImg:`/assets/cases/studio-03-full.jpg`},{id:`case-4`,patientName:`Patient Result`,beforeImg:`/assets/cases/studio-02-before.jpg`,afterImg:`/assets/cases/studio-02-after.jpg`,fullImg:`/assets/cases/studio-02-full.jpg`},{id:`case-5`,patientName:`Patient Result`,beforeImg:`/assets/cases/clinical-01-before.jpg`,afterImg:`/assets/cases/clinical-01-after.jpg`,fullImg:`/assets/cases/clinical-01-full.jpg`},{id:`case-6`,patientName:`Patient Result`,beforeImg:`/assets/cases/studio-06-before.jpg`,afterImg:`/assets/cases/studio-06-after.jpg`,fullImg:`/assets/cases/studio-06-full.jpg`}],v=[...[1,2,3,4,5,6,7,8,9,10,11].map(e=>({id:`clinical-${String(e).padStart(2,`0`)}`,category:`clinical-slider`,title:`Lemon Clinic Result #${e}`,img:`/assets/cases/clinical-${String(e).padStart(2,`0`)}-full.jpg`})),...[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(e=>({id:`studio-${String(e).padStart(2,`0`)}`,category:`hairline-crown`,title:`Lemon Clinic Result #${e+11}`,img:`/assets/cases/studio-${String(e).padStart(2,`0`)}-full.jpg`})),...[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(e=>{let t=[1,5,7,9,10,13,14,15].includes(e);return{id:`gallery-${String(e).padStart(2,`0`)}`,category:t?`patient-selfies`:`hairline-crown`,title:`Lemon Clinic Result #${e+25}`,img:`/assets/cases/gallery-${String(e).padStart(2,`0`)}.jpg`}})],y=`all`,b=!1,x=0,S=null,C=!1;function w(e){let t=e.querySelector(`.ba-range-input`),n=t?.getAttribute(`data-case-id`);if(!n)return;let r=!1,i=r=>{let i=e.getBoundingClientRect();if(i.width<=0)return;let a=Math.max(0,Math.min(r-i.left,i.width)),o=Math.round(a/i.width*100),s=Math.max(5,Math.min(95,o));t&&(t.value=String(s)),D(n,s)};e.addEventListener(`pointerdown`,t=>{r=!0;try{e.setPointerCapture?.(t.pointerId)}catch{}i(t.clientX)}),e.addEventListener(`pointermove`,e=>{r&&i(e.clientX)});let a=t=>{if(r){r=!1;try{e.releasePointerCapture?.(t.pointerId)}catch{}}};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a)}function T(){let e=document.getElementById(`featured-cases-grid`);e&&(e.innerHTML=_.slice(0,3).map(e=>`
    <article class="case-card">
      <div class="ba-slider-container" id="ba-container-${e.id}" style="touch-action: pan-y;">
        <img src="${e.afterImg}" alt="Lemon Clinic Patient Result After Hair Transplant" class="ba-after-img" loading="lazy" width="600" height="700" />
        <div class="ba-before-wrap" id="ba-before-${e.id}" style="width: 50%;">
          <img src="${e.beforeImg}" alt="Lemon Clinic Patient Result Before Hair Transplant" class="ba-before-inner-img" loading="lazy" width="600" height="700" />
        </div>
        <div class="ba-handle" id="ba-handle-${e.id}" aria-hidden="true">↔</div>
        <span class="ba-label ba-label-before">Before</span>
        <span class="ba-label ba-label-after">After</span>
        <input type="range" min="5" max="95" value="50" class="ba-range-input"
          data-case-id="${e.id}"
          aria-label="Compare Before and After results" />
      </div>

      <div class="case-card-name">
        <span>Patient result · Lemon Clinic Istanbul</span>
      </div>

      <div class="tripplets-row">
        ${e.treatment?`
        <div class="tripplet-item">
          <span class="tripplet-icon" aria-hidden="true">${m}</span>
          <div>
            <span class="tripplet-label">Treatment:</span>
            <span class="tripplet-val">${e.treatment}</span>
          </div>
        </div>
        `:``}
        ${e.grafts?`
        <div class="tripplet-item">
          <span class="tripplet-icon" aria-hidden="true">${h}</span>
          <div>
            <span class="tripplet-label">Grafts:</span>
            <span class="tripplet-val">${e.grafts}</span>
          </div>
        </div>
        `:``}
        ${e.months?`
        <div class="tripplet-item">
          <span class="tripplet-icon" aria-hidden="true">${g}</span>
          <div>
            <span class="tripplet-label">Results after:</span>
            <span class="tripplet-val">${e.months}</span>
          </div>
        </div>
        `:``}
      </div>

      <a href="${n(`Hello Lemon Clinic! I saw a patient result on your website and would like a free consultation for the 4-Night Istanbul package.`)}"
         data-contact-msg="Hello Lemon Clinic! I saw a patient result on your website and would like a free consultation for the 4-Night Istanbul package."
         class="case-card-btn contact-chooser-trigger"
         aria-label="Book A Free Consultation for this result">
        Book A Free Consultation
      </a>
    </article>
  `).join(``),e.querySelectorAll(`.ba-range-input`).forEach(e=>{e.addEventListener(`input`,e=>{let t=e.target,n=t.getAttribute(`data-case-id`);n&&D(n,t.value)})}),e.querySelectorAll(`.ba-slider-container`).forEach(e=>{w(e)}),requestAnimationFrame(E))}function E(){document.querySelectorAll(`.ba-slider-container`).forEach(e=>{let t=e.offsetWidth,n=e.querySelector(`.ba-before-inner-img`);n&&t>0&&(n.style.width=`${t}px`)})}function D(e,t){let n=document.getElementById(`ba-before-${e}`),r=document.getElementById(`ba-handle-${e}`);n&&r&&(n.style.width=`${t}%`,r.style.left=`${t}%`)}function O(e=`all`){y=e;let t=document.getElementById(`full-gallery-grid`),n=document.getElementById(`gallery-load-more-btn`);if(!t)return;document.querySelectorAll(`.filter-btn`).forEach(t=>{t.classList.toggle(`active`,t.dataset.filter===e)});let r=e===`all`?v:v.filter(t=>t.category===e);t.innerHTML=(b?r:r.slice(0,12)).map(e=>`
    <div
      class="gallery-thumb-card"
      data-gallery-id="${e.id}"
      tabindex="0"
      role="button"
      aria-label="View photo: ${e.title}"
    >
      <div class="gallery-thumb-img-wrap">
        <img src="${e.img}" alt="${e.title} - Authentic Lemon Clinic Before and After Hair Restoration" loading="lazy" width="400" height="400" />
      </div>
      <div class="gallery-thumb-info">
        <strong class="gallery-thumb-title">${e.title}</strong>
        ${e.grafts?`<span class="gallery-thumb-grafts">${e.grafts}</span>`:``}
      </div>
    </div>
  `).join(``),t.querySelectorAll(`.gallery-thumb-card`).forEach(e=>{let t=()=>{let t=e.getAttribute(`data-gallery-id`);t&&N(t,e)};e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t())})}),n&&(n.style.display=r.length<=12?`none`:`inline-flex`,n.textContent=b?`Show Less Photos`:`See All ${r.length} Lemon Clinic Before & After Photos`)}function k(){b=!b,O(y)}function A(e){let t=document.getElementById(`case-lightbox-body`);if(!t)return;let r=`Hello Lemon Clinic! I'm looking at ${e.title} in your gallery and would like a free hair assessment.`;t.innerHTML=`
    <div class="lightbox-header">
      <h3 id="case-lightbox-heading" class="lightbox-title">${e.title} — Lemon Clinic Patient</h3>
      <span class="lightbox-subtitle">Verified Clinical Result • Istanbul</span>
    </div>
    <div class="lightbox-img-wrap">
      <button type="button" class="lightbox-nav-btn lightbox-prev" id="lightbox-prev-btn" aria-label="Previous case photo">‹</button>
      <img src="${e.img}" alt="${e.title} - Lemon Clinic Verified Clinical Result" class="lightbox-img" width="800" height="800" />
      <button type="button" class="lightbox-nav-btn lightbox-next" id="lightbox-next-btn" aria-label="Next case photo">›</button>
    </div>
    <div class="lightbox-footer">
      <span class="lightbox-footer-text">
        Want a similar result during a 4-Night All-Inclusive stay in Istanbul?
      </span>
      <a href="${n(r)}" data-contact-msg="${r}" class="cta-btn cta-wa-btn contact-chooser-trigger" aria-label="Message Us about this case">
        Message Us
      </a>
    </div>
  `;let i=document.getElementById(`lightbox-prev-btn`),a=document.getElementById(`lightbox-next-btn`);i&&i.addEventListener(`click`,()=>j(-1)),a&&a.addEventListener(`click`,()=>j(1))}function j(e){if(v.length===0)return;x=(x+e+v.length)%v.length;let t=v[x];t&&A(t)}function M(e){if(C){if(e.key===`Escape`)e.preventDefault(),P();else if(e.key===`ArrowLeft`)e.preventDefault(),j(-1);else if(e.key===`ArrowRight`)e.preventDefault(),j(1);else if(e.key===`Tab`){let t=document.getElementById(`case-lightbox-modal`);if(!t)return;let n=t.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`);if(n.length===0)return;let r=n[0],i=n[n.length-1];e.shiftKey?document.activeElement===r&&(e.preventDefault(),i.focus()):document.activeElement===i&&(e.preventDefault(),r.focus())}}}function N(e,t){let n=document.getElementById(`case-lightbox-modal`),r=document.getElementById(`case-lightbox-close`)||document.querySelector(`.modal-close`),i=v.findIndex(t=>t.id===e);if(!n||i===-1)return;x=i;let a=v[x];S=t||document.activeElement||null,A(a),n.classList.add(`open`),n.setAttribute(`aria-hidden`,`false`),C=!0,r&&r.focus(),window.addEventListener(`keydown`,M)}function P(){let e=document.getElementById(`case-lightbox-modal`);if(e&&(e.classList.remove(`open`),e.setAttribute(`aria-hidden`,`true`)),C=!1,window.removeEventListener(`keydown`,M),S&&typeof S.focus==`function`)try{S.focus()}catch{}}function F(){_.forEach(e=>{e.beforeImg=t(e.beforeImg),e.afterImg=t(e.afterImg),e.fullImg=t(e.fullImg)}),v.forEach(e=>{e.img=t(e.img)}),T(),O(`all`),window.addEventListener(`resize`,E),document.querySelectorAll(`.filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{O(e.dataset.filter||`all`)})});let e=document.getElementById(`gallery-load-more-btn`);e&&e.addEventListener(`click`,k);let n=document.getElementById(`case-lightbox-modal`);n&&n.addEventListener(`click`,e=>{e.target===n&&P()});let r=document.getElementById(`case-lightbox-close`)||document.querySelector(`.modal-close`);r&&r.addEventListener(`click`,P),window.renderFullGallery=O,window.toggleGalleryExpand=k,window.openCaseLightbox=N,window.closeCaseLightbox=P,window.updateBaSlider=D,window.navigateLightbox=j}var I=[{stage:`Stage 2 (Mild Temple Recession)`,grafts:`1,800 – 2,200 Grafts`,tech:`DHI Direct Hair Implantation`,estGrafts:2e3},{stage:`Stage 3 (Receding Hairline & Temples)`,grafts:`2,600 – 3,200 Grafts`,tech:`Sapphire FUE + DHI Hairline`,estGrafts:2900},{stage:`Stage 3 Vertex (Temples + Early Crown)`,grafts:`3,000 – 3,400 Grafts`,tech:`Sapphire FUE Dual-Zone`,estGrafts:3200},{stage:`Stage 4 (Front & Crown Thinning)`,grafts:`3,200 – 3,500 Grafts`,tech:`High-Density Sapphire FUE`,estGrafts:3500},{stage:`Stage 5 (Advanced Front + Crown)`,grafts:`3,800 – 4,500 Grafts`,tech:`Mega-Session Sapphire FUE`,estGrafts:4150},{stage:`Stage 6 / Extensive Restoration`,grafts:`4,500 – 5,000+ Grafts`,tech:`Combined Sapphire FUE + DHI`,estGrafts:4800}];function L(e){let t=r.pricing.graftThreshold,n=r.pricing.currencySymbol||`$`;return e>t?{name:`Complete Max`,price:r.pricing.max,formattedPrice:`${n}${r.pricing.max.toLocaleString()}`,badge:`${t.toLocaleString()}+ Grafts (Advanced / Norwood 5–6)`,summary:`Includes maximum graft extraction, potential 2-session procedure, 4 nights hotel, VIP transfers & guided Istanbul tour.`}:{name:`Complete`,price:r.pricing.complete,formattedPrice:`${n}${r.pricing.complete.toLocaleString()}`,badge:`Up to ${t.toLocaleString()} Grafts (Most Patients)`,summary:`Includes all-inclusive procedure up to 3,500 grafts, 4 nights hotel, VIP transfers & guided Istanbul tour.`}}var R={step:1,norwood:`Stage 3 (Receding Hairline & Temples)`,graftEstimate:`2,600 – 3,200 Grafts`,technique:`Sapphire FUE + DHI Hairline`,estGrafts:2900,goal:`Dense Natural Hairline & Temple Restoration`,timeline:`Within 1–3 Months`};function z(e){let t=I[e];if(!t)return;R.norwood=t.stage,R.graftEstimate=t.grafts,R.technique=t.tech,R.estGrafts=t.estGrafts,B();let n=L(R.estGrafts);i(`calculator_result`,{package:n.name})}function B(){let e=document.getElementById(`interactive-quiz-root`);if(!e)return;let t=L(R.estGrafts),r=`Hello Lemon Clinic! I used your Graft Calculator:\n• Pattern: ${R.norwood}\n• Estimate: ${R.graftEstimate}\n• Recommended Package: ${t.name} (${t.formattedPrice})\n• Inclusions: 4 Nights Hotel, VIP Transfers, 1-Day Istanbul Tour\nI'd like a free surgeon review of my photos.`;e.innerHTML=`
    <div class="quiz-header">
      <span class="quiz-tag">
        Interactive Graft & Package Estimator
      </span>
      <span class="quiz-sub">
        Click your hair loss stage below for an instant package recommendation & graft estimate
      </span>
    </div>
    <div class="norwood-grid">
      ${I.map((e,t)=>{let n=L(e.estGrafts);return`
          <div class="norwood-option ${R.norwood===e.stage?`selected`:``}" data-norwood-idx="${t}">
            <div class="norwood-top-row">
              <span class="norwood-est">Est. ${e.grafts}</span>
              <span class="norwood-pkg-badge">${n.name} (${n.formattedPrice})</span>
            </div>
            <strong class="norwood-title">${e.stage}</strong>
            <span class="norwood-tech">${e.tech}</span>
          </div>
        `}).join(``)}
    </div>
    <div class="quiz-result-box">
      <div class="quiz-result-details">
        <span class="quiz-result-label">Recommended Package for Your Hair Loss Stage</span>
        <div class="quiz-result-val">
          ${t.name} — ${t.formattedPrice}
        </div>
        <div class="quiz-result-badge-line">
          <span class="quiz-rec-badge">${t.badge}</span>
          <span class="quiz-rec-meta">${R.graftEstimate} • ${R.technique}</span>
        </div>
        <p class="quiz-result-desc">
          ${t.summary}
        </p>
      </div>
      <div class="quiz-result-action">
        <a href="${n(r)}" data-contact-msg="${r}" class="cta-btn cta-wa-btn contact-chooser-trigger">
          Get Quote for ${t.name} (${t.formattedPrice}) →
        </a>
        <span class="quiz-doctor-note">Exact package confirmed by doctor after photo evaluation</span>
      </div>
    </div>
  `,e.querySelectorAll(`.norwood-option`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-norwood-idx`);t!==null&&z(parseInt(t,10))})})}function V(){document.querySelectorAll(`.faq-question`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.faq-item`);t&&t.classList.toggle(`open`)})})}function H(){B(),V(),window.selectNorwoodStage=z}var U=!1;function W(){let e=document.getElementById(`mobile-menu-toggle`),t=document.getElementById(`mobile-nav-drawer`),n=document.getElementById(`mobile-nav-close`);t&&(U=!0,t.classList.add(`is-open`),t.setAttribute(`aria-hidden`,`false`),document.querySelectorAll(`[data-open-mobile-nav]`).forEach(e=>e.setAttribute(`aria-expanded`,`true`)),e&&(e.setAttribute(`aria-expanded`,`true`),e.classList.add(`is-active`)),typeof document<`u`&&document.body&&document.body.classList.add(`mobile-menu-locked`),n&&n.focus())}function G(){let e=document.getElementById(`mobile-menu-toggle`),t=document.getElementById(`mobile-nav-drawer`);t&&(U=!1,t.classList.remove(`is-open`),t.setAttribute(`aria-hidden`,`true`),document.querySelectorAll(`[data-open-mobile-nav]`).forEach(e=>e.setAttribute(`aria-expanded`,`false`)),e&&(e.setAttribute(`aria-expanded`,`false`),e.classList.remove(`is-active`),e.focus({preventScroll:!0})),typeof document<`u`&&document.body&&document.body.classList.remove(`mobile-menu-locked`))}function K(){U?G():W()}function q(e){if(U){if(e.key===`Escape`)e.preventDefault(),G();else if(e.key===`Tab`){let t=document.getElementById(`mobile-nav-drawer`);if(!t)return;let n=Array.from(t.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`)).filter(e=>e.getClientRects().length>0);if(n.length===0)return;let r=n[0],i=n[n.length-1];e.shiftKey?document.activeElement===r&&(e.preventDefault(),i.focus()):document.activeElement===i&&(e.preventDefault(),r.focus())}}}function J(){let e=document.getElementById(`mobile-menu-toggle`),t=document.getElementById(`mobile-nav-drawer`),n=document.getElementById(`mobile-nav-close`),r=document.getElementById(`mobile-nav-backdrop`);document.querySelectorAll(`[data-open-mobile-nav]`).forEach(e=>{e.addEventListener(`click`,W)}),e&&e.addEventListener(`click`,K),n&&n.addEventListener(`click`,G),r&&r.addEventListener(`click`,G),t&&t.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{G()})}),window.addEventListener(`keydown`,q),Y()}function Y(){let e=e=>{let t;try{t=decodeURIComponent(e.slice(1))}catch{return}let n=document.getElementById(t);if(!n)return;let r=n.parentElement;for(;r;)r instanceof HTMLDetailsElement&&(r.open=!0),r=r.parentElement;requestAnimationFrame(()=>{n.scrollIntoView({behavior:`instant`,block:`start`}),t===`book-consultation`&&n.focus({preventScroll:!0})})};document.addEventListener(`click`,t=>{let n=t.target.closest(`a[href]`);if(!n||t.defaultPrevented||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;let r=new URL(n.href,location.href);r.origin===location.origin&&r.pathname===location.pathname&&r.hash&&(t.preventDefault(),history.pushState(null,``,r.hash),e(r.hash))}),window.addEventListener(`hashchange`,()=>e(location.hash)),location.hash&&e(location.hash)}function X(){J(),e(),p(),F(),H()}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,X):X();