import{t as e}from"./site.DEYPpa4b.js";import{r as t}from"./analytics.BDV5nOXM.js";import{i as n,n as r,r as i}from"./contact.DBhG6tI0.js";import{c as a,i as o}from"./contact.DEf0SMiC.js";import{t as s}from"./images.tvhfaLHH.js";var c=`lemon_ai_device_id`;function l(){if(typeof window>`u`||!window.localStorage)return`dev-device-fallback-id`;try{let e=localStorage.getItem(c);return e||(e=typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`dev-`+Math.random().toString(36).slice(2,11)+`-`+Date.now().toString(36),localStorage.setItem(c,e)),e}catch{return`dev-device-memory-id`}}function u(){if(typeof window>`u`||!window.location)return{isMock:!1};try{let e=new URLSearchParams(window.location.search),t=e.get(`mock`),n=e.get(`mockError`),r=typeof window.location.hostname==`string`&&window.location.hostname.endsWith(`.github.io`)&&t!==`0`&&t!==`false`,i=t===`1`||t===`true`||!!n||r,a;return(n===`422`||n===`429`||n===`503`)&&(a=n),{isMock:i,mockError:a}}catch{return{isMock:!1}}}function d(t=3){let n=Math.max(2,Math.min(6,t)),r,i;n===2?(r=[{id:`hairline`,grafts:[600,900],label:`Hairline`},{id:`frontal`,grafts:[0,0],label:`Frontal`},{id:`midscalp`,grafts:[0,0],label:`Mid-Scalp`},{id:`crown`,grafts:[0,0],label:`Crown`}],i=[600,900]):n===3?(r=[{id:`hairline`,grafts:[900,1200],label:`Hairline`},{id:`frontal`,grafts:[700,1e3],label:`Frontal`},{id:`midscalp`,grafts:[0,0],label:`Mid-Scalp`},{id:`crown`,grafts:[0,0],label:`Crown`}],i=[1600,2200]):n===4?(r=[{id:`hairline`,grafts:[1e3,1300],label:`Hairline`},{id:`frontal`,grafts:[900,1200],label:`Frontal`},{id:`midscalp`,grafts:[500,800],label:`Mid-Scalp`},{id:`crown`,grafts:[400,700],label:`Crown`}],i=[2800,4e3]):n===5?(r=[{id:`hairline`,grafts:[1100,1400],label:`Hairline`},{id:`frontal`,grafts:[1e3,1300],label:`Frontal`},{id:`midscalp`,grafts:[800,1100],label:`Mid-Scalp`},{id:`crown`,grafts:[900,1200],label:`Crown`}],i=[3800,5e3]):(r=[{id:`hairline`,grafts:[1200,1500],label:`Hairline`},{id:`frontal`,grafts:[1100,1400],label:`Frontal`},{id:`midscalp`,grafts:[1e3,1300],label:`Mid-Scalp`},{id:`crown`,grafts:[1200,1600],label:`Crown`}],i=[4500,5800]);let a=i[1]>e.pricing.graftThreshold?`max`:`complete`;return{analysisId:`mock-ai-`+Math.random().toString(36).substring(2,8),isValidScalpPhoto:!0,norwoodStage:n,norwoodLabel:`Norwood ${n}`,confidence:`medium`,zones:r,totalGrafts:i,donorQuality:`good`,recommendedPackage:a,notes:`Frontal recession consistent with Norwood ${n}. Good donor density indicated.`,disclaimer:`This is an AI estimate, not a medical diagnosis. A licensed doctor will evaluate your photos and confirm your definitive surgical plan.`}}async function f(e,t=1600,n=.85){return typeof window>`u`||typeof document>`u`?e:new Promise((r,i)=>{let a=new FileReader;a.onerror=()=>i(Error(`Failed to read image file`)),a.onload=()=>{let e=new Image;e.onerror=()=>i(Error(`Failed to load image into DOM`)),e.onload=()=>{let a=e.width,o=e.height;(a>t||o>t)&&(a>o?(o=Math.round(o*t/a),a=t):(a=Math.round(a*t/o),o=t));let s=document.createElement(`canvas`);s.width=a,s.height=o;let c=s.getContext(`2d`);if(!c)return i(Error(`Canvas 2D context unavailable`));c.drawImage(e,0,0,a,o),s.toBlob(e=>{e?r(e):i(Error(`Canvas export to JPEG failed`))},`image/jpeg`,n)},e.src=a.result},a.readAsDataURL(e)})}async function p(e,t){let n=u(),r=t?.mock??n.isMock,i=t?.mockError??n.mockError;if(r||i){if(await new Promise(e=>setTimeout(e,600)),i===`422`)throw{code:`not_a_scalp_photo`,status:422,message:`We couldn't detect a clear hairline or scalp. Please upload a well-lit photo showing your forehead and hair.`};if(i===`429`)throw{code:`rate_limited`,status:429,retryAfter:86400,message:`Daily analysis limit reached (3 per day). Please send your photos directly to our surgical team via WhatsApp or iMessage for an immediate free assessment.`};if(i===`503`)throw{code:`daily_budget_reached`,status:503,message:`Our AI service is currently resting for the day. Please message our surgical team directly to receive a comprehensive free graft evaluation.`};return d(3)}let a=t?.endpoint||`/api/analyze`,o;try{o=await fetch(a,{method:`POST`,body:e})}catch{throw{code:`network_error`,status:0,message:`Unable to connect to AI analysis service. Please check your internet connection or use mock mode (?mock=1).`}}if(!o.ok){if(o.status===404&&t?.mock!==!1)return d(3);let e=null;try{e=await o.json()}catch{}let n=`unknown_error`;throw o.status===400?n=`invalid_input`:o.status===403?n=`bot_check_failed`:o.status===422?n=`not_a_scalp_photo`:o.status===429?n=`rate_limited`:o.status===503&&(n=`daily_budget_reached`),{code:n,status:o.status,message:e?.error||e?.message||`Analysis request failed with status ${o.status}`,retryAfter:e?.retryAfter}}return await o.json()}async function m(e,t,n){let r=u();if(n?.mock??r.isMock)return await new Promise(e=>setTimeout(e,400)),{ok:!0,leadId:`lead_mock_`+Math.random().toString(36).substring(2,8),analysisId:e};let i=n?.endpoint||`/api/analyze/${encodeURIComponent(e)}/claim`;try{let n=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});if(n.ok){let t=await n.json().catch(()=>({}));return{ok:!0,leadId:t.leadId||t.id,analysisId:e}}if(n.status===404){let n=await fetch(`/api/submitLead`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...t,package:`AI Hair Analysis Claim`,source:`ai`,consent:!0})}),r=await n.json().catch(()=>({}));if(n.ok&&r.ok)return{ok:!0,leadId:r.leadId,analysisId:e}}let r=await n.json().catch(()=>({}));return{ok:!1,error:r?.error||`HTTP error ${n.status}`,code:r?.code}}catch(e){return{ok:!1,error:e?.message||`Network error claiming analysis`,code:`NETWORK_ERROR`}}}function h(e,t){let{norwoodLabel:n,totalGrafts:r,recommendedPackage:i,analysisId:a}=e,o=i===`max`?`Complete Max ($2,999)`:`Complete ($2,499)`,s=`${r[0].toLocaleString()}–${r[1].toLocaleString()}`;return`${t?.trim()?`Hello Lemon Clinic! My name is ${t.trim()}.`:`Hello Lemon Clinic!`} I completed my AI Hair Analysis (ID: ${a}). My result: ${n}, estimated ${s} grafts. Recommended package: ${o}. I'd like to share my photos with your doctor for review.`}async function g(e,t){let n=u();if(t?.mock??n.isMock)return await new Promise(e=>setTimeout(e,400)),{ok:!0,message:`6-digit code sent! (Demo code: 123456)`};let r=t?.endpoint||`/api/preview/send-code`;try{let t=await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}),n=await t.json().catch(()=>({}));if(t.ok)return{ok:!0,message:n.message||`Verification code sent to your email.`};throw{code:n?.error||`unknown_error`,status:t.status,message:n?.message||`Request failed with status ${t.status}`}}catch(e){throw e?.code&&e?.status?e:{code:`network_error`,status:0,message:e?.message||`Network error sending verification code.`}}}async function _(e,t){let n=u();if(t?.mock??n.isMock){if(await new Promise(e=>setTimeout(e,800)),e.code!==`123456`)throw{code:`invalid_verification_code`,status:403,message:`Invalid verification code. In demo mode, use 123456.`};return{ok:!0,previewId:`mock-preview-case`,previewUrl:`/assets/cases/clinical-03-after.jpg`,disclaimer:`AI simulation for illustration only. Actual surgical results vary per patient.`,costEstimateUsd:.03}}let r=t?.endpoint||`/api/preview/generate`;try{let t=await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}),n=await t.json().catch(()=>({}));if(t.ok)return n;throw{code:n?.error||`unknown_error`,status:t.status,message:n?.message||`Simulation request failed with status ${t.status}`}}catch(e){throw e?.code&&e?.status?e:{code:`network_error`,status:0,message:e?.message||`Unable to connect to AI simulation service.`}}}function v(e,t){let{analysisId:n,norwoodLabel:r}=e;return`${t?.trim()?`Hello Lemon Clinic! My name is ${t.trim()}.`:`Hello Lemon Clinic!`} I generated my AI After-Simulation for my hair analysis (ID: ${n}, ${r}). I'd like to share this simulation with your surgical team for a medical evaluation.`}function y(e,t=1500){let n=(e[0]+e[1])/2;if(n<=0)return{opacity:.12,fillColor:`rgba(103, 116, 124, 0.15)`,strokeColor:`rgba(103, 116, 124, 0.3)`,label:`No grafts needed`};let r=+(.35+Math.min(1,Math.max(.1,n/t))*.4).toFixed(2);return{opacity:r,fillColor:`rgba(86, 175, 203, ${r})`,strokeColor:`#16435A`,label:`${e[0].toLocaleString()}–${e[1].toLocaleString()} grafts`}}function b(e,t=3){if(e===`hairline`){let e=`M 92,222 C 98,186 138,176 200,190 C 262,176 302,186 308,222 C 284,206 244,210 200,215 C 156,210 116,206 92,222 Z`;return t>=5&&(e=`M 80,228 C 90,178 134,168 200,184 C 266,168 310,178 320,228 C 290,210 246,216 200,222 C 154,216 110,210 80,228 Z`),{pathD:e,labelX:200,labelY:256,name:`Hairline Zone`}}if(e===`frontal`){let e=`M 100,190 C 126,144 274,144 300,190 C 266,178 234,186 200,188 C 166,186 134,178 100,190 Z`;return t>=5&&(e=`M 88,186 C 120,132 280,132 312,186 C 274,170 238,180 200,182 C 162,180 126,170 88,186 Z`),{pathD:e,labelX:200,labelY:112,name:`Frontal Forelock`}}return e===`midscalp`?{pathD:`M 114,148 C 140,106 260,106 286,148 C 254,138 146,138 114,148 Z`,labelX:200,labelY:76,name:`Mid-Scalp`}:{pathD:`M 134,108 C 158,72 242,72 266,108 C 236,100 164,100 134,108 Z`,labelX:200,labelY:42,name:`Crown / Vertex`}}function x(e,t,n=3){return{viewBox:`0 0 400 500`,zones:e.map(e=>{let t=b(e.id,n),r=y(e.grafts);return{id:e.id,name:t.name,grafts:e.grafts,label:r.label,opacity:r.opacity,fillColor:r.fillColor,strokeColor:r.strokeColor,pathD:t.pathD,labelX:t.labelX,labelY:t.labelY}}),totalGrafts:t,norwoodStage:n}}function S(e){let t=e.zones.map(e=>{let t=e.grafts[0]===0&&e.grafts[1]===0,n=t?`0`:`1`,r=``,i=``;return!t&&e.id===`hairline`?(i=`
        <!-- Surgeon's New Hairline Design Curve (Golden dashed line) -->
        <path
          d="M 92,222 C 116,206 156,210 200,215 C 244,210 284,206 308,222"
          fill="none"
          stroke="#F5D536"
          stroke-width="3.2"
          stroke-dasharray="7,4"
        />
        <!-- Left & Right Temple Restoration Points -->
        <circle cx="106" cy="204" r="4" fill="#F5D536" />
        <circle cx="294" cy="204" r="4" fill="#F5D536" />`,r=`
        <line x1="200" y1="215" x2="200" y2="242" stroke="#F5D536" stroke-width="1.8" stroke-dasharray="2,2" />
        <circle cx="200" cy="215" r="3.5" fill="#F5D536" />`):!t&&e.id===`frontal`&&(r=`
        <line x1="200" y1="164" x2="200" y2="126" stroke="#8CD0E5" stroke-width="1.8" stroke-dasharray="2,2" />
        <circle cx="200" cy="164" r="3.5" fill="#8CD0E5" />`),`
    <g class="graft-zone graft-zone-${e.id}" data-zone="${e.id}" data-grafts="${e.label}" opacity="${n}">
      <path
        d="${e.pathD}"
        fill="${e.fillColor}"
        stroke="${t?e.strokeColor:`#56AFCB`}"
        stroke-width="2.2"
        stroke-dasharray="${t?`4,4`:`none`}"
        class="graft-zone-path"
      />
      ${i}
      ${r}
      <!-- Callout Pill Label -->
      <g class="graft-label-group" transform="translate(${e.labelX}, ${e.labelY})">
        <rect
          x="-92"
          y="-14"
          width="184"
          height="28"
          rx="14"
          fill="rgba(0, 42, 56, 0.92)"
          stroke="${e.id===`hairline`?`#F5D536`:`#56AFCB`}"
          stroke-width="1.5"
        />
        <text
          x="0"
          y="4"
          fill="#FFFFFF"
          font-family="system-ui, -apple-system, sans-serif"
          font-size="11.5"
          font-weight="700"
          text-anchor="middle"
        >${e.name}: ${e.label}</text>
      </g>
    </g>`}).join(`
`);return`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="${e.viewBox}"
  class="graft-distribution-svg"
  aria-label="Interactive graft distribution map showing estimated grafts per zone"
>
  <defs>
    <filter id="graft-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="glow" />
      <feComposite in="SourceGraphic" in2="glow" operator="over" />
    </filter>
  </defs>

  ${t}
</svg>`}function C(e){let t=t=>e.zones.find(e=>e.id===t)||{id:t,name:t,grafts:[0,0],label:`No grafts needed`,fillColor:`rgba(103,116,124,0.15)`},n=t(`hairline`),r=t(`frontal`),i=t(`midscalp`),a=t(`crown`),o=e=>e.grafts[0]>0||e.grafts[1]>0;return`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 680 390"
  class="anatomical-dual-svg"
  aria-label="Anatomical front and top scalp diagram showing 4 restoration zones"
>
  <rect width="680" height="390" rx="12" fill="#062B38" />

  <!-- ================= LEFT PANEL: FRONT VIEW ================= -->
  <g transform="translate(16, 16)">
    <rect width="316" height="358" rx="10" fill="#0A3747" stroke="#1E566B" stroke-width="1" />
    <text x="158" y="26" fill="#F5D536" font-size="12" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">
      FRONT VIEW (WHERE NEW HAIRLINE SITS)
    </text>

    <!-- Head & Ears Silhouette -->
    <path d="M 81,175 C 69,175 69,215 83,220" fill="none" stroke="#56AFCB" stroke-width="2" />
    <path d="M 235,175 C 247,175 247,215 233,220" fill="none" stroke="#56AFCB" stroke-width="2" />
    <ellipse cx="158" cy="185" rx="76" ry="96" fill="#0F4659" stroke="#56AFCB" stroke-width="2" />

    <!-- Eyebrows, Eyes, Nose -->
    <path d="M 111,182 Q 130,174 144,181 M 172,181 Q 186,174 205,182" stroke="#8CD0E5" stroke-width="2" fill="none" stroke-linecap="round" />
    <circle cx="128" cy="196" r="4" fill="#56AFCB" opacity="0.6" />
    <circle cx="188" cy="196" r="4" fill="#56AFCB" opacity="0.6" />
    <path d="M 158,196 L 154,226 L 164,228" stroke="#56AFCB" stroke-width="1.8" fill="none" opacity="0.6" stroke-linecap="round" />
    <path d="M 140,248 Q 158,256 176,248" stroke="#56AFCB" stroke-width="1.8" fill="none" opacity="0.5" stroke-linecap="round" />

    <!-- Zone 2: Frontal Forelock -->
    <path
      d="M 94,140 C 116,96 200,96 222,140 C 198,130 118,130 94,140 Z"
      fill="${o(r)?`rgba(140, 208, 229, 0.7)`:`rgba(103, 116, 124, 0.2)`}"
      stroke="${o(r)?`#8CD0E5`:`#4A6E82`}"
      stroke-width="2"
    />
    <text x="158" y="122" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">
      2. Frontal: ${r.label}
    </text>

    <!-- Zone 1: Hairline & Temples -->
    <path
      d="M 88,164 C 94,134 124,128 158,138 C 192,128 222,134 228,164 C 208,152 184,156 158,160 C 132,156 108,152 88,164 Z"
      fill="${o(n)?`rgba(86, 175, 203, 0.85)`:`rgba(103, 116, 124, 0.2)`}"
      stroke="${o(n)?`#F5D536`:`#4A6E82`}"
      stroke-width="2.2"
    />
    <text x="158" y="153" fill="#F5D536" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">
      1. Hairline: ${n.label}
    </text>

    <text x="158" y="312" fill="#EBF5FA" font-size="11.5" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">
      Fills left &amp; right temples + frames forehead
    </text>
    <text x="158" y="332" fill="#8CD0E5" font-size="10.5" text-anchor="middle" font-family="system-ui, sans-serif">
      Dense packing right behind the new hairline
    </text>
  </g>

  <!-- ================= RIGHT PANEL: TOP-DOWN VIEW ================= -->
  <g transform="translate(348, 16)">
    <rect width="316" height="358" rx="10" fill="#0A3747" stroke="#1E566B" stroke-width="1" />
    <text x="158" y="26" fill="#F5D536" font-size="12" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">
      TOP-DOWN VIEW (LOOKING FROM ABOVE)
    </text>

    <!-- Nose tip at top -->
    <path d="M 148,54 Q 158,38 168,54" fill="#0F4659" stroke="#F5D536" stroke-width="2" />
    <text x="205" y="48" fill="#F5D536" font-size="9.5" font-weight="700" font-family="system-ui, sans-serif">
      ← Nose (Front)
    </text>

    <!-- Ears -->
    <path d="M 74,158 C 62,158 62,190 74,190" fill="none" stroke="#56AFCB" stroke-width="2" />
    <path d="M 242,158 C 254,158 254,190 242,190" fill="none" stroke="#56AFCB" stroke-width="2" />

    <!-- Top Scalp Oval -->
    <ellipse cx="158" cy="174" rx="84" ry="114" fill="#0F4659" stroke="#56AFCB" stroke-width="2.2" />

    <!-- Zone 1: Hairline -->
    <path
      d="M 94,116 Q 158,66 222,116 Q 194,130 158,110 Q 122,130 94,116 Z"
      fill="${o(n)?`rgba(86, 175, 203, 0.85)`:`rgba(103, 116, 124, 0.2)`}"
      stroke="${o(n)?`#F5D536`:`#4A6E82`}"
      stroke-width="2"
    />
    <text x="158" y="100" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">
      1. Hairline (${n.label})
    </text>

    <!-- Zone 2: Frontal -->
    <path
      d="M 98,122 Q 158,112 218,122 C 226,158 204,172 158,172 C 112,172 90,158 98,122 Z"
      fill="${o(r)?`rgba(140, 208, 229, 0.7)`:`rgba(103, 116, 124, 0.2)`}"
      stroke="${o(r)?`#8CD0E5`:`#4A6E82`}"
      stroke-width="2"
    />
    <text x="158" y="150" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">
      2. Frontal (${r.label})
    </text>

    <!-- Zone 3: Mid-Scalp -->
    <path
      d="M 104,178 C 124,174 192,174 212,178 C 218,214 200,228 158,228 C 116,228 98,214 104,178 Z"
      fill="${o(i)?`rgba(226, 190, 36, 0.65)`:`rgba(31, 168, 85, 0.22)`}"
      stroke="${o(i)?`#E2BE24`:`#1FA855`}"
      stroke-width="1.8"
      stroke-dasharray="${o(i)?`none`:`4,3`}"
    />
    <text x="158" y="206" fill="${o(i)?`#FFFFFF`:`#8CE9B0`}" font-size="10.5" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">
      3. Mid-Scalp (${o(i)?i.label:`✓ Healthy — 0 grafts`})
    </text>

    <!-- Zone 4: Crown -->
    <ellipse
      cx="158"
      cy="256"
      rx="46"
      ry="22"
      fill="${o(a)?`rgba(245, 213, 54, 0.7)`:`rgba(31, 168, 85, 0.22)`}"
      stroke="${o(a)?`#F5D536`:`#1FA855`}"
      stroke-width="1.8"
      stroke-dasharray="${o(a)?`none`:`4,3`}"
    />
    <text x="158" y="260" fill="${o(a)?`#FFFFFF`:`#8CE9B0`}" font-size="10.5" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">
      4. Crown (${o(a)?a.label:`✓ Healthy — 0 grafts`})
    </text>

    <text x="158" y="312" fill="#EBF5FA" font-size="11.5" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">
      Blue/Gold = Areas receiving new grafts
    </text>
    <text x="158" y="332" fill="#8CE9B0" font-size="10.5" text-anchor="middle" font-family="system-ui, sans-serif">
      Green = Naturally dense areas (untouched)
    </text>
  </g>
</svg>`}function w(e,t=480,n=420){try{if(typeof document>`u`||!e||!e.naturalWidth||!e.naturalHeight)return{scale:1,offsetX:0,offsetY:0,confidence:`default`};let r=document.createElement(`canvas`);r.width=120,r.height=120;let i=r.getContext(`2d`);if(!i)return{scale:1,offsetX:0,offsetY:0,confidence:`default`};let a=e.naturalWidth/e.naturalHeight,o=t/n,s=0,c=0,l=e.naturalWidth,u=e.naturalHeight;a>o?(l=e.naturalHeight*o,s=(e.naturalWidth-l)/2):(u=e.naturalWidth/o,c=(e.naturalHeight-u)/2),i.drawImage(e,s,c,l,u,0,0,120,120);let{data:d}=i.getImageData(0,0,120,120),f=(e,t,n)=>{let r=Math.max(e,t,n),i=Math.min(e,t,n);return e>80&&t>42&&n>28&&e>t&&t>n*.82&&e-i>15&&r-i<165},p=(e,t,n)=>.299*e+.587*t+.114*n<72,m=0,h=0,g=120,_=0;for(let e=26;e<102;e++)for(let t=18;t<102;t++){let n=(e*120+t)*4;f(d[n],d[n+1],d[n+2])&&(m+=t,h++,t<g&&(g=t),t>_&&(_=t))}if(h<50)return{scale:1,offsetX:0,offsetY:0,confidence:`default`};let v=Math.round(m/h),y=Math.max(24,_-g),b=Math.max(10,Math.floor(v-y*.3)),x=Math.min(110,Math.ceil(v+y*.3)),S=Math.max(1,x-b),C=-1;for(let e=62;e>=14;e--){let t=0,n=0;for(let r=b;r<x;r++){let i=(e*120+r)*4,a=d[i],o=d[i+1],s=d[i+2];p(a,o,s)?t++:f(a,o,s)&&n++}if(t/S>=.45&&n/S<=.35){C=e+2;break}}if(C===-1)for(let e=18;e<78;e++){let t=0;for(let n=b;n<x;n++){let r=(e*120+n)*4;f(d[r],d[r+1],d[r+2])&&t++}if(t/S>=.45){C=e+3;break}}if(C===-1)return{scale:1,offsetX:0,offsetY:0,confidence:`default`};let w=C/120,T=(v/120-.5)*t,E=(w-.424)*n,D=y/120,O=1;return D>.22&&D<.88&&(O=Math.min(1.22,Math.max(.82,+(D/.55).toFixed(2)))),{scale:O,offsetX:Math.round(Math.max(-85,Math.min(85,T))),offsetY:Math.round(Math.max(-85,Math.min(95,E))),confidence:`auto`,photoSummary:`Front portrait detected — hairline & temple zones mapped automatically.`}}catch{return{scale:1,offsetX:0,offsetY:0,confidence:`default`}}}var T=null,E=null,D=null;function O(){document.getElementById(`ai-preview-container`)&&(ee(),M(),P(),j())}function k(e){D=e;let t=document.getElementById(`preview-slider-before-img`);t&&e&&(t.src=e)}function A(e,t,n){T=e,E=n;let r=document.getElementById(`preview-locked-card`),i=document.getElementById(`preview-unlocked-card`),a=document.getElementById(`preview-email-input`),o=document.getElementById(`preview-email-display`);r&&(r.style.display=`none`),i&&(i.style.display=`block`),a&&(a.value=n),o&&(o.textContent=n),i?.scrollIntoView({behavior:`smooth`,block:`start`})}function j(){let{isMock:e}=u(),t=document.getElementById(`preview-mock-hint`);t&&e&&(t.style.display=`block`)}function ee(){let e=document.getElementById(`preview-send-code-btn`),t=document.getElementById(`preview-step1-status`),n=document.getElementById(`preview-step-request-code`),r=document.getElementById(`preview-step-verify-code`),i=document.getElementById(`preview-code-input`);e&&e.addEventListener(`click`,async()=>{if(!T){alert(`Please complete the hair analysis first.`);return}let a=document.getElementById(`preview-email-input`)?.value.trim()||E||``;if(!a||!a.includes(`@`))t&&(t.textContent=`Please enter a valid email address.`,t.className=`preview-status-msg preview-status-error`,t.style.display=`block`);else{e.disabled=!0,e.textContent=`Sending 6-Digit Code…`,t&&(t.style.display=`none`);try{let e=await g({analysisId:T.analysisId,email:a,deviceId:l()});t&&(t.textContent=`✓ ${e.message||`Code sent! Check your inbox.`}`,t.className=`preview-status-msg preview-status-success`,t.style.display=`block`),setTimeout(()=>{if(n&&(n.style.display=`none`),r&&(r.style.display=`block`),i){i.focus();let{isMock:e}=u();e&&(i.value=`123456`)}},600)}catch(e){let n=e,r=n.message||`Failed to send verification code.`;n.code===`code_resend_limited`?r=n.message:n.code===`preview_limit_reached`?r=`You have already used your 1 free AI simulation limit. Please contact our surgical team directly for doctor evaluation.`:n.status===503&&(r=n.message||`Email verification is temporarily unavailable. Please contact our patient desk.`),t&&(t.textContent=r,t.className=`preview-status-msg preview-status-error`,t.style.display=`block`)}finally{e.disabled=!1,e.textContent=`Send Verification Code →`}}})}function M(){let e=document.getElementById(`preview-generate-btn`),t=document.getElementById(`preview-code-input`),n=document.getElementById(`preview-step2-status`),r=document.getElementById(`preview-step-verify-code`),i=document.getElementById(`preview-loading-card`),a=document.getElementById(`preview-result-card`);e&&t&&e.addEventListener(`click`,async()=>{if(!T){alert(`No active analysis found.`);return}let o=t.value.trim();if(!/^\d{6}$/.test(o)){n&&(n.textContent=`Please enter the complete 6-digit verification code.`,n.className=`preview-status-msg preview-status-error`,n.style.display=`block`);return}let s=document.getElementById(`preview-email-input`)?.value.trim()||E||``;e.disabled=!0,n&&(n.style.display=`none`),r&&(r.style.display=`none`),i&&(i.style.display=`block`);try{let e=await _({analysisId:T.analysisId,code:o,email:s,deviceId:l()});i&&(i.style.display=`none`),a&&(a.style.display=`block`),N(e.previewUrl),a?.scrollIntoView({behavior:`smooth`,block:`start`})}catch(t){i&&(i.style.display=`none`),r&&(r.style.display=`block`),e.disabled=!1;let a=t,o=a.message||`Failed to generate AI simulation.`;if(a.code===`verification_attempts_exceeded`||a.code===`code_expired`){o=a.message;let e=document.getElementById(`preview-step-request-code`);e&&(e.style.display=`block`),r&&(r.style.display=`none`)}else a.code===`preview_limit_reached`?o=`Lifetime limit reached: 1 free preview per patient. Please message our surgical team directly.`:a.code===`daily_preview_cap_reached`?o=`Daily simulation capacity reached. Please try tomorrow or contact our patient desk.`:a.status===503?o=a.message||`AI simulation is temporarily unavailable. Please try later.`:(a.code===`invalid_verification_code`||a.status===403)&&(o=`Incorrect 6-digit verification code. Please check your email or enter 123456 in demo mode.`);n&&(n.textContent=o,n.className=`preview-status-msg preview-status-error`,n.style.display=`block`)}})}function N(e){let t=document.getElementById(`preview-slider-after-img`),n=document.getElementById(`preview-slider-before-img`),r=document.getElementById(`preview-doctor-cta-btn`),a=D||`/assets/cases/clinical-03-before.jpg`;if(t&&(t.src=s(e)),n&&(n.src=s(a)),r&&T){let e=v(T);r.onclick=()=>{i(e)}}F()}function P(){let e=document.getElementById(`preview-ba-range`),t=document.getElementById(`preview-ba-before-wrap`),n=document.getElementById(`preview-ba-handle`);if(!e||!t||!n)return;let r=e=>{t.style.width=`${e}%`,n.style.left=`${e}%`};e.addEventListener(`input`,e=>{let t=e.target.value;r(t)}),window.addEventListener(`resize`,F)}function F(){let e=document.getElementById(`preview-ba-container`),t=document.getElementById(`preview-slider-before-img`);if(e&&t){let n=e.offsetWidth;n>0&&(t.style.width=`${n}px`)}}var I=null,L={},R={},z={scale:1,offsetY:0,offsetX:0,visible:!0};function B(){document.getElementById(`ai-analysis-app`)&&(H(),G(),te(),Q(),O(),V())}function V(){try{let e=new URLSearchParams(window.location.search),t=e.get(`mock`),n=e.get(`mockError`),r=document.getElementById(`ai-mock-badge`);r&&(t===`1`||n)&&(r.style.display=`inline-flex`)}catch{}}function H(){[`front`,`top`,`crown`].forEach(e=>{let t=document.getElementById(`slot-input-${e}`),n=document.getElementById(`slot-camera-${e}`),r=document.getElementById(`slot-card-${e}`),i=document.getElementById(`slot-preview-${e}`);document.getElementById(`slot-img-${e}`);let a=document.getElementById(`slot-remove-${e}`),o=document.getElementById(`slot-placeholder-${e}`);t&&r&&(r.addEventListener(`click`,e=>{let r=e.target;r.closest(`.slot-remove-btn, input`)||(r.closest(`[data-photo-source]`)?.dataset.photoSource===`camera`&&n?n.click():t.click())}),[t,n].forEach(t=>{t?.addEventListener(`change`,async()=>{t.files?.[0]&&await U(e,t.files[0]),t.value=``})}),r.addEventListener(`dragover`,e=>{e.preventDefault(),r.classList.add(`slot-card-dragover`)}),r.addEventListener(`dragleave`,()=>{r.classList.remove(`slot-card-dragover`)}),r.addEventListener(`drop`,async t=>{t.preventDefault(),r.classList.remove(`slot-card-dragover`),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files[0]&&await U(e,t.dataTransfer.files[0])}),a&&a.addEventListener(`click`,a=>{a.stopPropagation(),delete L[e],R[e]&&(URL.revokeObjectURL(R[e]),delete R[e]),t&&(t.value=``),n&&(n.value=``),i&&(i.style.display=`none`),o&&(o.style.display=`flex`),r.classList.remove(`slot-has-photo`),W()}))})}async function U(e,t){if(!t.type.startsWith(`image/`)){alert(`Please select an image file (JPEG, PNG, or WebP).`);return}L[e]=t,R[e]&&URL.revokeObjectURL(R[e]);let n=URL.createObjectURL(t);R[e]=n;let r=document.getElementById(`slot-card-${e}`),i=document.getElementById(`slot-preview-${e}`),a=document.getElementById(`slot-img-${e}`),o=document.getElementById(`slot-placeholder-${e}`);a&&(a.src=n),o&&(o.style.display=`none`),i&&(i.style.display=`block`),r&&r.classList.add(`slot-has-photo`),W()}function W(){let e=document.getElementById(`ai-consent-checkbox`),t=document.getElementById(`ai-submit-btn`),n=document.getElementById(`ai-upload-error`),r=!!L.front,i=!!(e&&e.checked);return t&&(t.disabled=!r||!i),n&&(!r&&L.top?(n.textContent=`The Front photo is required so our AI can accurately locate your hairline.`,n.style.display=`block`):n.style.display=`none`),r&&i}function G(){let e=document.getElementById(`ai-upload-form`),t=document.getElementById(`ai-consent-checkbox`);t&&t.addEventListener(`change`,W),e&&e.addEventListener(`submit`,async e=>{e.preventDefault(),L.front?!t||!t.checked?alert(`Please accept the Health Data Processing Consent to continue.`):await K():alert(`Please upload at least your Front hairline photo to proceed.`)})}async function K(){let e=document.getElementById(`ai-upload-section`),r=document.getElementById(`ai-loading-section`),i=document.getElementById(`ai-results-section`),a=document.getElementById(`ai-error-section`);t(`ai_analysis_start`,{hasFront:!!L.front,hasTop:!!L.top,hasCrown:!!L.crown}),e&&(e.style.display=`none`),i&&(i.style.display=`none`),a&&(a.style.display=`none`),r&&(r.style.display=`block`),q();try{let e=await f(L.front,1600,.85),a;L.top&&(a=await f(L.top,1600,.85));let o;L.crown&&(o=await f(L.crown,1600,.85));let s=new FormData;s.append(`front`,e,`front.jpg`),a&&s.append(`top`,a,`top.jpg`),o&&s.append(`crown`,o,`crown.jpg`),s.append(`consent`,`true`),s.append(`deviceId`,l()),s.append(`turnstileToken`,await n(`ai-turnstile-container`));let c=await p(s);I=c,t(`ai_analysis_complete`,{norwoodStage:c.norwoodStage,totalGraftsMin:c.totalGrafts[0],totalGraftsMax:c.totalGrafts[1],package:c.recommendedPackage,confidence:c.confidence}),J(c),r&&(r.style.display=`none`),i&&(i.style.display=`block`,i.scrollIntoView({behavior:`smooth`,block:`start`}))}catch(e){console.error(`[Lemon AI] Analysis error:`,e),r&&(r.style.display=`none`),ne(e)}}function q(){let e=[`Scanning photo resolution & facial landmarks…`,`Measuring hairline depth & temporal recession…`,`Mapping Norwood classification & anatomical graft zones…`,`Formulating personalized 4-night all-inclusive surgical plan…`],t=document.getElementById(`ai-loading-step-text`),n=document.getElementById(`ai-loading-progress-bar`),r=0;t&&(t.textContent=e[0]),n&&(n.style.width=`20%`);let i=setInterval(()=>{r++,r<e.length?(t&&(t.textContent=e[r]),n&&(n.style.width=`${Math.min(95,20+r*25)}%`)):clearInterval(i)},900)}function J(t){let n=document.getElementById(`ai-result-total-grafts`),r=document.getElementById(`ai-result-norwood`),i=document.getElementById(`ai-result-notes`),s=document.getElementById(`ai-result-confidence-notice`),c=document.getElementById(`ai-result-disclaimer`);n&&(n.textContent=`${t.totalGrafts[0].toLocaleString()} – ${t.totalGrafts[1].toLocaleString()} Grafts`),r&&(r.textContent=t.norwoodLabel||`Norwood ${t.norwoodStage}`),i&&(i.textContent=t.notes||`Graft estimate calculated across 4 anatomical scalp zones.`),c&&(c.textContent=t.disclaimer||`This is an AI estimate, not a medical diagnosis. A licensed surgeon will confirm your final plan.`),s&&(t.confidence===`low`?(s.textContent=`Photo quality was limited — our surgical team will confirm your exact count during doctor evaluation.`,s.style.display=`block`):s.style.display=`none`);let l=document.getElementById(`ai-recommended-package-card`),u=document.getElementById(`ai-pkg-title`),d=document.getElementById(`ai-pkg-price`),f=document.getElementById(`ai-pkg-desc`),p=e.pricing.currencySymbol||`$`,m=`${p}${e.pricing.complete.toLocaleString()}`,g=`${p}${e.pricing.max.toLocaleString()}`;t.recommendedPackage===`max`?(u&&(u.textContent=`Complete Max Package`),d&&(d.textContent=`${g} all-inclusive`),f&&(f.textContent=`Recommended for ${e.pricing.graftThreshold.toLocaleString()}+ grafts / Norwood 5–6 extensive restoration. Includes 2 procedure days if clinically advised.`),l&&l.classList.add(`pkg-max-featured`)):(u&&(u.textContent=`Complete Package`),d&&(d.textContent=`${m} all-inclusive`),f&&(f.textContent=`Recommended for up to ${e.pricing.graftThreshold.toLocaleString()} grafts. Perfectly covers hairline restoration, temples, and crown density.`),l&&l.classList.remove(`pkg-max-featured`)),Y(t),Z(t);let _=h(t,`Patient`),v=document.getElementById(`ai-direct-wa-btn`),y=document.getElementById(`ai-direct-imsg-btn`);v&&(v.href=a(_),v.setAttribute(`data-direct-msg`,_)),y&&(y.href=o(_),y.setAttribute(`data-direct-msg`,_))}function Y(e){let t=document.getElementById(`ai-overlay-user-photo`),n=document.getElementById(`ai-overlay-svg-container`),r=document.getElementById(`ai-anatomical-diagram-stage`),i=x(e.zones,e.totalGrafts,e.norwoodStage);n&&(n.innerHTML=S(i)),r&&(r.innerHTML=C(i));let a=R.front||R.top||`/assets/treatments/fue-hero.jpg`;if(t){let e=()=>{X(t)};t.onload=e,t.src=a,t.complete&&t.naturalWidth>0?e():$()}else $();k(a)}function X(e){let t=e||document.getElementById(`ai-overlay-user-photo`),n=document.getElementById(`ai-control-scale-slider`),r=document.getElementById(`ai-alignment-status-badge`);if(!t)return;let i=w(t,480,440);z.scale=i.scale,z.offsetX=i.offsetX,z.offsetY=i.offsetY,z.visible=!0,n&&(n.value=String(z.scale)),r&&(r.textContent=i.confidence===`auto`?`✓ Auto-aligned to your forehead`:`✓ Aligned to forehead guide`),$()}function Z(e){let t=document.getElementById(`ai-zones-breakdown-grid`);t&&(t.innerHTML=``,e.zones.forEach(e=>{let n=document.createElement(`div`);n.className=`zone-detail-card`;let r=e.grafts[0]===0&&e.grafts[1]===0,i=r?`No grafts required`:`${e.grafts[0].toLocaleString()} – ${e.grafts[1].toLocaleString()} grafts`,a=`1. Hairline & Temples`,o=r?`Natural hairline intact — untouched`:`Frames your forehead & fills left/right temple corners`;e.id===`frontal`&&(a=`2. Frontal Forelock`,o=r?`Good frontal density — untouched`:`Dense packing right behind the new hairline`),e.id===`midscalp`&&(a=`3. Mid-Scalp Area`,o=r?`✓ Healthy natural density — untouched`:`Restores coverage across the upper-middle scalp`),e.id===`crown`&&(a=`4. Crown / Vertex`,o=r?`✓ Healthy natural density — untouched`:`Rebuilds natural swirl density at the back crown`),n.innerHTML=`
      <div class="zone-card-head">
        <span class="zone-chip zone-chip-${e.id}"></span>
        <span class="zone-card-title">${a}</span>
      </div>
      <div class="zone-card-grafts ${r?`zone-zero`:``}">${i}</div>
      <div class="zone-card-subdesc" style="font-size: 11.5px; color: #5B6B73; margin-top: 4px; line-height: 1.35;">${o}</div>
    `,t.appendChild(n)}))}function Q(){let e=document.getElementById(`ai-control-toggle`),t=document.getElementById(`ai-control-auto-align`),n=document.getElementById(`ai-control-scale-up`),r=document.getElementById(`ai-control-scale-down`),i=document.getElementById(`ai-control-scale-slider`),a=document.getElementById(`ai-control-move-left`),o=document.getElementById(`ai-control-move-right`),s=document.getElementById(`ai-control-move-up`),c=document.getElementById(`ai-control-move-down`),l=document.getElementById(`ai-control-reset`),u=document.getElementById(`ai-view-tab-photo`),d=document.getElementById(`ai-view-tab-diagram`),f=document.getElementById(`ai-photo-stage`),p=document.getElementById(`ai-anatomical-diagram-stage`),m=document.getElementById(`ai-viewer-toolbar`);if(u&&d&&f&&p&&(u.addEventListener(`click`,()=>{u.classList.add(`active`),u.setAttribute(`aria-selected`,`true`),d.classList.remove(`active`),d.setAttribute(`aria-selected`,`false`),f.style.display=`flex`,p.style.display=`none`,m&&(m.style.display=`flex`)}),d.addEventListener(`click`,()=>{d.classList.add(`active`),d.setAttribute(`aria-selected`,`true`),u.classList.remove(`active`),u.setAttribute(`aria-selected`,`false`),f.style.display=`none`,p.style.display=`flex`,m&&(m.style.display=`none`)})),e&&e.addEventListener(`click`,()=>{z.visible=!z.visible,e.textContent=z.visible?`Hide Overlay`:`Show Overlay`,e.classList.toggle(`btn-active`,z.visible),$()}),t&&t.addEventListener(`click`,()=>{X()}),n&&n.addEventListener(`click`,()=>{z.scale=Math.min(1.4,+(z.scale+.05).toFixed(2)),i&&(i.value=String(z.scale)),$()}),r&&r.addEventListener(`click`,()=>{z.scale=Math.max(.7,+(z.scale-.05).toFixed(2)),i&&(i.value=String(z.scale)),$()}),i&&i.addEventListener(`input`,()=>{z.scale=parseFloat(i.value),$()}),a&&a.addEventListener(`click`,()=>{z.offsetX-=10,$()}),o&&o.addEventListener(`click`,()=>{z.offsetX+=10,$()}),s&&s.addEventListener(`click`,()=>{z.offsetY-=10,$()}),c&&c.addEventListener(`click`,()=>{z.offsetY+=10,$()}),l&&l.addEventListener(`click`,()=>{z={scale:1,offsetY:0,offsetX:0,visible:!0},i&&(i.value=`1`),e&&(e.textContent=`Hide Overlay`,e.classList.add(`btn-active`)),$()}),f){let e=!1,t=0,n=0,r=0,i=0;f.addEventListener(`pointerdown`,a=>{if(z.visible){e=!0,t=a.clientX,n=a.clientY,r=z.offsetX,i=z.offsetY;try{f.setPointerCapture(a.pointerId)}catch{}}}),f.addEventListener(`pointermove`,a=>{if(!e)return;let o=a.clientX-t,s=a.clientY-n;z.offsetX=Math.round(Math.max(-140,Math.min(140,r+o))),z.offsetY=Math.round(Math.max(-140,Math.min(140,i+s))),$()});let a=()=>{e=!1};f.addEventListener(`pointerup`,a),f.addEventListener(`pointercancel`,a)}}function $(){let e=document.querySelector(`#ai-overlay-svg-container svg`);e&&(z.visible?(e.style.display=`block`,e.style.transform=`translate(${z.offsetX}px, ${z.offsetY}px) scale(${z.scale})`,e.style.transformOrigin=`50% 30%`,e.style.transition=`transform 0.15s ease-out`):e.style.display=`none`)}function te(){let e=document.getElementById(`ai-claim-form`),t=document.getElementById(`ai-claim-status`);e&&e.addEventListener(`submit`,async e=>{if(e.preventDefault(),!I){alert(`No active analysis found. Please run the analysis first.`);return}let a=document.getElementById(`claim-name`),o=document.getElementById(`claim-email`),s=document.getElementById(`claim-phone`),c=document.getElementById(`claim-channel`),u=document.getElementById(`ai-claim-submit-btn`),d=a?.value.trim()||``,f=o?.value.trim()||``,p=s?.value.trim()||``,g=c?.value||`whatsapp`;if(!d||!f||!p)t&&(t.textContent=`Please fill in your name, email, and phone number.`,t.className=`claim-status-msg claim-status-error`,t.style.display=`block`);else{u&&(u.disabled=!0,u.textContent=`Connecting with Medical Team…`);try{let e=await m(I.analysisId,{name:d,email:f,phone:p,preferredChannel:g,deviceId:l(),consent:!0,turnstileToken:await n(`ai-claim-turnstile-container`)}),a=h(I,d);t&&(t.textContent=`✓ Plan registered! Opening direct medical team chat…`,t.className=`claim-status-msg claim-status-success`,t.style.display=`block`),A(I,e.leadId||`lead_claimed`,f),setTimeout(()=>{i(a),r(a,g)},500)}catch(e){console.warn(`[Lemon AI] Claim fallback:`,e),t&&(t.textContent=`Your online request could not be saved. Please send your plan directly to our patient desk.`,t.className=`claim-status-msg claim-status-error`,t.style.display=`block`);let n=h(I,d);i(n),r(n,g)}finally{u&&(u.disabled=!1,u.textContent=`Open Surgeon Chat`)}}})}function ne(e){let t=document.getElementById(`ai-upload-section`),n=document.getElementById(`ai-error-section`),r=document.getElementById(`ai-error-title`),a=document.getElementById(`ai-error-desc`),o=document.getElementById(`ai-error-tips`),s=document.getElementById(`ai-error-chooser-btn`),c=document.getElementById(`ai-error-retry-btn`);if(!n)return;let l=e.status||0,u=e.code||``;o&&(o.style.display=`none`),s&&(s.style.display=`none`),c&&(c.style.display=`inline-flex`),l===422||u===`not_a_scalp_photo`?(r&&(r.textContent=`We Couldn't See Your Scalp Clearly`),a&&(a.textContent=`Our AI requires a clear, well-lit photo showing your front hairline and forehead. Shadows, hats, extreme angles, or blurry photos make accurate estimation difficult.`),o&&(o.style.display=`block`)):l===429||u===`rate_limited`?(r&&(r.textContent=`Daily Limit Reached`),a&&(a.textContent=`You have reached the maximum of 3 free AI analyses for today. To protect server capacity, please contact our medical team directly — a doctor will review your photos for free!`),s&&(s.style.display=`inline-flex`)):l===503||u===`daily_budget_reached`?(r&&(r.textContent=`Our AI is Resting`),a&&(a.textContent=`Our AI system has reached its daily evaluation ceiling. You don't have to wait: send your photos directly to our surgical team on WhatsApp or iMessage for an immediate expert estimate.`),s&&(s.style.display=`inline-flex`)):(r&&(r.textContent=`Analysis Service Temporarily Unavailable`),a&&(a.textContent=e.message||`A connection error occurred. You can retry with demo mode (?mock=1) or message our doctors directly.`),s&&(s.style.display=`inline-flex`)),n.style.display=`block`,n.scrollIntoView({behavior:`smooth`,block:`start`}),c&&(c.onclick=()=>{n.style.display=`none`,t&&(t.style.display=`block`),t?.scrollIntoView({behavior:`smooth`,block:`start`})}),s&&(s.onclick=()=>{i(`Hello Lemon Clinic! I tried the AI hair analysis and would like a doctor to review my photos directly.`)})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,B):B();