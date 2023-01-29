(function(){"use strict";var t={8508:function(t,e,a){var s=a(6369),i=a(6882),n=function(){var t=this,e=t._self._c;return e("transition",{staticClass:"wrapper",attrs:{name:"fade",tag:"div",mode:"out-in"}},[t.isLoaded?e("div",{staticClass:"wrapper",attrs:{id:"app"}},[e("LandingPage",{attrs:{user:t.user}}),e("Description",{attrs:{user:t.user,content:t.findSlug("description"),links:t.findSlug("links")}}),e("Experience",{attrs:{content:t.findSlug("experiences")}}),e("Skills",{attrs:{content:t.findSlug("skills")}}),e("Projects",{attrs:{content:t.findSlug("projects")}}),e("Contact"),e("Footer",{attrs:{links:t.findSlug("links"),layout:t.layout}}),e("BackToTop")],1):t._e()])},o=[],r=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header parallax",attrs:{id:"landing-page"}},[e("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:100,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),e("div",{staticClass:"name"},[e("div",{staticClass:"wrapper-name"},[e("AnimateOnVisible",{attrs:{name:"fadeDown",":duration":1}},[e("h1",[t._v(t._s(t.user.name))])]),e("hr"),e("AnimateOnVisible",{attrs:{name:"fadeUp",":duration":1}},[e("p",[t._v(t._s(t.user.status))])])],1)])],1)},l=[],c={name:"LandingPage",props:["user"]},d=c,u=a(1001),p=(0,u.Z)(d,r,l,!1,null,"f4411682",null),m=p.exports,f=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"about"}},[e("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[e("Title",{attrs:{title:t.content.metadata.title,description:t.content.metadata.description}})],1),e("AnimateOnVisible",{attrs:{name:"fadeRight",duration:1}},[e("div",{staticClass:"section-content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center"},[e("Photo",{attrs:{user:t.user}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7 mr-auto card-mobile"},[e("Presentation",{attrs:{content:t.content}})],1),e("div",{staticClass:"col-md-4 card-mobile"},[e("PersonnalCard",{attrs:{user:t.user,links:t.links}})],1)])])])])],1)},v=[],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h2",[t._v(t._s(t.title))]),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"text-wrapper"},[t._v(t._s(t.description))])])])},b=[],g={name:"Title",props:["title","description"]},y=g,_=(0,u.Z)(y,h,b,!1,null,"5b3b447a",null),k=_.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v(t._s(t.user.name))]),e("div",{staticClass:"data"},[e("strong",[t._v("E-mail:")]),t._v(" "+t._s(t.user.email))]),e("div",{staticClass:"data"},[e("strong",[t._v("Phone:")]),t._v(" "+t._s(t.user.phone))]),e("div",{staticClass:"data"},[e("strong",[t._v("City:")]),t._v(" "+t._s(t.user.city))]),e("div",{staticClass:"data"},[e("strong",[t._v("Lives in:")]),t._v(" "+t._s(t.user.live))]),e("div",{staticClass:"data"},[e("strong",[t._v("Languages:")]),t._v(" "+t._s(t.user.lang))]),e("SocialBar",{attrs:{links:t.links}})],1)},w=[],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-wrap"},[e("ul",[e("li",[e("a",{attrs:{href:t.links.metadata.facebook,target:"_blank"}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","facebook-square"]}})],1)]),e("li",[e("a",{attrs:{href:t.links.metadata.instagram,target:"_blank"}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","instagram-square"]}})],1)]),e("li",[e("a",{attrs:{href:t.links.metadata.linkedin,target:"_blank"}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","linkedin"]}})],1)]),e("li",[e("a",{attrs:{href:t.links.metadata.github,target:"_blank"}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github-square"]}})],1)])])])},S=[],T={name:"SocialBar",props:["links"]},V=T,O=(0,u.Z)(V,x,S,!1,null,"62a02e85",null),L=O.exports,P={name:"PersonnalCard",props:["user","links"],components:{SocialBar:L}},j=P,E=(0,u.Z)(j,C,w,!1,null,"016d57ac",null),Z=E.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"paragraph"},[e("h3",[t._v(t._s(t.content.metadata.pres_title))]),e("div",{staticClass:"begin"},[t._v(t._s(t.content.metadata.pres_first))]),e("p",[t._v(t._s(t.content.metadata.pres_second))])])},I=[],D={name:"Description",props:["content"]},M=D,F=(0,u.Z)(M,A,I,!1,null,"17cb5f87",null),U=F.exports,q=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"photo"},[e("a",[e("img",{attrs:{src:t.getImgUrl(t.user.photo),alt:"photo"}})])])])},N=[],$={name:"Photo",props:["user"],methods:{getImgUrl(t){return t}}},B=$,J=(0,u.Z)(B,q,N,!1,null,"02168ea7",null),W=J.exports,Q={name:"AboutMe",props:["user","content","links"],components:{Title:k,PersonnalCard:Z,Presentation:U,Photo:W}},R=Q,Y=(0,u.Z)(R,f,v,!1,null,"20611b48",null),z=Y.exports,X=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"experience"}},[e("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[e("Title",{staticClass:"title",attrs:{title:t.content.metadata.title,description:t.content.metadata.description}})],1),e("AnimateOnVisible",{attrs:{name:"fadeUp",duration:1}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("ExperienceColumn",{staticClass:"col-12 col-md left",attrs:{posts:t.content.metadata.academic,title:"Education"}}),e("ExperienceColumn",{staticClass:"col-12 col-md right",attrs:{posts:t.content.metadata.professional,title:"Professional"}})],1)])])],1)},H=[],G=function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"color-light"},[t._v(t._s(t.title))]),t._l(t.posts,(function(a,s){return e("div",{key:s,staticClass:"resume-item"},[e("div",{staticClass:"year color-darker"},[t._v(t._s(a.year))]),e("div",{staticClass:"resume-description"},[e("strong",{staticClass:"color-light",domProps:{innerHTML:t._s(a.title)}})]),e("div",{staticClass:"color-darker",domProps:{innerHTML:t._s(a.content)}})])}))],2)},K=[],tt={name:"ExperienceColumn",props:["posts","title"]},et=tt,at=(0,u.Z)(et,G,K,!1,null,"1119443e",null),st=at.exports,it={name:"ExperienceC",props:["content"],components:{Title:k,ExperienceColumn:st}},nt=it,ot=(0,u.Z)(nt,X,H,!1,null,"5aa081a2",null),rt=ot.exports,lt=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"skills"}},[e("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[e("Title",{attrs:{title:t.content.metadata.title,description:t.content.metadata.description}})],1),e("div",{staticClass:"section-content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row d-flex flex-wrap align-items-center"},t._l(this.content.metadata.items,(function(a,s){return e("div",{key:s,staticClass:"col-md-2 m-auto pb-4"},[e("AnimateOnVisible",{attrs:{name:"bounce"}},[e("img",{staticClass:"img-responsive mx-auto d-block",attrs:{id:"imgLogo",src:t.getImgUrl(a.img),alt:a.title}}),e("div",{staticClass:"altCaption text-center",attrs:{id:"divAlt"}},[t._v(t._s(a.title))])])],1)})),0)])])],1)},ct=[],dt={name:"Skills",components:{Title:k},props:["content"],methods:{getImgUrl(t){return t}}},ut=dt,pt=(0,u.Z)(ut,lt,ct,!1,null,"54171c82",null),mt=pt.exports,ft=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"projects"}},[e("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[e("Title",{staticClass:"title",attrs:{title:t.content.metadata.title,description:t.content.metadata.description}})],1),e("div",{staticClass:"container-fluid center-block"},[e("article",{staticClass:"content text-center"},t._l(t.content.metadata.items,(function(a,s){return e("AnimateOnVisible",{key:s,staticClass:"timeline mx-auto",attrs:{name:"fadeLeft",duration:.5}},[e("vue-timeline-update",{attrs:{date:new Date(a.date),title:a.title,description:a.content,thumbnail:t.getImgUrl(a.image),color:a.color,category:a.tag,icon:"code"}})],1)})),1)])],1)},vt=[],ht={name:"Projects",props:["content"],components:{Title:k},methods:{getImgUrl(t){return void 0==t||""==t?"":t}}},bt=ht,gt=(0,u.Z)(bt,ft,vt,!1,null,"77472234",null),yt=gt.exports,_t=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",[e("font-awesome-icon",{staticClass:"copyright-icon",attrs:{icon:"copyright"}}),e("span",{staticClass:"ml-2"},[t._v(t._s(t.layout.footer.copyright))])],1),e("SocialBar",{attrs:{links:t.links}})],1)},kt=[],Ct={name:"Footer",props:["links","layout"],components:{SocialBar:L}},wt=Ct,xt=(0,u.Z)(wt,_t,kt,!1,null,"4623ac0c",null),St=xt.exports,Tt=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{customClass:"tooltip"},expression:"{ customClass: 'tooltip' }",modifiers:{hover:!0}}],staticClass:"back-to-top",attrs:{title:"Back to top"},on:{click:t.scrollToTop}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"arrow-up"}})],1)},Vt=[],Ot={name:"BackToTop",methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}},mounted(){window.addEventListener("scroll",(()=>{const t=document.querySelector(".back-to-top");window.pageYOffset>100?t.classList.add("show"):t.classList.remove("show")}))}},Lt=Ot,Pt=(0,u.Z)(Lt,Tt,Vt,!1,null,"259d42ae",null),jt=Pt.exports,Et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact",attrs:{id:"contact"}},[e("div",{staticClass:"contact-container"},[e("Title",{staticClass:"title",attrs:{title:"Contact",description:"If you have any questions or want to work with me, please contact me\n            using the form below."}}),e("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function({handleSubmit:a,dirty:s}){return[e("b-form",{ref:"form",staticClass:"contact-form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),a(t.onSubmit)}}},[e("validation-provider",{attrs:{name:"Name",rules:{required:!0,min:3}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{id:"example-input-group-1",label:"Name","label-for":"name"}},[e("b-form-input",{attrs:{id:"name",name:"name",state:t.getValidationState(a),placeholder:"Enter your name","aria-describedby":"input-1-live-feedback"},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),e("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!0)}),e("validation-provider",{attrs:{name:"Email",rules:{required:!0,email:!0}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{id:"example-input-group-2",label:"Email","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",name:"email",state:t.getValidationState(a),placeholder:"Enter your email address","aria-describedby":"input-2-live-feedback"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),e("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!0)}),e("validation-provider",{attrs:{name:"Message",rules:{required:!0,min:10}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{id:"example-input-group-3",label:"Message","label-for":"message"}},[e("b-form-textarea",{attrs:{id:"message",name:"message",rows:"8",placeholder:"Enter your message",state:t.getValidationState(a),"aria-describedby":"input-3-live-feedback"},model:{value:t.contact.message,callback:function(e){t.$set(t.contact,"message",e)},expression:"contact.message"}}),e("b-form-invalid-feedback",{attrs:{id:"input-3-live-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!0)}),e("div",{staticClass:"d-flex justify-content-between"},[s?e("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:function(e){return t.resetForm()}}},[t._v("Reset")]):t._e(),s?e("div",{staticClass:"mr-3"}):t._e(),e("b-overlay",{staticClass:"d-inline-block w-100",attrs:{show:t.busy,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[e("b-button",{attrs:{type:"submit",variant:"primary",disabled:t.busy}},[t._v("Submit")])],1)],1)],1)]}}])})],1)])},Zt=[],At=a(3079),It={name:"Contact",components:{Title:k},data(){return{contact:{name:null,email:null,message:null},errors:[],busy:!1}},methods:{getValidationState({dirty:t,validated:e,valid:a=null}){return t||e?a:null},resetForm(){this.$nextTick((()=>{this.$refs.observer.reset(),this.$el.querySelector("#name").focus()})),this.contact={name:null,email:null,message:null}},makeToast(t=null,e=null,a=null){this.$bvToast.toast(a,{title:e,variant:t,solid:!0})},onSubmit(){try{this.busy=!0,At.ZP.sendForm("service_kypvvhp","template_exdcnw9",this.$refs.form,"UVnAQQl5nuvaceAa7").then((t=>{console.log(t.text),this.makeToast("success","Message sent successfully","I will get back to you as soon as possible"),this.resetForm(),this.busy=!1}),(t=>{console.log(t.text)}))}catch(t){this.makeToast("danger","Message not sent","Please try again later"),console.log(t)}}}},Dt=It,Mt=(0,u.Z)(Dt,Et,Zt,!1,null,"68e7a2b0",null),Ft=Mt.exports,Ut=a(6860),qt=a.n(Ut);const Nt=qt()("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpZXRkYW5nMDQwN0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRQbTZzZHhsTkpBMWVDSms1QWNYajNlL3RlQU9zRE55V2NiWnFSMmtGL1JqY0VwUU00YzllbSIsImlhdCI6MTY3MDg2MjU4M30.CEFrTlPtjqW7JYXKWyKhpEJcxLPMavT1at_k0fk5_n8"),$t=Nt.bucket({slug:"c227dbb0-7a39-11ed-94e2-e71ac87267e8",read_key:"LLZxQL4k2Ll2vKRvFXVGkFuc3IMJt3oLPij97XSgtN6J8vScS9",write_key:""});var Bt={name:"App",components:{LandingPage:m,Description:z,Experience:rt,Skills:mt,Projects:yt,Footer:St,BackToTop:jt,Contact:Ft},data:()=>({isLoaded:!1,user:{},posts:[],layout:{footer:{copyright:"Viet Anh Dang"},head:{icon:"",description:"Viet Anh Dang",keywords:"Viet Anh Dang",author:"Viet Anh Dang",title:"Viet Anh Dang"}}}),methods:{fetchPosts(){return $t.getObjects({type:"portfolio-contents",props:"slug,title,metadata"})},fetchUser(){return $t.getObjects({type:"portfolio-contents",q:"user-data",props:"slug,title,metadata"})},fetchLayout(){return $t.getObjects({type:"portfolio-contents",q:"layout",props:"slug,title,metadata"})},fetchObjectTypes(){return $t.getObjectTypes()},findSlug(t){return this.posts.find((e=>e.slug===t))},extractFirstObject(t){return null==t.objects?void 0:t.objects[0]},showTabInfo(){let t=this;document.title=t.layout.head.title,document.querySelector('meta[name="description"]').setAttribute("content",t.layout.head.description),document.querySelector('meta[name="keywords"]').setAttribute("content",t.layout.head.keywords),document.querySelector('meta[name="author"]').setAttribute("content",t.layout.head.author),document.querySelector('link[rel="icon"]').setAttribute("href",t.layout.head.icon)}},created(){document.body.classList.add("loading"),Promise.all([this.fetchPosts(),this.fetchUser(),this.fetchLayout()]).then((([t,e,a])=>{e=this.extractFirstObject(e),a=this.extractFirstObject(a),this.posts=t.objects,this.user={name:e.metadata.name,status:e.metadata.status,email:e.metadata.email,phone:e.metadata.phone,city:e.metadata.city,live:e.metadata.live,lang:e.metadata.lang,photo:e.metadata.photo},this.layout={footer:a.metadata.layout.footer,head:a.metadata.layout.head},this.isLoaded=!0,this.$nextTick((()=>{document.body.classList.remove("loading"),this.showTabInfo()}))}))}},Jt=Bt,Wt=(0,u.Z)(Jt,n,o,!1,null,"58327598",null),Qt=Wt.exports,Rt=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{name:t.name,appear:t.appear}},[t.isVisible?e("div",{style:{animationDuration:`${t.duration}s`,transitionDuration:`${t.duration}s`}},[t._t("default")],2):t._e()])],1)},Yt=[];let zt=!1;try{const t=Object.defineProperty({},"passive",{get:()=>zt=!0});window.addEventListener("test",null,t)}catch(ce){console.log("Passive not supported")}var Xt={props:{name:String,appear:{type:Boolean,default:!1},offsetTop:{type:Number,default:0},duration:{type:Number,default:1}},data:()=>({isVisible:!1}),methods:{inViewport(){const t=this.$el.getBoundingClientRect();return t.top<=window.innerHeight-this.offsetTop&&t.left<=window.innerWidth},detectVisibility(){this.isVisible=this.inViewport()}},mounted(){this.$nextTick(this.detectVisibility),window.addEventListener("scroll",this.detectVisibility,!!zt&&{passive:!0}),window.addEventListener("resize",this.detectVisibility,!!zt&&{passive:!0}),window.addEventListener("orientationchange",this.detectVisibility,!!zt&&{passive:!0})},destroyed(){window.removeEventListener("scroll",this.detectVisibility),window.removeEventListener("resize",this.detectVisibility),window.removeEventListener("orientationchange",this.detectVisibility)}},Ht=Xt,Gt=(0,u.Z)(Ht,Rt,Yt,!1,null,null,null),Kt=Gt.exports,te=a(9694),ee=a(5708),ae=a(5505),se=a(8815),ie=a(4024),ne=a(8125),oe=a(8321),re=a(2234),le=a(7749);a(9728);Object.keys(se).forEach((t=>{(0,ee.l7)(t,se[t])})),(0,ee.NC)("en",ae),s["default"].component("ValidationObserver",ee._j),s["default"].component("ValidationProvider",ee.d_),s["default"].use(i.ZPm),s["default"].use(te.Z),s["default"].use(ie.Z),ne.vI.add(oe.rUM,re.pZl,re.Xg5,re.D9H,re.pUg,oe.FPD),s["default"].component("font-awesome-icon",le.GN),s["default"].component("AnimateOnVisible",Kt),s["default"].config.productionTip=!1,new s["default"]({render:t=>t(Qt)}).$mount("#app")}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(e&&e(s);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8508)}));s=a.O(s)})();
//# sourceMappingURL=app.a5f5d67d.js.map