(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),s=n.n(c),i=n(47),u="csrf-token",o="CSRF-Token";function j(e){var t;return null===(t=document.cookie.split("; ").find((function(t){return(null===t||void 0===t?void 0:t.split("=")[0])===e})))||void 0===t?void 0:t.split("=")[1]}var d=n.n(i).a.create({headers:[{name:o,value:j(u)}].reduce((function(e,t){return t.value&&(e[t.name]=t.value),e}),{})}),b=d,l=n(28),h=n(82),O=n(7),p=n(1);var v=function(e){var t=e.a,n=e.onSubmit,r={a:t?t.a:""};return Object(p.jsx)(O.c,{initialValues:r,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"a",placeholder:"A"}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},x=n(6);var f=function(){var e=Object(l.b)(),t=Object(x.f)(),n=Object(h.a)((function(e){return b.post("/api/v1/as",e)}),{onSuccess:function(){e.invalidateQueries("as")}});return Object(p.jsx)(v,{onSubmit:function(e,r){var a=r.setSubmitting;n.mutate(e),null===a||void 0===a||a(!1),t.push("/as")}})},m=n(81);function g(e){var t=e.a,n=e.handleEdit,r=e.handleDelete,a=e.handleDetail;return Object(p.jsxs)(p.Fragment,{children:[t.a,Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){return a(t)},children:"detail"}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(p.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"delete"})]})}var S=function(){var e,t,n=Object(x.f)(),r=Object(l.b)(),a=Object(m.a)("as",(function(){return b.get("/api/v1/as").then((function(e){return e.data}))})),c=Object(h.a)((function(e){var t=e.id;return b.delete("/api/v1/as/".concat(t))}),{onSuccess:function(){r.invalidateQueries("as")}}),s=function(e){var t=e.id;n.push("/as/update/".concat(t))},i=function(e){var t=e.id;c.mutate({id:t})},u=function(e){var t=e.id;n.push("/as/detail/".concat(t))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:[null===(e=a.data)||void 0===e?void 0:e.length," as"]}),Object(p.jsx)("ul",{children:null===(t=a.data)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(g,{a:e,handleDelete:i,handleEdit:s,handleDetail:u})},e.id)}))})]})};var w=function(){var e=Object(x.g)().id,t=Object(m.a)(["as",e],(function(){return b.get("/api/v1/as/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(p.jsx)("div",{children:"Loading..."});var r=n;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:r.a}),Object(p.jsx)("br",{})]})};var y=function(){var e=Object(x.g)().id,t=Object(l.b)(),n=Object(x.f)(),r=Object(m.a)(["as",e],(function(){return b.get("/api/v1/as/".concat(e)).then((function(e){return e.data}))})),a=r.data,c=r.isLoading,s=Object(h.a)((function(t){return b.put("/api/v1/as/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("as")}});if(c)return Object(p.jsx)("div",{children:"Loading..."});var i=a;return Object(p.jsx)(v,{a:i,onSubmit:function(e,t){var r=t.setSubmitting;s.mutate(e),null===r||void 0===r||r(!1),n.push("/as")}})};var k=function(e){var t=e.user,n=e.onSubmit,r={username:t?t.username:"",passwordHash:t?t.passwordHash:""};return Object(p.jsx)(O.c,{initialValues:r,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"text",name:"passwordHash",placeholder:"PasswordHash"}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var C=function(){var e=Object(l.b)(),t=Object(x.f)(),n=Object(h.a)((function(e){return b.post("/api/v1/users",e)}),{onSuccess:function(){e.invalidateQueries("users")}});return Object(p.jsx)(k,{onSubmit:function(e,r){var a=r.setSubmitting;n.mutate(e),null===a||void 0===a||a(!1),t.push("/users")}})};function L(e){var t=e.user,n=e.handleEdit,r=e.handleDelete,a=e.handleDetail;return Object(p.jsxs)(p.Fragment,{children:[t.username,Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){return a(t)},children:"detail"}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(p.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"delete"})]})}var D=function(){var e,t,n=Object(x.f)(),r=Object(l.b)(),a=Object(m.a)("users",(function(){return b.get("/api/v1/users").then((function(e){return e.data}))})),c=Object(h.a)((function(e){var t=e.id;return b.delete("/api/v1/users/".concat(t))}),{onSuccess:function(){r.invalidateQueries("users")}}),s=function(e){var t=e.id;n.push("/users/update/".concat(t))},i=function(e){var t=e.id;c.mutate({id:t})},u=function(e){var t=e.id;n.push("/users/detail/".concat(t))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:[null===(e=a.data)||void 0===e?void 0:e.length," users"]}),Object(p.jsx)("ul",{children:null===(t=a.data)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(L,{user:e,handleDelete:i,handleEdit:s,handleDetail:u})},e.id)}))})]})};var E=function(){var e=Object(x.g)().id,t=Object(m.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(p.jsx)("div",{children:"Loading..."});var r=n;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:r.username}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:r.passwordHash}),Object(p.jsx)("br",{})]})};var Q=function(){var e=Object(x.g)().id,t=Object(l.b)(),n=Object(x.f)(),r=Object(m.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),a=r.data,c=r.isLoading,s=Object(h.a)((function(t){return b.put("/api/v1/users/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("users")}});if(c)return Object(p.jsx)("div",{children:"Loading..."});var i=a;return Object(p.jsx)(k,{user:i,onSubmit:function(e,t){var r=t.setSubmitting;s.mutate(e),null===r||void 0===r||r(!1),n.push("/users")}})},F=n(23),H=n.n(F),U=n(30),R=n(31);var A=function(){var e=Object(r.useState)(""),t=Object(R.a)(e,2),n=t[0],a=t[1],c=Object(x.f)(),s=Object(l.b)(),i=function(e,t){var n=t.setSubmitting;if(e.response&&e.response.data){var r=e.response.data.error;r&&a(r)}null===n||void 0===n||n(!1)},u=function(){var e=Object(U.a)(H.a.mark((function e(t,n){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/login",t);case 4:return null===r||void 0===r||r(!1),e.next=7,s.invalidateQueries("user");case 7:c.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),i(e.t0,{setSubmitting:r});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)(O.c,{initialValues:{username:"",password:""},validate:function(){return{}},onSubmit:u,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),n&&Object(p.jsx)("div",{children:n}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Login"})]})}})};var N=function(){var e=Object(r.useState)(""),t=Object(R.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(U.a)(H.a.mark((function e(t,n){var r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/register",t);case 4:null===r||void 0===r||r(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response&&e.t0.response.data&&(c=e.t0.response.data.error)&&a(c),null===r||void 0===r||r(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)(O.c,{initialValues:{username:"",email:"",password:"",passwordConfirm:""},validate:function(){return{}},onSubmit:c,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"text",name:"email",placeholder:"Email"}),Object(p.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),Object(p.jsx)(O.a,{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),n&&Object(p.jsx)("div",{children:n}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Register"})]})}})},V=n(9);var P=function(){return Object(m.a)("user",(function(){return b.get("/auth/me")}),{retry:!1}).data,Object(r.useEffect)((function(){j(u)||d.get("/auth/csrf").then((function(){d.defaults.headers[o]=j(u)})).catch((function(e){console.warn("Received error while fetching CSRF token :",e)}))}),[]),Object(p.jsxs)(V.a,{children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"flex",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)(V.b,{to:"/",children:"Home"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(V.b,{to:"/login",children:"Login"}),Object(p.jsx)("br",{}),Object(p.jsx)(V.b,{to:"/register",children:"Register"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(V.b,{to:"/as",children:"As"}),Object(p.jsx)("br",{}),Object(p.jsx)(V.b,{to:"/as/create",children:"Create a A"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(V.b,{to:"/users",children:"Users"}),Object(p.jsx)("br",{}),Object(p.jsx)(V.b,{to:"/users/create",children:"Create a User"}),Object(p.jsx)("br",{})]})]})}),Object(p.jsxs)("main",{children:[Object(p.jsx)(x.a,{path:"/as",children:Object(p.jsx)("h1",{children:"As"})}),Object(p.jsx)(x.a,{path:"/users",children:Object(p.jsx)("h1",{children:"Users"})}),Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{path:"/as/create",component:f}),Object(p.jsx)(x.a,{path:"/as/update/:id",component:y}),Object(p.jsx)(x.a,{path:"/as/detail/:id",component:w}),Object(p.jsx)(x.a,{path:"/as",component:S}),",",Object(p.jsx)(x.a,{path:"/users/create",component:C}),Object(p.jsx)(x.a,{path:"/users/update/:id",component:Q}),Object(p.jsx)(x.a,{path:"/users/detail/:id",component:E}),Object(p.jsx)(x.a,{path:"/users",component:D}),Object(p.jsx)(x.a,{path:"/login",component:A}),Object(p.jsx)(x.a,{path:"/register",component:N})]})]})]})},J=new(n(80).a);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(l.a,{client:J,children:Object(p.jsx)(P,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.0212c5cd.chunk.js.map