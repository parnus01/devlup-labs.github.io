(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),s=a.n(n);s.a},"12b0":function(t,e,a){},"43f2":function(t,e,a){t.exports=a.p+"img/logo.3ff35fb5.jpeg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",{staticStyle:{"overflow-x":"hidden",position:"relative"}},[a("v-app",[a("PageHeader",{staticStyle:{"z-index":"5"}}),a("v-content",[a("router-view")],1),a("PageFooter")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticStyle:{opacity:"1.0"},attrs:{app:"","clipped-right":"",flat:"",floating:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-avatar",{attrs:{size:"48px"}},[n("v-img",{attrs:{src:a("43f2")}})],1),n("v-toolbar-title",{staticClass:"hidden-sm-and-down white--text"},[n("span",{staticClass:"title ml-3 mr-5",staticStyle:{color:"black"},attrs:{text:""}},[t._v("Devlup Labs ")])]),n("v-spacer"),n("div",{staticClass:"hidden-sm-and-down"},t._l(t.links,(function(e){return n("v-btn",{key:e.text,staticClass:"pa-2 ma-1",attrs:{text:"",to:{name:e.text},label:"",exact:""}},[t._v(t._s(e.text))])})),1)],1),n("v-navigation-drawer",{staticStyle:{"z-index":"5"},attrs:{app:"",left:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},t._l(t.links,(function(e){return n("v-list-item",{key:e.text,attrs:{to:{name:e.text},exact:""},on:{click:function(t){}}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"grey--text"},[t._v(t._s(e.text))])],1)],1)})),1)],1)],1)},o=[],l={name:"Header",data:function(){return{drawer:null,links:[{text:"Home",icon:"mdi-home"},{text:"About",icon:"mdi-information"},{text:"Projects",icon:"mdi-briefcase-edit-outline"},{text:"Timeline",icon:"mdi-timeline-text"},{text:"Blog",icon:"mdi-forum"},{text:"Videos",icon:"mdi-television"},{text:"Team",icon:"mdi-human-male-male"}]}}},c=l,u=a("2877"),m=a("6544"),d=a.n(m),p=a("40dc"),f=a("5bc1"),v=a("8212"),g=a("8336"),h=a("132d"),b=a("adda"),x=a("8860"),w=a("da13"),_=a("1800"),y=a("5d23"),$=a("f774"),C=a("2fa4"),j=a("2a7f"),V=Object(u["a"])(c,r,o,!1,null,"749a457a",null),P=V.exports;d()(V,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VAvatar:v["a"],VBtn:g["a"],VIcon:h["a"],VImg:b["a"],VList:x["a"],VListItem:w["a"],VListItemAction:_["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VNavigationDrawer:$["a"],VSpacer:C["a"],VToolbarTitle:j["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{color:"basic",padless:""}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},t._l(t.links,(function(e){return a("v-btn",{key:e,staticClass:"py-2",attrs:{href:e.href,color:"white",icon:""}},[a("v-icon",[t._v(t._s(e.icon))])],1)})),1),a("v-col",{staticClass:"py-4 text-center white--text font-weight-bold",attrs:{color:"secondary",cols:"12"}},[t._v(t._s((new Date).getFullYear())+" — Devlup Labs")])],1)},S=[],O={data:function(){return{links:[{icon:"mdi-gmail",href:"mailto:opensourceiitj@gmail.com"},{icon:"mdi-facebook",href:"https://www.facebook.com/devluplabs/"},{icon:"mdi-instagram",href:"https://www.instagram.com/devluplabs/"},{icon:"mdi-github",href:"https://github.com/devlup-labs"}]}}},F=O,I=a("62ad"),A=a("553a"),T=a("0fd9"),B=Object(u["a"])(F,k,S,!1,null,null,null),E=B.exports;d()(B,{VBtn:g["a"],VCol:I["a"],VFooter:A["a"],VIcon:h["a"],VRow:T["a"]});var D={name:"App",components:{PageHeader:P,PageFooter:E}},L=D,R=(a("034f"),a("7496")),W=a("a75b"),H=Object(u["a"])(L,s,i,!1,null,null,null),z=H.exports;d()(H,{VApp:R["a"],VContent:W["a"]});var G=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HomeLanding")},N=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"-50pt",height:"100%"},attrs:{id:"inspire"}},[a("v-content",{staticClass:"pa-0",staticStyle:{height:"100%"}},[a("v-container",{staticClass:"mt-12 mt-sm-0 pt-12 pt-sm-0",staticStyle:{"z-index":"1",height:"100%"}},[a("v-row",{staticClass:"mt-12 mt-sm-0 pt-12 pt-sm-3 px-4",staticStyle:{height:"100%"},attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-left px-md-3 px-10",style:[t.$vuetify.breakpoint.mdAndUp?"margin-top:50pt":"margin-top:45pt"],attrs:{sm:"7",cols:"12"}},[a("div",{staticClass:"pl-md-10 pr-sm-7"},[a("h1",{staticClass:"font-weight-bold mb-1 mb-sm-5",class:[t.$vuetify.breakpoint.lgAndUp?"display-3":"display-2"]},[t._v("DevlUp Labs")]),a("h1",{staticClass:"font-weight-regular",class:[(t.$vuetify.breakpoint.lgAndUp,"display-1")]},[a("span",{staticClass:"blue--text"},[t._v("Open Source")]),t._v(" Development Enthusiasts Group @ IIT Jodhpur")])])]),a("v-col",{attrs:{sm:"5",cols:"12"}})],1)],1)],1)],1)},q=[],M={},J=M,Q=(a("7be0"),a("a523")),X=Object(u["a"])(J,Y,q,!1,null,null,null),K=X.exports;d()(X,{VCol:I["a"],VContainer:Q["a"],VContent:W["a"],VRow:T["a"]});var Z={name:"Home",components:{HomeLanding:K}},tt=Z,et=Object(u["a"])(tt,U,N,!1,null,null,null),at=et.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{margin:"0px",padding:"0px",width:"100%"},attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-container",{staticStyle:{margin:"0px",padding:"0px",width:"100%","background-color":"#1b65c4"},attrs:{fluid:""}},[n("v-row",[n("v-flex",{attrs:{xs12:"",sm12:"",md4:"",lg4:"",xl4:""}},[n("v-img",{attrs:{src:a("f1f9"),"aspect-ratio":"1.7"}})],1),n("v-flex",{attrs:{xs12:"",sm12:"",md7:"",lg7:"",xl7:""}},[n("v-container",[n("h1",{staticClass:"pa-3 mt-3",staticStyle:{"text-align":"center",color:"#fff"}},[t._v("About Us")]),n("h3",{staticClass:"font-weight-regular mb-n pl-12 pr-12 mt-n2",staticStyle:{"text-align":"left",color:"#fff"}},[t._v(t._s(t.desc1))]),n("h3",{staticClass:"font-weight-regular mb-n pl-12 pr-12 mt-2",staticStyle:{"text-align":"left",color:"#fff"}},[t._v(t._s(t.desc2))])])],1)],1)],1),n("v-container",[n("h1",{staticClass:"pa-3 rounded-lg text-center",staticStyle:{"text-align":"center",color:"#000"}},[t._v("GUIDING PRINCIPLES")]),t._l(t.items,(function(e){return n("v-flex",{key:e.name,attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[n("div",{staticClass:"d-none d-lg-flex d-xl-flex mt-2"}),"left"===e.direction?n("div",[n("v-row",[n("v-flex",{attrs:{xs12:"",sm12:"",md4:"",lg4:"",xl4:""}},[n("v-img",{staticClass:"mt-5 ml-3 mr-n3",attrs:{src:e.src,contain:"","aspect-ratio":"2.5"}})],1),n("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg8:"",xl8:""}},[n("v-container",[n("h1",{staticClass:"font-weight-medium pa-3",staticStyle:{"text-align":"center",color:"#000"}},[t._v(t._s(e.heading))]),n("h3",{staticClass:"font-weight-light mb-n pa-3",staticStyle:{"text-align":"center",color:"#000"}},[t._v(t._s(e.subheading)+" ")])])],1)],1)],1):t._e(),"right"===e.direction?n("div",[t.$vuetify.breakpoint.smAndDown?n("v-layout",[n("v-row",[n("v-flex",{attrs:{xs12:"",sm12:"",md4:"",lg4:"",xl4:""}},[n("v-img",{staticClass:"mt-5 ml-n3 mr-3",attrs:{src:e.src,contain:"","aspect-ratio":"2.5"}})],1),n("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg8:"",xl8:""}},[n("v-container",[n("h1",{staticClass:"font-weight-medium pa-3",staticStyle:{"text-align":"center",color:"#000"}},[t._v(t._s(e.heading))]),n("h3",{staticClass:"font-weight-light mb-n pa-3",staticStyle:{"text-align":"center",color:"#000"}},[t._v(t._s(e.subheading)+" ")])])],1)],1)],1):t._e(),t.$vuetify.breakpoint.mdAndUp?n("v-layout",[n("v-row",[n("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg8:"",xl8:""}},[n("v-container",[n("h1",{staticClass:"font-weight-medium pa-3",staticStyle:{"text-align":"center",color:"#000"}},[t._v(t._s(e.heading))]),n("h3",{staticClass:"font-weight-light mb-n pa-3",staticStyle:{"text-align":"center",color:"#000"}},[t._v(t._s(e.subheading))])])],1),n("v-flex",{attrs:{xs12:"",sm12:"",md4:"",lg4:"",xl4:""}},[n("v-img",{staticClass:"mt-5 ml-n3 mr-3",attrs:{src:e.src,contain:"","aspect-ratio":"2.5"}})],1)],1)],1):t._e()],1):t._e()])}))],2)],1)],1)},st=[],it={name:"Project",data:function(){return{desc1:"DevlUp Labs is a thriving student-led open source community at IIT Jodhpur.We believe in sharing of ideas and upskilling by collaboration through meaningful projects. Our focus is to deliver results with the highest of standards.We aim to build an open source community through proper guidance and by encouraging self learning.",desc2:"We encourage development of technology and Innovation through various sessions, workshops and webinars.",item:1,items:[{direction:"right",heading:"Learning Driven Endeavour",src:"../data/images/AboutusPoints/point1new.png",subheading:"Everything we do is to upskill ourselves! We aim to learn and grow as a team!"},{direction:"left",heading:"Open Source community",src:"../data/images/AboutusPoints/point2new.png",subheading:"Inspire and guide the coming generation to build a functioning and interactive open-source community."},{direction:"right",heading:"Projects that matter",src:"../data/images/AboutusPoints/point3new.png",subheading:"We at devlup labs are committed to products and projects that matter, projects that serve a real purpose for the community."},{direction:"left",heading:"Unparalleled Standards",src:"../data/images/AboutusPoints/point4new.png",subheading:"We insist on the highest of standards, from functionality to code to coffee."},{direction:"right",heading:"Delivering Results",src:"../data/images/AboutusPoints/point5new.png",subheading:"Nothing is more important than delivering amazing results to the end-user."},{direction:"left",heading:"Don’t Reinvent the wheel",src:"../data/images/AboutusPoints/point6new.png",subheading:"We believe that we can deliver better results and enrich the learning experience by leveraging existing solutions and building on top of them."},{direction:"right",heading:"Self Learning",src:"../data/images/AboutusPoints/point7new.png",subheading:"Self Learning sits at the heart of devlup labs, we believe in proper utilization of resources and peer guidance to propel self learning."}]}}},rt=it,ot=a("0e8f"),lt=a("a722"),ct=Object(u["a"])(rt,nt,st,!1,null,null,null),ut=ct.exports;d()(ct,{VContainer:Q["a"],VFlex:ot["a"],VImg:b["a"],VLayout:lt["a"],VRow:T["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center",justify:"center"}},[a("v-container",[a("v-row",{attrs:{justify:"left"}},t._l(t.profiles,(function(t){return a("v-flex",{key:t.name,staticClass:"mb-10",attrs:{xs12:"",sm12:"",md6:"",lg4:"",xl:""}},[a("ProfileCard",{attrs:{Profile:t}})],1)})),1)],1)],1)},dt=[],pt=(a("d3b7"),a("2909")),ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"left"}},[a("v-col",[a("v-card",{staticClass:"elevation-5",attrs:{width:1.08*t.getProfileWidth}},[a("v-stepper",{model:{value:t.pageNo,callback:function(e){t.pageNo=e},expression:"pageNo"}},[a("v-stepper-items",[a("v-stepper-content",{staticClass:"pa-0",attrs:{step:"1"}},[a("v-card",{staticClass:"pl-1",attrs:{width:t.getProfileWidth,flat:""}},[a("v-row",[a("v-col",{staticStyle:{"background-color":"#fff"},attrs:{cols:"4"}},[a("v-avatar",{attrs:{size:.3*t.getProfileWidth}},[a("img",{attrs:{src:t.Profile.gsx$src.$t,contain:""}})])],1),a("v-col",{staticClass:"pa-2",attrs:{cols:"7"}},[a("div",[a("h4",{staticClass:"mt-1 mb-n2"},[t._v(t._s(t.Profile.gsx$name.$t))]),a("v-row",{staticClass:"justify-center"},[a("v-col",[a("h6",[t._v(t._s(t.Profile.gsx$currentdesignation.$t)+" | "+t._s(t.Profile.gsx$devlupdesignation.$t))])])],1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[t.Profile.gsx$linkemail.$t?a("v-btn",{attrs:{color:"red",href:t.Profile.gsx$linkemail.$t,icon:"",small:""}},[a("v-icon",{attrs:{color:"red"}},[t._v("mdi-email")])],1):t._e(),t.Profile.gsx$linkgithub.$t?a("v-btn",{attrs:{color:"black",href:t.Profile.gsx$linkgithub.$t,icon:"",small:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-github")])],1):t._e(),t.Profile.gsx$linkgitlab.$t?a("v-btn",{attrs:{color:"orange",href:t.Profile.gsx$linkgitlab.$t,icon:"",small:""}},[a("v-icon",{attrs:{color:"orange"}},[t._v("mdi-gitlab")])],1):t._e(),t.Profile.gsx$linklinkedin.$t?a("v-btn",{attrs:{color:"blue",href:t.Profile.gsx$linklinkedin.$t,icon:"",small:""}},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-linkedin")])],1):t._e()],1)],1),a("v-icon",{attrs:{color:"#1b65c4"},on:{click:function(e){t.pageNo=2}}},[t._v("mdi-chevron-right")])],1)],1)],1),a("v-stepper-content",{staticClass:"pb-3 pt-1 pl-1 mt-n2",attrs:{step:"2"}},[a("v-card",{attrs:{height:"105px"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{attrs:{color:"#1b65c4"},on:{click:function(e){t.pageNo=1}}},[t._v("mdi-chevron-left")])],1),a("v-col",{staticClass:"mb-2",attrs:{cols:"11"}},[t._v(" "+t._s(t.Profile.gsx$info.$t))])],1)],1)],1)],1)],1)],1)],1)],1)},vt=[],gt={name:"ProfileCard",props:["Profile"],data:function(){return{pageNo:1}},computed:{getProfileWidth:function(){return this.ProfileWidth||this.$vuetify.theme.options.cards.ProfileWidth}}},ht=gt,bt=a("b0af"),xt=a("7e85"),wt=a("e516"),_t=a("9c54"),yt=Object(u["a"])(ht,ft,vt,!1,null,null,null),$t=yt.exports;d()(yt,{VAvatar:v["a"],VBtn:g["a"],VCard:bt["a"],VCol:I["a"],VIcon:h["a"],VRow:T["a"],VStepper:xt["a"],VStepperContent:wt["a"],VStepperItems:_t["a"]});var Ct={name:"Profile",components:{ProfileCard:$t},data:function(){return{profiles:[]}},methods:{fetchProfiles:function(){var t=this;fetch("https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/oh0n2ko/public/values?alt=json").then((function(e){return e.json().then((function(e){t.profiles=Object(pt["a"])(e.feed.entry)}))}))}},mounted:function(){this.fetchProfiles()}},jt=Ct,Vt=Object(u["a"])(jt,mt,dt,!1,null,null,null),Pt=Vt.exports;d()(Vt,{VContainer:Q["a"],VFlex:ot["a"],VRow:T["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center",justify:"center"}},[a("v-container",[a("v-row",{attrs:{justify:"left"}},t._l(t.projects,(function(t){return a("v-flex",{key:t.name,staticClass:"mb-6",attrs:{xs12:"",sm12:"",md6:"",lg4:"",xl4:""}},[a("ProjectCard",{attrs:{Project:t}})],1)})),1)],1)],1)},St=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"left"}},[a("v-flex",[a("v-card",{staticClass:"pa-2 elevation-6",attrs:{width:.9*t.getProjectHeight,hover:"hover"}},[a("h2",{attrs:{underline:"underline"}},[t._v(t._s(t.Project.gsx$name.$t))]),a("v-carousel",{attrs:{"hide-delimiters":"hide-delimiters",height:.5*t.getProjectHeight,"show-arrows-on-hover":"show-arrows-on-hover"}},[t.Project.gsx$image1.$t?a("v-carousel-item",{attrs:{contain:"contain",src:t.Project.gsx$image1.$t}}):t._e(),t.Project.gsx$image2.$t?a("v-carousel-item",{attrs:{contain:"contain",src:t.Project.gsx$image2.$t}}):t._e(),t.Project.gsx$image3.$t?a("v-carousel-item",{attrs:{contain:"contain",src:t.Project.gsx$image3.$t}}):t._e()],1),a("v-card",{attrs:{flat:"flat"}},[a("h5",{staticClass:"pa-1 d-inline-blocktext-truncate",staticStyle:{height:"50px"}},[t._v(t._s(t.Project.gsx$description.$t))]),a("v-divider"),a("v-flex",{staticClass:"pa-1"},[t.Project.gsx$tag1.$t?a("v-chip",{staticClass:"pa-2 ma-1",attrs:{label:"label",small:"small"}},[t._v(t._s(t.Project.gsx$tag1.$t)+" ")]):t._e(),t.Project.gsx$tag2.$t?a("v-chip",{staticClass:"pa-2 ma-1",attrs:{label:"label",small:"small"}},[t._v(t._s(t.Project.gsx$tag2.$t)+" ")]):t._e(),t.Project.gsx$tag3.$t?a("v-chip",{staticClass:"pa-2 ma-1",attrs:{label:"label",small:"small"}},[t._v(t._s(t.Project.gsx$tag3.$t)+" ")]):t._e(),a("v-btn",{attrs:{icon:"icon"},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("h6",{staticClass:"pa-1"},[t._v(t._s(t.Project.gsx$info.$t))])])]),a("v-row",{staticClass:"justify-space-around"},[t.Project.gsx$githublink.$t?a("v-col",{attrs:{cols:"5"}},[a("v-btn",{staticClass:"ml-1 mr-1",attrs:{href:t.Project.gsx$githublink.$t,dark:"dark",block:"block"}},[a("v-icon",[t._v("mdi-github ")])],1)],1):t._e(),t.Project.gsx$weblink.$t?a("v-col",{attrs:{cols:"5"}},[a("v-btn",{staticClass:"ml-1 mr-1",attrs:{href:t.Project.gsx$weblink.$t,block:"block"}},[a("v-icon",[t._v("mdi-web ")])],1)],1):t._e()],1)],1)],1)],1)],1)},Ft=[],It={name:"ProfileCard",props:["Project"],data:function(){return{show:!1}},computed:{getProjectHeight:function(){return this.ProjectHeight||this.$vuetify.theme.options.cards.ProjectHeight}}},At=It,Tt=a("5e66"),Bt=a("3e35"),Et=a("cc20"),Dt=a("ce7e"),Lt=a("0789"),Rt=Object(u["a"])(At,Ot,Ft,!1,null,null,null),Wt=Rt.exports;d()(Rt,{VBtn:g["a"],VCard:bt["a"],VCarousel:Tt["a"],VCarouselItem:Bt["a"],VChip:Et["a"],VCol:I["a"],VDivider:Dt["a"],VExpandTransition:Lt["a"],VFlex:ot["a"],VIcon:h["a"],VRow:T["a"]});var Ht={name:"Project",components:{ProjectCard:Wt},data:function(){return{projects:[]}},methods:{fetchProjects:function(){var t=this;fetch("https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/o4eja9x/public/values?alt=json").then((function(e){return e.json().then((function(e){t.projects=Object(pt["a"])(e.feed.entry)}))}))}},mounted:function(){this.fetchProjects()}},zt=Ht,Gt=Object(u["a"])(zt,kt,St,!1,null,null,null),Ut=Gt.exports;d()(Gt,{VContainer:Q["a"],VFlex:ot["a"],VRow:T["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{cols:"12",md:"8"}},[0!=t.timelineDetails.length?a("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},[a("TimelineCard",{attrs:{timelineDetails:t.timelineDetails}})],1):t._e()],1)],1)},Yt=[],qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.timelineDetails?a("div",t._l(t.timelineDetails,(function(e,n){return a("v-timeline-item",{key:"index",attrs:{color:e.gsx$colorclass.$t,"fill-dot":"",value:n%2===0?"right":"left"}},[a("span",{attrs:{slot:"opposite"},slot:"opposite"},[a("p",{class:["display-1",e.gsx$colorclass.$t+"--text"]},[a("font",{attrs:{size:"5"}},[t._v(t._s(e.gsx$date.$t))])],1)]),a("v-card",{staticClass:"elevation-5 ml-2 mr-2"},[a("v-card-title",{class:e.gsx$colorclass.$t},[a("span",{staticClass:"display-1 white--text font-weight-light",staticStyle:{"word-break":"break-word"}},[t._v(t._s(e.gsx$title.$t))])]),a("v-container",[a("v-row",{staticClass:"ml-2 font-weight-bold d-lg-none d-xl-flex d-xl-none"},[t._v(t._s(e.gsx$date.$t))]),a("v-row",{staticClass:"ml-2 mr-2 text-left"},[t._v(t._s(e.gsx$info.$t))]),e.gsx$firstbuttonlink.$t?a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.gsx$firstbuttonlink.$t}},[e.gsx$firstbuttonlink.$t?a("v-btn",{staticClass:"mb-2 mt-2",staticStyle:{"flex-direction":"column"},attrs:{small:"small",color:e.gsx$colorclass.$t,dark:"dark"}},[t._v(t._s(e.gsx$firstbuttontext.$t))]):t._e()],1):t._e(),e.gsx$secondbuttonlink.$t?a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.gsx$secondbuttonlink.$t}},[e.gsx$secondbuttonlink.$t?a("v-btn",{staticClass:"ml-2 mb-2 mt-2",attrs:{small:"small",color:e.gsx$colorclass.$t,dark:"dark"}},[t._v(t._s(e.gsx$secondbuttontext.$t))]):t._e()],1):t._e()],1)],1)],1)})),1):t._e()},Mt=[],Jt={name:"TimelineCard",props:["timelineDetails"]},Qt=Jt,Xt=a("99d9"),Kt=a("1e06"),Zt=Object(u["a"])(Qt,qt,Mt,!1,null,null,null),te=Zt.exports;d()(Zt,{VBtn:g["a"],VCard:bt["a"],VCardTitle:Xt["b"],VContainer:Q["a"],VRow:T["a"],VTimelineItem:Kt["a"]});var ee={name:"Timeline",components:{TimelineCard:te},data:function(){return{drawer:null,timelineDetails:[]}},methods:{fetchTimelines:function(){var t=this;fetch("https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/oemu3cb/public/values?alt=json").then((function(e){return e.json().then((function(e){t.timelineDetails=Object(pt["a"])(e.feed.entry)}))}))}},mounted:function(){this.fetchTimelines()}},ae=ee,ne=a("8414"),se=Object(u["a"])(ae,Nt,Yt,!1,null,null,null),ie=se.exports;d()(se,{VCol:I["a"],VRow:T["a"],VTimeline:ne["a"]});var re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center"}},[a("v-container",[a("v-row",{staticClass:"mt-9"},t._l(t.blogs,(function(t){return a("v-flex",{key:t.name,staticClass:"mb-6",attrs:{xs12:"",sm12:"",md6:"",lg4:"",xl4:""}},[a("BlogCard",{attrs:{blog:t}})],1)})),1),a("v-btn",{attrs:{color:"#1b65c4",dark:"",large:"",href:"https://medium.com/devlup-labs"}},[t._v("More Posts")])],1)],1)},oe=[],le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-card",{staticClass:"mx-auto elevation-4",attrs:{"max-width":"344",height:"100%",href:t.blog.link}},[a("v-img",{attrs:{src:t.blog.thumbnail,height:"150"}}),a("v-list-item",[a("v-list-item-content",[a("v-list-item",{staticClass:"title"},[t._v(t._s(t.blog.title))]),a("v-list-item-subtitle",[t._v(t._s(t.blog.author))])],1)],1),a("v-card-actions",[a("v-col",[a("v-row",{staticClass:"mt-n4 align-content-center justify-center"},t._l(t.blog.categories,(function(e){return a("v-chip",{key:e.name,staticClass:"pa-2 ma-1",attrs:{label:"label",rounded:"",small:"small"}},[t._v(t._s(e))])})),1)],1)],1)],1)],1)},ce=[],ue={name:"BlogCard",props:["blog"]},me=ue,de=Object(u["a"])(me,le,ce,!1,null,null,null),pe=de.exports;d()(de,{VCard:bt["a"],VCardActions:Xt["a"],VChip:Et["a"],VCol:I["a"],VImg:b["a"],VLayout:lt["a"],VListItem:w["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VRow:T["a"]});var fe={name:"Blog",components:{BlogCard:pe},data:function(){return{blogs:[]}},methods:{fetchBlogs:function(){var t=this;fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fdevlup-labs").then((function(e){return e.json().then((function(e){return t.blogs=e.items}))}))}},created:function(){this.fetchBlogs()}},ve=fe,ge=Object(u["a"])(ve,re,oe,!1,null,null,null),he=ge.exports;d()(ge,{VBtn:g["a"],VContainer:Q["a"],VFlex:ot["a"],VRow:T["a"]});var be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center"}},[a("v-container",[a("v-row",{staticClass:"mt-9"},t._l(t.tutorials,(function(t){return a("v-flex",{key:t.name,staticClass:"mb-6",attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl4:""}},[a("VideoCard",{attrs:{tutorial:t}})],1)})),1),a("v-btn",{attrs:{color:"#1b65c4",dark:"",large:"",href:"https://www.youtube.com/channel/UCFaRxxB8-BB5GXH-wlwGqIw"}},[t._v("Our Channel")])],1)],1)},xe=[],we=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-card",{staticClass:"mx-auto elevation-4 d-none d-lg-flex d-xl-flex",attrs:{"max-width":"500",height:"100%"}},[a("v-responsive",{attrs:{"aspect-ratio":16/9}},[a("iframe",{attrs:{id:"ytplayer",type:"text/html",allowfullscreen:"true",width:"500",height:"100%",src:"https://www.youtube.com/embed/"+t.tutorial.guid.split(":")[2]+"?autoplay=1&origin=http://example.com",frameborder:"0"}})])],1),a("v-card",{staticClass:"mx-auto elevation-4 d-flex d-sm-flex d-md-flex d-lg-none",attrs:{"max-width":"344",height:"100%"}},[a("v-responsive",{attrs:{"aspect-ratio":16/9}},[a("iframe",{attrs:{id:"ytplayer",type:"text/html",allowfullscreen:"true",width:"344",height:"100%",src:"https://www.youtube.com/embed/"+t.tutorial.guid.split(":")[2]+"?autoplay=1&origin=http://example.com",frameborder:"0"}})])],1)],1)},_e=[],ye={name:"VideoCard",props:{tutorial:{type:Object,required:!0}}},$e=ye,Ce=a("6b53"),je=Object(u["a"])($e,we,_e,!1,null,null,null),Ve=je.exports;d()(je,{VCard:bt["a"],VLayout:lt["a"],VResponsive:Ce["a"]});var Pe={name:"Videos",components:{VideoCard:Ve},data:function(){return{tutorials:[]}},methods:{fetchTutorials:function(){var t=this;fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCFaRxxB8-BB5GXH-wlwGqIw").then((function(e){return e.json().then((function(e){return t.tutorials=e.items}))}))}},created:function(){this.fetchTutorials()}},ke=Pe,Se=Object(u["a"])(ke,be,xe,!1,null,null,null),Oe=Se.exports;d()(Se,{VBtn:g["a"],VContainer:Q["a"],VFlex:ot["a"],VRow:T["a"]}),n["a"].use(G["a"]);var Fe=[{path:"/",name:"Home",component:at,meta:{title:"DevlUp Labs"}},{path:"/about",name:"About",component:ut,meta:{title:"About Us"}},{path:"/projects",name:"Projects",component:Ut,meta:{title:"Projects"}},{path:"/timeline",name:"Timeline",component:ie,meta:{title:"Timeline"}},{path:"/blog",name:"Blog",component:he,meta:{title:" Our Blog"}},{path:"/videos",name:"Videos",component:Oe,meta:{title:" Videos"}},{path:"/team",name:"Team",component:Pt,meta:{title:"Team"}}],Ie=new G["a"]({routes:Fe});Ie.beforeEach((function(t,e,a){document.title=t.meta.title,a()}));var Ae=Ie,Te=a("f309");n["a"].use(Te["a"]);var Be=new Te["a"]({theme:{options:{customProperties:!0,cards:{ProjectHeight:300,ProfileWidth:300}},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",basic:"#1b65c4"}}}});n["a"].config.productionTip=!1,new n["a"]({router:Ae,vuetify:Be,render:function(t){return t(z)}}).$mount("#app")},"7be0":function(t,e,a){"use strict";var n=a("12b0"),s=a.n(n);s.a},"8a23":function(t,e,a){},f1f9:function(t,e,a){t.exports=a.p+"img/aboutus_team.3c61c373.png"}});
//# sourceMappingURL=app.e05575cd.js.map