(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{190:function(e,t,a){e.exports=a(406)},224:function(e,t){},227:function(e,t){},229:function(e,t){},262:function(e,t){},263:function(e,t){},312:function(e,t){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(1),s=a.n(i),o=a(6),u=a(4),d=a(186),m=a.n(d).a.create({baseURL:"http://13.58.6.98:3334"});a(9);var p=function(e){var t=e.food;return r.a.createElement("li",null," ",t.food," ")},E=a(21),v=a(34),f=a(187),h=a.n(f);var b=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],d=Object(n.useState)(""),m=Object(u.a)(d,2),p=m[0],E=m[1],v=Object(n.useState)(""),f=Object(u.a)(v,2),h=f[0],b=f[1];function g(){return(g=Object(o.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t({username:l,phone:p,deliveryaddress:h});case 3:i(""),E(""),b("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement("form",{onSubmit:function(e){return g.apply(this,arguments)}},r.a.createElement("input",{type:"hidden",id:"request_type",name:"request_type"}),r.a.createElement("div",null,r.a.createElement("label",null,"Your Name")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"username",name:"username",required:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Your phone")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"phone",name:"phone",required:!0,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Delivery address")),r.a.createElement("div",null,r.a.createElement("textarea",{rows:"5",id:"deliveryaddress",name:"deliveryaddress",required:!0,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Place your order")))))};var g=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1];function d(){return(d=Object(o.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t({passphrase:l});case 3:i("");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){})),r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement("form",{onSubmit:function(e){return d.apply(this,arguments)}},r.a.createElement("input",{type:"hidden",id:"deliveryaddress",name:"deliveryaddress"}),r.a.createElement("div",null,r.a.createElement("label",null,"Passphrase")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"passphrase",name:"passphrase",required:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Payment")))))},y=a(50);var O=function(e){var t=e.orderstring;if(null!==t&&void 0!==t){t=t.split("&");var a={};a.recipientAddress=t[0].split("=")[1],a.amount=t[1].split("=")[1],a.name=t[2].split("=")[1],a.foodtype=t[3].split("=")[1],a.timestamp=t[4].split("=")[1],a.username=t[5].split("=")[1],a.phone=t[6].split("=")[1],a.deliveryaddress=t[7].split("=")[1]}var c=Object(n.useState)([]),i=Object(u.a)(c,2),d=i[0],p=(i[1],Object(n.useState)([])),E=Object(u.a)(p,2),v=E[0],f=E[1];function h(){return(h=Object(o.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.sign(t),e.next=3,m.post("/payment",JSON.stringify({transaction:d,networkid:"identifier"}));case 3:v=e.sent,f(v),a=r.a.createElement("div",{className:"recipes_topic"},"Transaction result: ",v.data.status,r.a.createElement("br",null),"Transaction id: ",v.data.response.transaction.id,r.a.createElement("br",null),"Paid Amount: LSK ",y.utils.convertBeddowsToLSK(v.data.response.transaction.amount),r.a.createElement("br",null),"Payer LSK address: ",v.data.response.transaction.senderId,r.a.createElement("br",null),"Restaurant LSK address: ",v.data.response.transaction.recipientId,r.a.createElement("br",null),"Broadcast info: ",v.data.response.broadcastInfo.data.message,r.a.createElement("div",{className:"clear"})),l.a.render(a,document.getElementById("content"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return d=e.transaction,r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement(g,{onSubmit:function(e){return h.apply(this,arguments)}})))};var j=function(e){var t=document.location.pathname.split("/")[2],a=Object(n.useState)([]),c=Object(u.a)(a,2),i=c[0],d=c[1],p=Object(n.useState)([]),E=Object(u.a)(p,2),v=E[0],f=E[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),j=y[0],w=y[1],S=Object(n.useState)([]),N=Object(u.a)(S,2),x=N[0],k=N[1];function q(e){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(o.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.request_type=t,e.next=3,m.post("/storeQrCode",a);case 3:v=e.sent,f(v),x=v.data.response.transaction,k(x),j="recipient=".concat(v.data.response.qrcode.split("&")[0].split("=")[1]).concat("&amount=").concat(v.data.response.qrcode.split("&")[1].split("=")[1]).concat("&food=").concat(v.data.response.qrcode.split("&")[2].split("=")[1]).concat("&foodtype=").concat(v.data.response.qrcode.split("&")[3].split("=")[1]).concat("&timestamp=").concat(v.data.response.qrcode.split("&")[4].split("=")[1]).concat("&username=").concat(v.data.response.qrcode.split("&")[5].split("=")[1]).concat("&phone=").concat(v.data.response.qrcode.split("&")[6].split("=")[1]).concat("&deliveryaddress=").concat(v.data.qrcode.response.split("&")[7].split("=")[1]),w(j),n=r.a.createElement("div",{className:"recipes_topic"},r.a.createElement("img",{src:"../".concat(i.img),width:"200",height:"200",alt:""}),r.a.createElement("br",null),r.a.createElement("p",null,"Food description:  ",i.description),r.a.createElement("p",null,"Amount: ",i.amount),r.a.createElement("p",null,v.data.status,r.a.createElement("br",null),r.a.createElement("label",null,"Point the camera of your phone to the qr code. Once loaded proceed with the payment"),r.a.createElement("br",null),r.a.createElement("div",{id:"divqrcode"},r.a.createElement("div",{id:"divqrcode"},r.a.createElement(h.a,{value:v.data.response.qrcode})))),r.a.createElement(O,{orderstring:v.data.response.orderstring,transaction:x,onSubmit:q}),r.a.createElement("div",{className:"clear"})),l.a.render(n,document.getElementById("content"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading food"),e.next=3,m.get("/foodDetail/".concat(t));case 3:a=e.sent,i=a.data.response,d(i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement("img",{src:"../".concat(i.img),width:"200",height:"200",alt:""}),r.a.createElement("div",{className:"recipes_topic"},r.a.createElement("p",null,i.food,r.a.createElement("br",null),r.a.createElement("p",{style:{width:300}},"Food description: ",i.description),r.a.createElement("br",null),"Amount: ",i.amount),r.a.createElement("div",{className:"clear"})),r.a.createElement(b,{onSubmit:function(e){return I.apply(this,arguments)}})))};var w=function(e){var t=e.food;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.b,{exact:!0,to:"/FoodOrder/".concat(t.type)},r.a.createElement("div",{className:"recipes_topic"},r.a.createElement("img",{src:t.img,width:"72",height:"72",alt:""}),r.a.createElement("p",null,r.a.createElement("span",{className:"headline"},t.food)," ",r.a.createElement("br",null),t.description),r.a.createElement("div",{className:"clear"}))),r.a.createElement(v.a,{path:"/FoodOrder/".concat(t.type),key:t.type,component:j}))};var S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading foods"),e.next=3,m.get("/list");case 3:t=e.sent,a=t.data.result,c(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"leftPan"},r.a.createElement("div",{id:"welcome"},r.a.createElement("h2",null),r.a.createElement("img",{src:"images/img_welcome.jpg",width:"72",height:"72",alt:""}),r.a.createElement("p",null,r.a.createElement("span",{className:"headline"},"Enjoy delicious food"),r.a.createElement("br",null),"Seafood, meat, barbecue, menu and delicious dessert created for you. Payment and transactions details managed by Lisk Restaurant sidechain "),r.a.createElement("div",{className:"clear"})),r.a.createElement("div",{id:"services"},r.a.createElement("h2",null),r.a.createElement("p",{className:"headline2"},"You have the option to choose the following entrances."),r.a.createElement("ul",null,a.filter((function(e){return 1===e.category})).map((function(e){return r.a.createElement(p,{key:e.type,food:e})}))),r.a.createElement("div",{className:"clear"}),r.a.createElement("br",null),r.a.createElement("p",{className:"headline2"},"You have the option to choose the following menu."),r.a.createElement("ul",null,a.filter((function(e){return 2===e.category})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{key:e.type,food:e}),r.a.createElement("br",null))}))),r.a.createElement("div",{className:"clear"}),r.a.createElement("br",null),r.a.createElement("p",{className:"headline2"},"You have the option to choose the following desserts."),r.a.createElement("ul",null,a.filter((function(e){return 3===e.category})).map((function(e){return r.a.createElement(p,{key:e.type,food:e})}))),r.a.createElement("div",{className:"clear"}))),r.a.createElement("div",{id:"rightPan"},r.a.createElement("div",{id:"recipes"},r.a.createElement("h2",null),a.map((function(e){return r.a.createElement(w,{key:e.type,food:e})})))),r.a.createElement("div",{className:"clear",id:"end"})))};var N=function(){return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"headline2",align:"center"},"Our History"),r.a.createElement("div",{className:"headline2",align:"center"},r.a.createElement("p",null," Luxury restaurant was created as a Proof of Concept for Lisk sidechain blockchain.")),r.a.createElement("div",{className:"headline2",align:"center"},r.a.createElement("p",null,"The goal is to demonstrate how easy can be to create a restaurant based backend that consumes the restaurant sidechain.")),r.a.createElement("div",{className:"headline2",align:"center"},r.a.createElement("p",null,"This site represents a sea food luxury restaurant. It's possible to list all the food offered by this restaurant in the home page.")),r.a.createElement("div",{className:"headline2",align:"center"},"Also, it is possible to click on a food preference and command a desired food option."),r.a.createElement("div",{className:"headline2",align:"center"},"Once commanded the food then a FoodTransaction will be created in the restaurant sidechain,",r.a.createElement("br",null),"the transaction value will be placed on the restaurant Lisk address and the value will be debited from the sender wallet."),r.a.createElement("div",{className:"clear"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))};var x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading foods"),e.next=3,m.get("/list");case 3:t=e.sent,a=t.data.result,c(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"rightPan"},r.a.createElement("ul",{style:{marginLeft:280,width:300}},a.filter((function(e){return 2===e.category})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{key:e.type,food:e}),r.a.createElement("br",null))})))),r.a.createElement("div",{className:"clear",id:"end"}),r.a.createElement("br",null),r.a.createElement("br",null)))},k=a(401);var q=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],d=Object(n.useState)(""),m=Object(u.a)(d,2),p=m[0],E=m[1],v=Object(n.useState)(""),f=Object(u.a)(v,2),h=f[0],b=f[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),O=y[0],j=y[1];function w(){return(w=Object(o.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=k.encryptPassphraseWithPassword(p,"luxuryRestaurant"),e.next=4,t({username:l,phone:h,deliveryaddress:O,encryptedPassphrase:n});case 4:i(""),b(""),j(""),E("");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement("form",{onSubmit:function(e){return w.apply(this,arguments)}},r.a.createElement("input",{type:"hidden",id:"request_type",name:"request_type"}),r.a.createElement("div",null,r.a.createElement("label",null,"Your Name")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"username",name:"username",required:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Your phone")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"phone",name:"phone",required:!0,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Delivery address")),r.a.createElement("div",null,r.a.createElement("textarea",{rows:"5",id:"deliveryaddress",name:"deliveryaddress",required:!0,onChange:function(e){return j(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Your Lisk Passphrase")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"passphrase",name:"passphrase",required:!0,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"copy this passphrase and test above if desired: wagon stock borrow episode laundry kitten salute link globe zero feed marble")),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Order")))))},C=a(50);var I=function(e){var t=document.location.pathname.split("/")[2],a=Object(n.useState)([]),c=Object(u.a)(a,2),i=c[0],d=c[1],p=Object(n.useState)([]),E=Object(u.a)(p,2),v=E[0],f=E[1];function h(){return(h=Object(o.a)(s.a.mark((function e(a){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.request_type=t,a.userid=1,e.next=4,m.post("/userRequest",a);case 4:v=e.sent,f(v),"Transaction result"===v.data.status?(n=r.a.createElement("div",{className:"recipes_topic"},r.a.createElement("img",{src:"../".concat(i.img),width:"200",height:"200",alt:""}),r.a.createElement("br",null),r.a.createElement("p",null,"Food description:  ",i.description),r.a.createElement("p",null,v.data.status,r.a.createElement("br",null),"Transaction id: ",v.data.response.transaction.id,r.a.createElement("br",null),"Paid Amount: LSK ",C.utils.convertBeddowsToLSK(v.data.response.transaction.amount),r.a.createElement("br",null),"Payer address: ",v.data.response.transaction.senderId,r.a.createElement("br",null),"Restaurant address: ",v.data.response.transaction.recipientId,r.a.createElement("br",null),"Broadcast info: ",v.data.response.broadcastInfo.data.message),r.a.createElement("div",{className:"clear"})),l.a.render(n,document.getElementById("content"))):(c=r.a.createElement("div",{className:"recipes_topic"},r.a.createElement("img",{src:"../".concat(i.img),width:"200",height:"200",alt:""}),r.a.createElement("br",null),r.a.createElement("p",null,"Food description:  ",i.description),r.a.createElement("p",null,v.data.status,r.a.createElement("br",null),v.data.response.transaction,r.a.createElement("br",null),"Broadcast info: ",v.data.response.broadcastInfo.data.message),r.a.createElement("div",{className:"clear"})),l.a.render(c,document.getElementById("content")));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading food"),e.next=3,m.get("/foodDetail/".concat(t));case 3:a=e.sent,i=a.data.response,d(i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement("img",{src:"../".concat(i.img),width:"200",height:"200",alt:""}),r.a.createElement("div",{className:"recipes_topic"},r.a.createElement("p",null,i.food,r.a.createElement("br",null),r.a.createElement("p",{style:{width:300}},"Food description: ",i.description),r.a.createElement("br",null),"Amount: ",i.amount),r.a.createElement("div",{className:"clear"})),r.a.createElement(q,{onSubmit:function(e){return h.apply(this,arguments)}})))};var _=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],d=Object(n.useState)(""),m=Object(u.a)(d,2),p=m[0],E=m[1],v=Object(n.useState)(""),f=Object(u.a)(v,2),h=f[0],b=f[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),O=y[0],j=y[1];function w(){return(w=Object(o.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t({transactionId:O,amount:l,recipientAddress:p,password:h});case 3:i(""),E(""),b(""),j("");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){})),r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement("form",{onSubmit:function(e){return w.apply(this,arguments)}},r.a.createElement("input",{type:"hidden",id:"request_type",name:"request_type"}),r.a.createElement("div",null,r.a.createElement("label",null,"Transaction id")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"transactionId",name:"transactionId",required:!0,onChange:function(e){return j(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"LSK Amount")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"amount",name:"amount",required:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"LSK Recipient address to be refunded")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"recipientAddress",name:"recipientAddress",required:!0,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Password")),r.a.createElement("div",null,r.a.createElement("input",{type:"password",id:"password",name:"password",required:!0,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Refund")))))},L=a(50);var P=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],i=a[1];function d(){return(d=Object(o.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/refund",t);case 2:c=e.sent,i(c),a=r.a.createElement("div",{className:"recipes_topic"},"Transaction result: ",c.data.status,r.a.createElement("br",null),"Refund Transaction id: ",c.data.response.transaction.id,r.a.createElement("br",null),"Paid Amount: LSK ",L.utils.convertBeddowsToLSK(c.data.response.transaction.amount),r.a.createElement("br",null),"Payer LSK address: ",c.data.response.transaction.senderId,r.a.createElement("br",null),"Restaurant LSK address: ",c.data.response.transaction.recipientId,r.a.createElement("br",null),"Broadcast info: ",c.data.response.broadcastInfo.data.message,r.a.createElement("div",{className:"clear"})),l.a.render(a,document.getElementById("content"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement(_,{onSubmit:function(e){return d.apply(this,arguments)}})))};var A=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],d=Object(n.useState)(""),m=Object(u.a)(d,2),p=m[0],E=m[1];function v(){return(v=Object(o.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t({transactionId:l,phone:p});case 3:i(""),E("");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement("form",{onSubmit:function(e){return v.apply(this,arguments)}},r.a.createElement("input",{type:"hidden",id:"request_type",name:"request_type"}),r.a.createElement("div",null,r.a.createElement("label",null,"Transaction id")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"transactionId",name:"transactionId",required:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Phone number")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Retrieve information of transaction requested")))))},T=a(50);var B=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],i=a[1];function d(){return(d=Object(o.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/transaction",t);case 2:c=e.sent,i(c),a=r.a.createElement("div",{className:"recipes_topic"},c.data.status,r.a.createElement("br",null),"Transaction id: ",c.data.response.data.length>0?c.data.response.data[0].id:"",r.a.createElement("br",null),"Payer LSK address: ",c.data.response.data.length>0?c.data.response.data[0].senderId:"",r.a.createElement("br",null),"Restaurant LSK address: ",c.data.response.data.length>0?c.data.response.data[0].recipientId:"",r.a.createElement("br",null),"Food name: ",c.data.response.data.length>0?c.data.response.data[0].asset.name:"",r.a.createElement("br",null),"Amount: LSK ",c.data.response.data.length>0?T.utils.convertBeddowsToLSK(c.data.response.data[0].amount):0,r.a.createElement("br",null),"Phone: ",c.data.response.data.length>0?c.data.response.data[0].asset.phone:"",r.a.createElement("br",null),"Delivery address: ",c.data.response.data.length>0?c.data.response.data[0].asset.deliveryaddress:"",r.a.createElement("br",null),"User: ",c.data.response.data.length>0?c.data.response.data[0].asset.username:"",r.a.createElement("div",{className:"clear"})),l.a.render(a,document.getElementById("content"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content",align:"center"},r.a.createElement(A,{onSubmit:function(e){return d.apply(this,arguments)}})))};var R=function(){return r.a.createElement("div",{id:"header"},r.a.createElement("img",{src:"./images/logo.jpg",width:"438",height:"93",alt:"",id:"logo"})," ",r.a.createElement("img",{src:"./images/slogan.gif",width:"190",height:"81",alt:"",id:"slogan"}),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",{className:"btn_1"},r.a.createElement(E.c,{exact:!0,activeClassName:"active",to:"/"},"Home")),r.a.createElement("li",{className:"line"}),r.a.createElement("li",{className:"btn_2"},r.a.createElement(E.c,{exact:!0,activeClassName:"active",to:"/History"},"Our History")),r.a.createElement("li",{className:"line"}),r.a.createElement("li",{className:"btn_3"},r.a.createElement(E.c,{exact:!0,activeClassName:"active",to:"/Menu"},"Menu")),r.a.createElement("li",{className:"line"}),r.a.createElement("li",{className:"btn_8"},r.a.createElement(E.c,{exact:!0,activeClassName:"active",to:"/Refund"},"Refund")),r.a.createElement("li",{className:"line"}),r.a.createElement("li",{className:"btn_7"},r.a.createElement(E.c,{exact:!0,activeClassName:"active",to:"/Reservation"},"Reservations")),r.a.createElement("li",{className:"line"}),r.a.createElement("li",{className:"btn_6"},r.a.createElement(E.c,{exact:!0,activeClassName:"active",to:"/Contact"},"Contacts"))))};var D=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("br",null),r.a.createElement("div",{align:"center"},"Copyright \xa9 Dav1 | Design by ",r.a.createElement("a",{href:"http://freshtemplates.com/"},"Website Templates")))};var K=function(){return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"content"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{align:"center"},r.a.createElement("div",{className:"recipes_topic"},r.a.createElement("img",{src:"./images/davi_paris.jpg",width:"200",height:"150",alt:""}),r.a.createElement("p",null,r.a.createElement("span",{className:"headline"},"https://github.com/davilinfo")," ",r.a.createElement("br",null),"Author: Davi"),r.a.createElement("p",null,"Lisk community discord id: Dav1"),r.a.createElement("p",null,"Email: dav1@liskrestaurant.com"),r.a.createElement("p",null,"Scientific work: A Strategy for Mitigating Denial of Service Attacks on Nodes with Delegate Account of Lisk Blockchain"),r.a.createElement("p",null,"ACM book title: 2020 The 2nd International Conference on Blockchain Technology (ICBCT'20), March 12--14, 2020, Hilo, HI, USA"),r.a.createElement("p",null,"ACM digital library DOI: 10.1145/3390566.3391684 (to be published)"),r.a.createElement("div",{className:"clear"})))))},F=r.a.createElement(E.a,null,r.a.createElement(R,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:S}),r.a.createElement(v.a,{path:"/History",component:N}),r.a.createElement(v.a,{path:"/Menu",component:x}),r.a.createElement(v.a,{path:"/FoodOrder",component:I}),r.a.createElement(v.a,{path:"/Refund",component:P}),r.a.createElement(v.a,{path:"/Reservation",component:B}),r.a.createElement(v.a,{path:"/Contact",component:K})),r.a.createElement(D,null));l.a.render(F,document.getElementById("root"))},9:function(e,t,a){}},[[190,1,2]]]);
//# sourceMappingURL=main.85ddf2ae.chunk.js.map