import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as m}from"./assets/vendor-651d7991.js";document.getElementById("submitButton").addEventListener("click",function(e){e.preventDefault(),n()});function n(){const e=document.querySelector(".form"),s=e.elements.delay.value,o=e.elements.state.value;new Promise((t,l)=>{setTimeout(o==="fulfilled"?()=>t(s):()=>l(s),s)}).then(t=>{m.success({title:"Success",message:`Fulfilled promise in ${t}ms`})},t=>{m.error({title:"Error",message:`Rejected promise in ${t}ms`})}),e.elements.delay.value="",e.elements.state[0].checked=!1,e.elements.state[1].checked=!1}
//# sourceMappingURL=commonHelpers2.js.map