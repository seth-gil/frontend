(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=149},150:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=150},151:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),c=a(25),i=(a(85),a(10)),s=a(11),u=a(13),m=a(12),h=a(14),d=a(20),p=a(37),f=a.n(p),E=a(23),v=a.n(E),g=a(32),b=a.n(g),j=a(38),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={active:1},a.handleSelect=function(e){a.setState({active:e}),console.log(e,a.state.active)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(b.a,{style:{zIndex:10},bg:"light",expand:"lg"},l.a.createElement(b.a.Brand,null,"Animatrix"),l.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(v.a,{className:"justify-content-center",onSelect:function(t){return e.handleSelect(t)}},l.a.createElement(v.a.Item,null,l.a.createElement(j.LinkContainer,{exact:!0,to:"/"},l.a.createElement(v.a.Link,null,"Home"))),l.a.createElement(v.a.Item,null,l.a.createElement(j.LinkContainer,{to:"/new/"},l.a.createElement(v.a.Link,null,"New"))),l.a.createElement(v.a.Item,null,l.a.createElement(j.LinkContainer,{to:"/projects/"},l.a.createElement(v.a.Link,{title:"Projects"},"Projects"))))))}}]),t}(l.a.Component),O=a(31),w=a.n(O),S=a(33),k=a.n(S),C=a(7),x=a.n(C),L=a(30),T=a.n(L),N=a(36),D=a.n(N),A=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).input=l.a.createRef(),e.state={displayText:"No images chosen"},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getDisplayText",value:function(e){var t,a=e.target.files;t=a.length?a.length>1?"".concat(a.length," images"):a[0].name:"No images chosen",this.setState({displayText:t})}},{key:"render",value:function(){var e=this;return l.a.createElement(x.a.Group,null,l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{ref:this.input,className:"custom-file-input",type:"file",name:"request",multiple:!0,accept:"image/*",onChange:function(t){e.getDisplayText(t),e.props.onChange(t)}}),l.a.createElement("label",{className:"custom-file-label"},this.state.displayText)))}}]),t}(l.a.Component),I="http://ec2-54-88-231-19.compute-1.amazonaws.com",G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setFrames=function(e){a.setState({frames:e})},a.state={name:"default",description:"default",files:"default",framerate:"default",frames:[],redirect:null,pendingSubmit:!1,submitted:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"shrinkImages",value:function(e){var t,a,n=Array(e.length),l=Array(e.length),r=Array(e.length),o=this;t=document.createElement("canvas"),a=t.getContext("2d"),t.width=600,t.height=450;for(var c=0;c<e.length;c++)!function(e,c){n[c]=new FileReader,n[c].onloadend=function(){r[c]=document.createElement("img"),r[c].src=this.result,T()(r[c]).on("load",function(){a.clearRect(0,0,t.width,t.height),a.drawImage(this,0,0,600,450),l[c]={time:e.lastModified,frame:t.toDataURL("image/jpeg",.5)},o.setFrames(l)})},n[c].readAsDataURL(e)}(e[c],c)}},{key:"handleFileSelect",value:function(e){this.setState({files:e.target.files,frames:Array(e.target.files.length)}),this.shrinkImages(e.target.files)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({pendingSubmit:!0})}},{key:"componentDidUpdate",value:function(){if(this.state.files.length==this.state.frames.length&&this.state.pendingSubmit&&!this.state.submitted){var e=this,t=this.state.frames;t=t.sort(function(e,t){return e.time>t.time?1:t.time>e.time?-1:void 0}).map(function(e){return e.frame}),console.log(t),fetch(I+"/api/v1/project",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,description:this.state.description,framerate:this.state.framerate,frames:t})}).then(function(t){t.text().then(function(t){console.log(t),e.setState({redirect:"/project/".concat(t)})})}).catch(function(e){console.log("Error",e)}),this.setState({submitted:!0})}}},{key:"render",value:function(){var e=this;return l.a.createElement("section",null,this.state.redirect?l.a.createElement(d.c,{to:this.state.redirect}):this.state.pendingSubmit?l.a.createElement("p",null,"Submitting data..."):l.a.createElement(x.a,{onSubmit:this.handleSubmit.bind(this)},l.a.createElement(x.a.Group,null,l.a.createElement(x.a.Label,null,"What do you want to call your new project?"),l.a.createElement(x.a.Control,{onChange:function(t){return e.setState({name:t.target.value})},type:"text",placeholder:"Enter project name"})),l.a.createElement(x.a.Group,null,l.a.createElement(x.a.Label,null,"Describe your new project"),l.a.createElement(x.a.Control,{onChange:function(t){return e.setState({description:t.target.value})},as:"textarea",rows:"3",placeholder:"Enter project description"})),l.a.createElement(x.a.Row,null,l.a.createElement(D.a,{sm:!0},l.a.createElement(x.a.Group,null,l.a.createElement(x.a.Label,null,"Choose images"),l.a.createElement(A,{onChange:this.handleFileSelect.bind(this)}))),l.a.createElement(D.a,{sm:!0},l.a.createElement(x.a.Group,null,l.a.createElement(x.a.Label,null,"Choose framerate (fps)"),l.a.createElement(x.a.Control,{as:"select",onChange:function(t){var a=t.target;e.setState({framerate:a.options[a.selectedIndex].value})}},l.a.createElement("option",{value:"15"},"-- Please select --")," ",l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"15"},"15"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"30"},"30"))))),l.a.createElement(x.a.Group,null,l.a.createElement(w.a,{type:"submit"},"Create"))))}}]),t}(l.a.Component),B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={modalShow:!1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleShow",value:function(){this.setState({modalShow:!0})}},{key:"handleClose",value:function(){this.setState({modalShow:!1})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("section",{style:{textAlign:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%"}},l.a.createElement("h1",null,"Welcome to Animatrix!"),l.a.createElement("h4",null,"The free online stop-motion animation software."),l.a.createElement("br",null),l.a.createElement(w.a,{variant:"secondary",onClick:this.handleShow.bind(this)},"Get started")),l.a.createElement(k.a,{show:this.state.modalShow,onHide:this.handleClose.bind(this)},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Let's get started!")),l.a.createElement(k.a.Body,null,l.a.createElement(G,null))))}}]),t}(l.a.Component),F=a(79),R=a(28),U=a.n(R);function _(e){return l.a.createElement(c.Link,{style:{color:"inherit",textDecoration:"none"},to:"/project/".concat(e._id.$oid)},l.a.createElement(U.a,null,l.a.createElement(U.a.Img,{variant:"top",src:a(149)("./".concat(e._id.$oid,"/0.jpg"))}),l.a.createElement(U.a.Body,null,l.a.createElement(U.a.Title,null,e.name),l.a.createElement(U.a.Text,null,e.description))))}var M=a(78),P=a.n(M),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(I+"/api/v1/projects",{method:"GET"}).then(function(t){t.json().then(function(t){console.log(t),e.setState({data:t})})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(P.a,null,this.state.data?this.state.data.map(function(e,t){return l.a.createElement(_,Object(F.a)({},e,{key:t}),null)}):l.a.createElement("p",null,"Loading projects...")))}}]),t}(l.a.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={id:e.match.params.id,loaded:!1,data:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.getJSON("".concat(I,"/api/v1/project/").concat(this.state.id)).done(function(t){console.log(t),t.id=t._id.$oid,e.setState({data:t,loaded:!0})}).fail(function(e){console.error(e)})}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement(f.a,{style:{maxWidth:"600px"}},this.state.loaded?l.a.createElement("section",null,l.a.createElement("section",null,l.a.createElement("h1",null,this.state.data.name),l.a.createElement("p",null,this.state.data.description),l.a.createElement("hr",null),l.a.createElement("br",null)),l.a.createElement("section",{style:{marginTop:"10px"}},l.a.createElement("p",null,"Preview:"),l.a.createElement("video",{style:{width:"100%"},controls:!0,className:"embed-responsive-item"},l.a.createElement("source",{src:a(150)("".concat(this.state.id,"/preview.mp4")),type:"video/mp4"})))):l.a.createElement("p",null,"Loading project data..."))}}]),t}(l.a.Component),$=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement(f.a,{style:{marginTop:"15px"}},l.a.createElement(d.d,{path:"/",exact:!0,component:B}),l.a.createElement(d.d,{path:"/projects/",component:W}),l.a.createElement(d.d,{path:"/project/:id/",component:J}),l.a.createElement(d.d,{path:"/new/",component:G})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.BrowserRouter,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(151)}},[[80,1,2]]]);
//# sourceMappingURL=main.189529d7.chunk.js.map