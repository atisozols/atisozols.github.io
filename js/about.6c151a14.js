"use strict";(self["webpackChunkgymadmin"]=self["webpackChunkgymadmin"]||[]).push([[443],{751:function(t,n,a){a.r(n),a.d(n,{default:function(){return k}});var e=a(252),i=a(577);const s=t=>((0,e.dD)("data-v-6f1261d7"),t=t(),(0,e.Cn)(),t),o={class:"title"},d=s((()=>(0,e._)("br",null,null,-1))),l=s((()=>(0,e._)("span",{class:"title__name"},"skultes",-1))),p=s((()=>(0,e._)("br",null,null,-1))),m=s((()=>(0,e._)("span",{class:"title__gym"},"gym",-1))),r={key:1},c={ref:"bottom"};function u(t,n,a,s,u,g){const h=(0,e.up)("LoadingSpinner"),_=(0,e.up)("Home");return(0,e.wg)(),(0,e.iD)("div",{class:(0,i.C_)(["admin",{hidden:this.loading}])},[(0,e._)("h1",o,[(0,e._)("span",{class:(0,i.C_)(["title__admin",{hidden:this.loading}])},"admin",2),d,l,p,m]),this.loading?((0,e.wg)(),(0,e.j4)(h,{key:0})):((0,e.wg)(),(0,e.iD)("div",r,[(0,e.Wm)(_,{appointments:this.appointments},null,8,["appointments"])])),(0,e._)("span",c,null,512)],2)}var g=a(138),h=a(821),_=a(77),f=a(100),D={name:"HomeView",components:{Home:g.Z,LoadingSpinner:h.Z},data(){return{appointments:[],loading:!0}},mounted(){console.log("bang"),this.loadAppointments()},methods:{async loadAppointments(t=this.startingDate){this.loading=!0;const n=(0,f.IO)(this.appointmentsCollection,(0,f.ar)("date",">=",t),(0,f.Xo)("date"),(0,f.Xo)("start_index")),a=await(0,f.PL)(n);this.appointments=[],a.forEach((t=>{this.appointments.push(t.data())})),this.loading=!1}},computed:{startingDate(){const t=new Date,n=new Date(t);n.setDate(t.getDate());const a=n.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),[e,i,s]=a.split("/"),o=parseInt(s+e+i);return o},appointmentsCollection(){return(0,f.hJ)(_.Z,"appointments")}}},w=a(744);const y=(0,w.Z)(D,[["render",u],["__scopeId","data-v-6f1261d7"]]);var k=y}}]);
//# sourceMappingURL=about.6c151a14.js.map