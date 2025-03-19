import{f as y}from"./fieldManager-DGcgo8qz.js";function N(n,a,r=!1,i=!0){var c;const t=document.createElement("div");t.className="article-saver-dialog",t.innerHTML=`
    <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: ${a?"1rem":"0"}">${n}</h2>
    ${a?`<p style="margin-bottom: ${i?"1rem":"0"}">${r?a:a.replace(/[<>]/g,"")}</p>`:""}
    ${i?`
      <button
        class="article-saver-button primary"
        style="text-align: center;"
      >
        OK
      </button>
    `:""}
  `;const e=document.createElement("div");e.className="article-saver-overlay",document.body.appendChild(e),document.body.appendChild(t),t.offsetHeight,e.offsetHeight,t.classList.add("show"),e.classList.add("show");function l(){t.classList.remove("show"),e.classList.remove("show"),setTimeout(()=>{t.remove(),e.remove()},300)}i&&((c=t.querySelector("button"))==null||c.addEventListener("click",l),e.addEventListener("click",l))}function H(){const n=document.createElement("div");return n.className="article-saver-overlay",n}function R(n,a){document.body.appendChild(a),document.body.appendChild(n),n.offsetHeight,a.offsetHeight,n.classList.add("show"),a.classList.add("show")}function k(n,a){n.classList.remove("show"),a.classList.remove("show"),setTimeout(()=>{n.remove(),a.remove()},300)}function f(n,a,r,i,t){return`
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
      <div>
        <h2 style="font-size: 1.5rem; font-weight: bold;">Review Extracted Information</h2>
        <div class="article-saver-list-selector">
          <button class="article-saver-list-button">
            <span>Saving to list: <span style="font-weight: 500;">${a.name}</span></span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="article-saver-list-menu" style="display: none;">
            ${r.map(e=>`
              <div class="article-saver-list-item ${e.id===a.id?"selected":""}" data-board-id="${e.id}">
                <span>${e.name}</span>
                ${e.id===a.id?`
                  <div class="list-item-indicator"></div>
                `:""}
              </div>
            `).join("")}
            <div class="article-saver-list-item add-new">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>New List</span>
            </div>
          </div>
        </div>
      </div>
      <button class="article-saver-close-button" style="padding: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div style="max-height: 60vh; overflow-y: auto; padding-right: 1rem;">
      ${n?`
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4rem 0; gap: 1.5rem;">
          <div class="loading-dots" style="display: flex; gap: 0.5rem;">
            ${Array(8).fill(0).map((e,l)=>`
              <div style="
                width: 8px;
                height: 8px;
                background-color: #2563eb;
                border-radius: 50%;
                animation: loadingDot 1.5s ease-in-out infinite;
                animation-delay: ${l*.15}s;
                opacity: 0;
              "></div>
            `).join("")}
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <p style="color: #2563eb; font-weight: 500; font-size: 1.125rem;">Analyzing Content</p>
            <p style="color: #6B7280; font-size: 0.875rem;">Using AI to extract relevant information...</p>
          </div>
        </div>
        <style>
          @keyframes loadingDot {
            0%, 100% { 
              transform: scale(0.3);
              opacity: 0.2;
            }
            50% { 
              transform: scale(1);
              opacity: 1;
            }
          }
        </style>
      `:`
        ${i.map(e=>{const l=y.getFieldName(e.id)||e.name;return`
            <div class="article-saver-field" data-field-id="${e.id}" data-field-name="${l}">
              <div class="article-saver-field-header">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <label class="article-saver-field-label">${l}</label>
                  ${e.isDefault?"":`
                    <div class="article-saver-field-actions" style="display: flex; gap: 0.5rem;">
                      <button class="article-saver-field-action edit-field-name" title="Edit field name" style="color: #6B7280;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                      </button>
                      <button class="article-saver-field-action remove-field" title="Remove field" style="color: #6B7280;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  `}
                </div>
              </div>
              <div class="article-saver-field-content">
                ${e.name==="Picture"?t[e.id]?`<img src="${t[e.id]}" alt="Product" style="width: 8rem; height: 8rem; object-fit: cover; border-radius: 0.375rem;">`:`<div style="color: #d97706; display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span style="font-size: 0.875rem;">No image found</span>
                      </div>`:e.name==="Link"?`<div class="article-saver-field-wrapper">
                        <a href="${t[e.id]}" class="article-saver-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                      </div>`:`<div class="article-saver-field-wrapper">
                        <div class="article-saver-field-value" data-field-id="${e.id}">
                          ${t[e.id]||'<span style="color: #9ca3af;">No value extracted - click to add</span>'}
                        </div>
                      </div>`}
              </div>
            </div>
          `}).join("")}
        <button class="article-saver-add-field">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Add Field</span>
        </button>
      `}
    </div>
    <div class="article-saver-buttons" style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <label class="article-saver-switch" style="position: relative; display: inline-block; width: 36px; height: 20px;">
          <input type="checkbox" class="review-toggle" style="position: absolute; opacity: 0; width: 100%; height: 100%; z-index: 1; cursor: pointer;">
          <span style="position: absolute; cursor: pointer; inset: 0; background-color: #e5e7eb; transition: .4s; border-radius: 34px;">
            <span style="position: absolute; content: ''; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%;"></span>
          </span>
        </label>
        <span style="color: #374151; font-size: 0.875rem;">Show review screen before saving</span>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="article-saver-button secondary refresh-extraction" ${n?"disabled":""}>
          ${n?"Re-extracting...":"Re-extract Information"}
        </button>
        <button class="article-saver-button primary">
          Save Item
        </button>
      </div>
    </div>
  `}function z(n,a,r){const i=document.createElement("input");i.type="text",i.value=r[n]||"",i.className="article-saver-field-input",a.replaceWith(i),i.focus();const t=()=>{r[n]=i.value;const e=document.createElement("div");e.className="article-saver-field-value",e.setAttribute("data-field-id",n),e.textContent=i.value||"No value extracted - click to add",e.addEventListener("click",()=>z(n,e,r)),i.replaceWith(e)};i.addEventListener("blur",t),i.addEventListener("keydown",e=>{e.key==="Enter"?t():e.key==="Escape"&&i.replaceWith(a)})}function F(n,a,r){const i=document.createElement("input");i.type="text",i.value=a.textContent||"",i.className="article-saver-field-input",a.replaceWith(i),i.focus();const t=()=>{const e=i.value.trim();if(e){r=r.map(p=>p.id===n?{...p,name:e}:p),y.updateFieldName(n,e);const l=document.querySelector(`[data-field-id="${n}"]`);l&&l.setAttribute("data-field-name",e);const c=document.createElement("label");c.className="article-saver-field-label",c.textContent=e,i.replaceWith(c)}};i.addEventListener("blur",t),i.addEventListener("keydown",e=>{if(e.key==="Enter")t();else if(e.key==="Escape"){const l=document.createElement("label");l.className="article-saver-field-label",l.textContent=a.textContent||"",i.replaceWith(l)}})}let u=[],v={},w="",E=null,L=null;function $(){E&&L&&(k(E,L),E=null,L=null)}function M(n){const a=document.createElement("div");a.className="article-saver-new-list-dialog",a.innerHTML=`
    <h2>Create New List</h2>
    <input type="text" placeholder="Enter list name" class="new-list-input" />
    <div class="buttons">
      <button class="article-saver-button secondary cancel-button">Cancel</button>
      <button class="article-saver-button primary create-button">Create List</button>
    </div>
  `;const r=H();document.body.appendChild(r),document.body.appendChild(a);const i=a.querySelector(".new-list-input"),t=a.querySelector(".cancel-button"),e=a.querySelector(".create-button");i.focus();function l(){const c=i.value.trim();c&&(n(c),k(a,r))}i.addEventListener("keydown",c=>{c.key==="Enter"?l():c.key==="Escape"&&k(a,r)}),t==null||t.addEventListener("click",()=>k(a,r)),e==null||e.addEventListener("click",l)}function j({fields:n,extractedData:a,boards:r,currentBoard:i}){$(),y.initializeFromFields(n),u=y.updateFields([...n]),v={...a},w=i.id;const t=document.createElement("div");t.className="article-saver-dialog",t.innerHTML=f(!1,i,r,u,v);const e=H();R(t,e),E=t,L=e;const l=p=>{const h=t.querySelector(".article-saver-list-button"),b=t.querySelector(".article-saver-list-menu");h&&!h.contains(p.target)&&(b.style.display="none")};document.addEventListener("click",l);function c(){const p=t.querySelector(".review-toggle");p&&(p.checked=!0,h(p),chrome.storage.local.get(["showReview"],s=>{s.showReview===!1&&(p.checked=!1,h(p))}),p.addEventListener("change",()=>{chrome.storage.local.set({showReview:p.checked}),h(p)}));function h(s){const o=s.nextElementSibling;if(o){o.style.backgroundColor=s.checked?"#2563eb":"#e5e7eb";const d=o.querySelector("span");d&&(d.style.transform=s.checked?"translateX(16px)":"translateX(0)")}}const b=t.querySelector(".article-saver-add-field");b&&b.addEventListener("click",()=>{const s={id:Date.now().toString(),name:"New Field",isDefault:!1};u.push(s),v[s.id]="",y.updateFieldName(s.id,s.name),t.innerHTML=f(!1,i,r,u,v),c();const o=t.querySelector(`[data-field-id="${s.id}"] .article-saver-field-label`);o&&F(s.id,o,u)}),t.querySelectorAll(".article-saver-field-value").forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-field-id");o&&z(o,s,v)})}),t.querySelectorAll(".edit-field-name").forEach(s=>{s.addEventListener("click",o=>{const d=o.target.closest(".article-saver-field"),m=d==null?void 0:d.getAttribute("data-field-id");if(!m)return;const x=d==null?void 0:d.querySelector(".article-saver-field-label");x&&F(m,x,u)})}),t.querySelectorAll(".remove-field").forEach(s=>{s.addEventListener("click",o=>{const d=o.target.closest(".article-saver-field"),m=d==null?void 0:d.getAttribute("data-field-id");m&&(u=u.filter(x=>x.id!==m),delete v[m],y.updateFieldName(m,""),t.innerHTML=f(!1,i,r,u,v),c())})});const S=t.querySelector(".article-saver-list-button"),g=t.querySelector(".article-saver-list-menu");S==null||S.addEventListener("click",s=>{s.stopPropagation(),g.style.display=g.style.display==="none"?"block":"none"}),t.querySelectorAll(".article-saver-list-item").forEach(s=>{s.classList.contains("add-new")||s.addEventListener("click",()=>{const o=s.dataset.boardId;if(o){w=o;const d=r.find(m=>m.id===o);d&&(i=d,t.innerHTML=f(!1,d,r,u,v),c())}g.style.display="none"})});const C=t.querySelector(".article-saver-list-item.add-new");C==null||C.addEventListener("click",()=>{g.style.display="none",M(s=>{const o={id:Date.now().toString(),name:s,fields:[{id:"picture",name:"Picture",isDefault:!0},{id:"link",name:"Link",isDefault:!0},{id:"name",name:"Name",isDefault:!0},{id:"price",name:"Price",isDefault:!1}],items:[]};r.push(o),w=o.id,i=o,chrome.storage.local.set({boards:r,currentBoardId:o.id},()=>{t.innerHTML=f(!1,o,r,u,v),c()})})});const A=t.querySelector(".article-saver-button.primary");A&&A.addEventListener("click",()=>{chrome.storage.local.get(["showReview"],s=>{chrome.runtime.sendMessage({type:"SAVE_ITEM",payload:{fields:v,boardId:w,updatedFields:u,fieldNames:y.getFieldNameEntries()}},o=>{(o==null?void 0:o.status)==="success"&&(document.removeEventListener("click",l),$(),chrome.storage.local.set({showReview:s.showReview}))})})});const T=t.querySelector(".article-saver-button.refresh-extraction");T&&T.addEventListener("click",()=>{t.innerHTML=f(!0,i,r,u,v),c();const s=y.updateFields(u);chrome.runtime.sendMessage({type:"REFRESH_EXTRACTION",payload:{fields:s,boards:r,currentBoard:i}});const o=d=>{d.type==="SHOW_EXTRACTED_DATA"&&(chrome.runtime.onMessage.removeListener(o),v=d.payload.extractedData,t.innerHTML=f(!1,i,r,u,v),c())};chrome.runtime.onMessage.addListener(o)});const q=t.querySelector(".article-saver-close-button");q&&q.addEventListener("click",()=>{document.removeEventListener("click",l),$()})}return c(),{dialog:t,overlay:e,setLoading:p=>{t.innerHTML=f(p,i,r,u,v),c()}}}const D=document.createElement("style");D.textContent=`
  .article-saver-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 999999;
    max-width: 90%;
    width: 800px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    cursor: default;
  }

  .article-saver-dialog.show {
    opacity: 1;
  }

  .article-saver-success-toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10B981;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999999;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease-in-out;
  }

  .article-saver-success-toast.show {
    opacity: 1;
    transform: translateY(0);
  }

  .article-saver-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999998;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .article-saver-overlay.show {
    opacity: 1;
  }

  /* List selector styles */
  .article-saver-list-selector {
    position: relative;
    margin-top: 8px;
    z-index: 10;
  }

  .article-saver-list-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    color: #374151;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    width: fit-content;
  }

  .article-saver-list-button:hover {
    background: #e5e7eb;
  }

  .article-saver-list-menu {
    position: absolute;
    left: 0;
    top: calc(100% + 4px);
    width: 240px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    z-index: 50;
    overflow: hidden;
  }

  .article-saver-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    color: #374151;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
    border-bottom: 1px solid #f3f4f6;
  }

  .article-saver-list-item:last-child {
    border-bottom: none;
  }

  .article-saver-list-item:hover {
    background: #f3f4f6;
  }

  .article-saver-list-item.selected {
    background: #eff6ff;
    color: #2563eb;
    font-weight: 500;
  }

  .article-saver-list-item.selected .list-item-indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: currentColor;
  }

  .article-saver-list-item.add-new {
    color: #2563eb;
    border-top: 1px solid #e5e7eb;
    margin-top: 4px;
    padding: 12px 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .article-saver-list-item.add-new:hover {
    background: #eff6ff;
  }

  /* New list dialog */
  .article-saver-new-list-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 1000000;
    width: 400px;
  }

  .article-saver-new-list-dialog h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
  }

  .article-saver-new-list-dialog .new-list-input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  .article-saver-new-list-dialog .new-list-input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  .article-saver-new-list-dialog .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  /* Field styles */
  .article-saver-field {
    margin-bottom: 1rem;
  }

  .article-saver-field-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .article-saver-field-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }

  .article-saver-field-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .article-saver-field-value {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    background: #f9fafb;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .article-saver-field-value:hover {
    background: #f3f4f6;
  }

  .article-saver-field-action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: #dc2626;
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  .article-saver-field-action:hover {
    opacity: 1;
  }

  .article-saver-field-input {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #3b82f6;
    border-radius: 0.375rem;
    outline: none;
  }

  .article-saver-field-input:focus {
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  /* Button styles */
  .article-saver-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
  }

  .article-saver-button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
  }

  .article-saver-button.primary {
    background: #2563eb;
    color: white;
  }

  .article-saver-button.primary:hover {
    background: #1d4ed8;
  }

  .article-saver-button.secondary {
    background: #f3f4f6;
    color: #374151;
  }

  .article-saver-button.secondary:hover {
    background: #e5e7eb;
  }

  .article-saver-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Switch styles */
  .article-saver-switch input:checked + span {
    background-color: #2563eb !important;
  }

  .article-saver-switch input:checked + span span {
    transform: translateX(16px) !important;
  }

  .article-saver-switch input:not(:checked) + span {
    background-color: #e5e7eb !important;
  }

  .article-saver-switch input:not(:checked) + span span {
    transform: translateX(0) !important;
  }

  .article-saver-switch input {
    cursor: pointer;
  }
`;document.head.appendChild(D);chrome.runtime.onMessage.addListener(n=>{var a;switch(n.type){case"SHOW_API_KEY_REQUIRED":N("API Key Required",'To save articles, you need an OpenAI API key. Get one from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" class="article-saver-link">platform.openai.com/api-keys</a> and add it to the extension settings.',!0,!0);break;case"SHOW_NO_LISTS":N("No Lists Found","Please create at least one list in the extension.",!1,!0);break;case"SHOW_EXTRACTED_DATA":j(n.payload);break;case"SHOW_ERROR":N("Error",((a=n.payload)==null?void 0:a.message)||"An error occurred while saving the article.",!1,!0);break;case"SHOW_SUCCESS":const r=document.createElement("div");r.className="article-saver-success-toast",r.textContent=n.payload.message,document.body.appendChild(r),r.offsetHeight,r.classList.add("show"),setTimeout(()=>{r.classList.remove("show"),setTimeout(()=>r.remove(),300)},3e3);break}});
