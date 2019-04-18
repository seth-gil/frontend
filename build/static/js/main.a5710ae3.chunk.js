(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),r=a.n(o),c=a(31),i=(a(86),a(10)),s=a(11),u=a(13),m=a(12),h=a(14),p=a(24),d=a(79),f=a.n(d),E=a(22),b=a.n(E),j=a(33),v=a.n(j),g=a(38),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={active:1},a.handleSelect=function(e){a.setState({active:e}),console.log(e,a.state.active)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(v.a,{style:{zIndex:10},bg:"light",expand:"lg"},l.a.createElement(v.a.Brand,null,"Animatrix"),l.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(b.a,{className:"justify-content-center",onSelect:function(t){return e.handleSelect(t)}},l.a.createElement(b.a.Item,null,l.a.createElement(g.LinkContainer,{exact:!0,to:"/"},l.a.createElement(b.a.Link,null,"Home"))),l.a.createElement(b.a.Item,null,l.a.createElement(g.LinkContainer,{to:"/upload/"},l.a.createElement(b.a.Link,null,"Upload"))),l.a.createElement(b.a.Item,null,l.a.createElement(g.LinkContainer,{to:"/projects/"},l.a.createElement(b.a.Link,{title:"Projects"},"Projects"))))))}}]),t}(l.a.Component),O=a(26),w=a.n(O),S=a(34),k=a.n(S),C=a(8),x=a.n(C),L=a(25),T=a.n(L),A=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={modalShow:!1},e.name=l.a.createRef(),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),T.a.post("http://192.168.1.113:5000/api/v1/project",{name:this.name}).done(function(e){var a=T.a.parseJSON(e);t.props.history.push("/project/".concat(a.id)),console.log("response",a)}).fail(function(e){console.error(e)})}},{key:"handleShow",value:function(){this.setState({modalShow:!0})}},{key:"handleClose",value:function(){this.setState({modalShow:!1})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("section",{style:{textAlign:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%"}},l.a.createElement("h1",null,"Welcome to Animatrix!"),l.a.createElement("h4",null,"The free online stop-motion animation software."),l.a.createElement("br",null),l.a.createElement(w.a,{variant:"secondary",onClick:this.handleShow.bind(this)},"Get started")),l.a.createElement(k.a,{show:this.state.modalShow,onHide:this.handleClose.bind(this)},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Let's get started!")),l.a.createElement(k.a.Body,null,l.a.createElement(x.a,{onSubmit:this.handleSubmit.bind(this)},l.a.createElement(x.a.Group,null,l.a.createElement(x.a.Label,null,"What do you want to call your new project?"),l.a.createElement(x.a.Control,{ref:this.name,type:"text",placeholder:"Enter project name"})),l.a.createElement(x.a.Group,null,l.a.createElement(w.a,{type:"submit"},"Create"))))))}}]),t}(l.a.Component),N=a(32),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).input=l.a.createRef(),e.state={displayText:"No images chosen"},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getDisplayText",value:function(e){var t,a=e.target.files;t=a.length?a.length>1?"".concat(a.length," images"):a[0].name:"No images chosen",this.setState({displayText:t})}},{key:"render",value:function(){var e=this;return l.a.createElement(x.a.Group,null,l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{ref:this.input,className:"custom-file-input",type:"file",name:"request",multiple:!0,accept:"image/*",onChange:function(t){e.getDisplayText(t),e.props.change(t)}}),l.a.createElement("label",{className:"custom-file-label"},this.state.displayText)))}}]),t}(l.a.Component),I=a(37),M=a.n(I),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={files:null,id:"default"},a.handleFileSelect=function(e){console.log("e.t.f",e.target.files),a.setState({files:e.target.files})},a.handleSubmit=function(e){Object(N.a)(Object(N.a)(a));e.preventDefault(),console.log(a.state.files);for(var t=new FormData,n=a.state.files,l=0;l<n.length;l++)t.append("files[]",n.item(l),l+".jpg");t.append("id",a.state.id),fetch("http://192.168.1.113:5000/api/v1/upload",{method:"POST",body:t}).then(function(){console.log("Success")}).catch(function(e){console.log("Error",e)})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleProjectSelect",value:function(e){var t=e.target;this.setState({id:t.options[t.selectedIndex].value})}},{key:"render",value:function(){return console.log(this.state.id),l.a.createElement("section",null,l.a.createElement("h2",null,"Upload Images"),l.a.createElement("p",null,"Choose a project and add some media to get started."),l.a.createElement(x.a,{onSubmit:this.handleSubmit.bind(this),encType:"multipart/form-data"},l.a.createElement(x.a.Row,null,l.a.createElement(M.a,{sm:!0},l.a.createElement(x.a.Group,null,l.a.createElement(x.a.Label,null,"Choose images"),l.a.createElement(D,{change:this.handleFileSelect.bind(this)}))),l.a.createElement(M.a,{sm:!0},l.a.createElement(x.a.Group,null,l.a.createElement(x.a.Label,null,"Choose project"),l.a.createElement(x.a.Control,{as:"select",onChange:this.handleProjectSelect.bind(this)},l.a.createElement("option",{value:"default"},"-- Please select --"),l.a.createElement("option",{value:"12300"},"My First Project"),l.a.createElement("option",{value:"23439"},"Lego Movie"))))),l.a.createElement(w.a,{variant:"primary",type:"submit"},"Add Media")))}}]),t}(l.a.Component),B=a(80),G=a(29),F=a.n(G);function J(e){return l.a.createElement(F.a,null,l.a.createElement(F.a.Img,{variant:"top",src:e.thumbnail}),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,e.name),l.a.createElement(F.a.Text,null,e.description),l.a.createElement(w.a,{variant:"secondary"},"Go to project")))}var R=a(78),W=a.n(R),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){T.a.ajax({url:""})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(W.a,null,[{id:12393,name:"My First Lego Movie",thumbnail:"https://www.wctrib.com/sites/default/files/styles/16x9_620/public/fieldimages/0122/lego-96923822-1a72-11e9-8813-cb9dec761e73_0.jpg?itok=S18NDKeo",description:"A mildly boring film about some lego figures"},{id:34923,name:"Another Project",thumbnail:"https://localtvwjw.files.wordpress.com/2018/11/31224231718_152a54689b_z.jpg?quality=85&strip=all&w=640",description:"Much of the same daft content. Surprisingly charming formality."}].map(function(e,t){return l.a.createElement(J,Object(B.a)({},e,{key:t}),null)})))}}]),t}(l.a.Component),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={id:e.match.params.id,loaded:!1,data:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.getJSON("http://192.168.1.113:5000/api/v1/project/".concat(this.state.id)).done(function(t){e.setState({data:t,loaded:!0})}).fail(function(e){console.error(e)})}},{key:"render",value:function(){return l.a.createElement("main",null,this.state.loaded?l.a.createElement("section",null,l.a.createElement("h1",null),l.a.createElement("p",null),l.a.createElement("hr",null)):l.a.createElement("p",null,"Loading project data..."))}}]),t}(l.a.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement(f.a,{style:{marginTop:"15px"}},l.a.createElement(p.d,{path:"/",exact:!0,component:A}),l.a.createElement(p.d,{path:"/upload/",component:P}),l.a.createElement(p.d,{path:"/projects/",component:_}),l.a.createElement(p.d,{path:"/project/:id/",component:H})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(c.BrowserRouter,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(150)}},[[81,1,2]]]);
//# sourceMappingURL=main.a5710ae3.chunk.js.map