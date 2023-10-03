(function(){"use strict";var e={872:function(e,t,n){var i=n(963),a=n(252);function o(e,t){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n)}var s=n(744);const r={},l=(0,s.Z)(r,[["render",o]]);var u=l,d=n(201);const c=e=>((0,a.dD)("data-v-4939820b"),e=e(),(0,a.Cn)(),e),p={class:"home"},h=c((()=>(0,a._)("h1",null,[(0,a.Uk)("skultes "),(0,a._)("br"),(0,a._)("span",null,"gym")],-1)));function m(e,t,n,i,o,s){const r=(0,a.up)("Home");return(0,a.wg)(),(0,a.iD)("div",p,[h,(0,a.Wm)(r)])}var f=n(577);const v=e=>((0,a.dD)("data-v-29a233ea"),e=e(),(0,a.Cn)(),e),g={class:"make-appointment"},b={key:0,class:"container"},y={class:"appointment-list"},w={class:"appointment"},_={key:1},D={class:"no-appointment"},k=v((()=>(0,a._)("h2",null,"Piesakies!",-1))),x={class:"selectors"},I=["value"],S=["value"],T=["value"],O={class:"error-message"},j=v((()=>(0,a._)("input",{class:"btn",type:"submit",value:"Pieteikties"},null,-1))),A=v((()=>(0,a._)("footer",null,[(0,a._)("a",{href:"tel:+37127804609"},"☎ Atis Ozols")],-1))),C={key:1,class:"spinner"},z=v((()=>(0,a._)("div",{class:"loadingio-spinner-rolling-m1e8ui1q0jb"},[(0,a._)("div",{class:"ldio-ood1y432iu"},[(0,a._)("div")])],-1))),M=[z];function P(e,t,n,o,s,r){return(0,a.wg)(),(0,a.iD)("div",g,[this.loading?((0,a.wg)(),(0,a.iD)("div",C,M)):((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",y,[(0,a._)("h3",null,(0,f.zw)(this.availableDates[this.dateIndex].text),1),this.todaysAppointments.length>0?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(this.todaysAppointments,(e=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",w,[(0,a._)("span",null,(0,f.zw)(this.timeSlots[e.start_index]+" - "+this.timeSlots[e.end_index]),1),(0,a._)("span",null,(0,f.zw)(e.name),1)])])))),256)):((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("div",D,[(0,a._)("h5",null,(0,f.zw)(this.availableDates[this.dateIndex].text.substring(0,this.availableDates[this.dateIndex].text.length-7))+" vēl neviens nav pieteicies",1)])]))]),k,(0,a._)("div",x,[(0,a._)("form",{onSubmit:t[7]||(t[7]=(0,i.iM)((e=>r.createAppointment()),["prevent"]))},[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e),type:"text",name:"name",placeholder:"Vārds, uzvārds",required:""},null,512),[[i.nr,s.name]]),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.phone=e),type:"tel",name:"phone",placeholder:"Telefona numurs",required:""},null,512),[[i.nr,s.phone]]),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.dateIndex=e),onChange:t[3]||(t[3]=e=>this.time=Object.keys(this.currentTimeSlots[this.dateIndex])[0])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.availableDates,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{value:t},(0,f.zw)(this.availableDates[t].text),9,I)))),256))],544),[[i.bM,s.dateIndex]]),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>s.duration=e),onChange:t[5]||(t[5]=e=>this.time=Object.keys(this.currentTimeSlots[this.dateIndex])[0])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.durations,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{value:t},(0,f.zw)(e),9,S)))),256))],544),[[i.bM,s.duration]]),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>s.time=e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.currentTimeSlots[this.dateIndex],((e,t)=>((0,a.wg)(),(0,a.iD)("option",{value:t},(0,f.zw)(e),9,T)))),256))],512),[[i.bM,s.time]]),(0,a._)("label",O,(0,f.zw)(this.errorMessage),1),j],32)]),A]))])}var U=n(770),H=n(100);const E={apiKey:"AIzaSyAbrf0VTFq_c3CrKvUqGIw29TpgeUCK71I",authDomain:"skultesgym-19f66.firebaseapp.com",projectId:"skultesgym-19f66",storageBucket:"skultesgym-19f66.appspot.com",messagingSenderId:"155818486003",appId:"1:155818486003:web:bc3563846b727d1c93ef86",measurementId:"G-YG72JSQLKL"},K=U.Z.initializeApp(E),L=(0,H.ad)(K);var V=L,q={name:"Home",data(){return{loading:!0,errorMessage:"",name:"",phone:"",appointments:[],dateIndex:0,duration:3,time:0,currentTime:0,timeSlots:{0:"06:30",1:"06:45",2:"07:00",3:"07:15",4:"07:30",5:"07:45",6:"08:00",7:"08:15",8:"08:30",9:"08:45",10:"09:00",11:"09:15",12:"09:30",13:"09:45",14:"10:00",15:"10:15",16:"10:30",17:"10:45",18:"11:00",19:"11:15",20:"11:30",21:"11:45",22:"12:00",23:"12:15",24:"12:30",25:"12:45",26:"13:00",27:"13:15",28:"13:30",29:"13:45",30:"14:00",31:"14:15",32:"14:30",33:"14:45",34:"15:00",35:"15:15",36:"15:30",37:"15:45",38:"16:00",39:"16:15",40:"16:30",41:"16:45",42:"17:00",43:"17:15",44:"17:30",45:"17:45",46:"18:00",47:"18:15",48:"18:30",49:"18:45",50:"19:00",51:"19:15",52:"19:30",53:"19:45",54:"20:00",55:"20:15",56:"20:30",57:"20:45",58:"21:00",59:"21:15",60:"21:30",61:"21:45",62:"22:00",63:"22:15",64:"22:30",65:"22:45",66:"23:00",67:"23:15",68:"23:30",69:"23:45"},durations:{3:"45 min",4:"60 min",5:"75 min",6:"90 min"},dayDict:{Monday:"Pirmdien",Tuesday:"Otrdien",Wednesday:"Trešdien",Thursday:"Ceturtdien",Friday:"Piektdien",Saturday:"Sestdien",Sunday:"Svētdien"}}},methods:{createAppointment(){if(this.name.length<8||this.phone.length<8)this.errorMessage="Lūdzu, aizpildi visus laukus!";else{this.errorMessage="";const e={name:this.name,phone:this.phone,date:this.availableDates[this.dateIndex].value,start_index:parseInt(this.time),end_index:parseInt(this.time)+parseInt(this.duration)};this.loading=!0,(0,H.ET)(this.appointmentsCollection,e).then((()=>{console.log("Document has been added successfully"),this.readAppointments()})).catch((e=>{console.log(e)})),this.name="",this.phone="",this.duration=3,this.time=Object.keys(this.currentTimeSlots[this.dateIndex])[0]}},async readAppointments(){const e=(0,H.IO)(this.appointmentsCollection,(0,H.ar)("date",">=",this.availableDates[0].value),(0,H.Xo)("date"),(0,H.Xo)("start_index")),t=await(0,H.PL)(e);this.appointments=[],t.forEach((e=>{this.appointments.push(e.data())})),this.loading=!1}},mounted(){this.availableDates.length>0&&(this.dateIndex=0);const e=new Date,t=e.getHours(),n=e.getMinutes(),i=60*t+n-390,a=Math.floor(i/15)+1;a>=0&&a<Object.keys(this.timeSlots).length||(a=0),this.time=a,this.currentTime=a,this.readAppointments()},created(){},computed:{availableDates(){const e=new Date,t=[];for(let n=0;n<7;n++){const i=new Date(e);i.setDate(e.getDate()+n);const a=i.toLocaleString("en-US",{weekday:"long"}),o=i.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),[s,r,l]=o.split("/"),u=parseInt(l+s+r),d=`${r}/${s}`;0==n?t.push({text:"Šodien ("+d+")",value:u}):1==n?t.push({text:"Rītdien ("+d+")",value:u}):t.push({text:this.dayDict[a]+" ("+d+")",value:u})}return t},currentTimeSlots(){const e=[];for(let t=0;t<7;t++)e.push({...this.timeSlots});for(let t=0;t<7;t++)for(const n of this.appointments)if(this.availableDates[t].value==n.date){const i=n.start_index,a=n.end_index;for(let n=i;n<a;n++)delete e[t][n]}for(let t=0;t<this.currentTime;t++)delete e[0][t];for(let t=0;t<7;t++)for(const n in e[t])for(let i=1;i<this.duration;i++)if(!e[t][parseInt(n)+parseInt(i)]){delete e[t][n];break}return e},todaysAppointments(){const e=[];for(const t of this.appointments)this.availableDates[this.dateIndex].value==t.date&&e.push(t);return e},appointmentsCollection(){return(0,H.hJ)(V,"appointments")}}};const Y=(0,s.Z)(q,[["render",P],["__scopeId","data-v-29a233ea"]]);var F=Y,Z={name:"HomeView",components:{Home:F}};const G=(0,s.Z)(Z,[["render",m],["__scopeId","data-v-4939820b"]]);var N=G;const B=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,782))}}],J=(0,d.p7)({history:(0,d.r5)(),routes:B});var W=J;(0,i.ri)(u).use(W).mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var s=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],o=e[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<s&&(s=o));if(r){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,a,o]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.516d0a4a.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gymadmin:";n.l=function(i,a,o,s){if(e[i])e[i].push(a);else{var r,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==t+o){r=c;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=i),e[i]=[a];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(h);var a=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,i){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(n,i){a=e[t]=[n,i]}));i.push(a[2]=o);var s=n.p+n.u(t),r=new Error,l=function(i){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,a[1](r)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,s=i[0],r=i[1],l=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var d=l(n)}for(t&&t(i);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunkgymadmin"]=self["webpackChunkgymadmin"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(872)}));i=n.O(i)})();
//# sourceMappingURL=app.00952081.js.map