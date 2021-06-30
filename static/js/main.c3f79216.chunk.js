(this["webpackJsonpreact-check"]=this["webpackJsonpreact-check"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__20jdb",image:"MeetupItem_image__3oQ4v",content:"MeetupItem_content__2B6fM",actions:"MeetupItem_actions__27WIr"}},15:function(e,t,c){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka",badge:"MainNavigation_badge__QYsXO"}},20:function(e,t,c){e.exports={card:"Card_card__3_jzl"}},21:function(e,t,c){e.exports={list:"MeetupList_list__2_6T7"}},27:function(e,t,c){},28:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(18),r=c.n(n),a=(c(27),c(28),c(15)),s=c.n(a),o=c(7),d=c(0);var j=function(){return Object(d.jsxs)("div",{className:s.a.header,children:[Object(d.jsx)("h1",{children:"Meetups"}),Object(d.jsx)("div",{className:s.a.logo,children:Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(o.b,{to:"/",children:"All Meetups"}),Object(d.jsx)(o.b,{to:"/new",children:"New Meetup"}),Object(d.jsx)(o.b,{to:"/favorites",children:"Favorites"})]})})})]})},u=c(2),l=c(22),b=c(11),v=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},isFavorite:function(e){}});function O(e){var t=Object(i.useState)([]),c=Object(b.a)(t,2),n=c[0],r=c[1];var a={favorites:n,totalFavorites:n.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},isFavorite:function(e){return n.some((function(t){return t.id===e}))}};return Object(d.jsx)(v.Provider,{value:a,children:e.children})}var h=v,x=c(12),f=c.n(x),p=c(20),m=c.n(p);var _=function(e){return Object(d.jsx)("div",{className:m.a.card,children:e.children})};var g=function(e){var t=Object(i.useContext)(h),c=t.isFavorite(e.id);return Object(d.jsx)("div",{className:f.a.item,children:Object(d.jsxs)(_,{children:[Object(d.jsx)("div",{className:f.a.image,children:Object(d.jsx)("img",{src:e.image,alt:e.description})}),Object(d.jsxs)("div",{className:f.a.content,children:[Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("p",{children:e.description}),Object(d.jsx)("address",{children:e.address}),Object(d.jsx)("div",{className:f.a.actions,children:Object(d.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,image:e.image,address:e.address,description:e.description})},children:c?"Remove from Favorite":"To Favorite"})})]})]})})},N=c(21),M=c.n(N);var F=function(e){return Object(d.jsx)("div",{className:M.a.list,children:e.meetups.map((function(e){return Object(d.jsx)(g,{image:e.image,address:e.address,title:e.title,description:e.description},e.id)}))})};var w=function(){var e=Object(i.useState)(!0),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),a=Object(b.a)(r,2),s=a[0],o=a[1];return Object(i.useEffect)((function(){n(!0),fetch("https://react-meetup-ee022-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(l.a)({id:c},e[c]);t.push(i)}n(!1),o(t),console.log(t)}))}),[]),c?Object(d.jsx)("section",{children:Object(d.jsx)("p",{children:"Loading ... "})}):Object(d.jsx)("div",{children:Object(d.jsx)(F,{meetups:s})})},y=c(9),I=c.n(y);var C=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)();return Object(d.jsx)(_,{children:Object(d.jsxs)("form",{className:I.a.form,onSubmit:function(i){i.preventDefault();var a={title:t.current.value,image:c.current.value,address:n.current.value,description:r.current.value};e.addMeetup(a)},children:[Object(d.jsxs)("div",{className:I.a.control,children:[Object(d.jsx)("label",{children:"Meetup Title"}),Object(d.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(d.jsxs)("div",{className:I.a.control,children:[Object(d.jsx)("label",{children:"Meetup Image"}),Object(d.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(d.jsxs)("div",{className:I.a.control,children:[Object(d.jsx)("label",{children:"Meetup Address"}),Object(d.jsx)("input",{type:"text",required:!0,id:"address",ref:n})]}),Object(d.jsxs)("div",{className:I.a.control,children:[Object(d.jsx)("label",{children:"Meetup Description"}),Object(d.jsx)("input",{type:"textarea",required:!0,id:"description",ref:r})]}),Object(d.jsx)("div",{className:I.a.actions,children:Object(d.jsx)("button",{children:"Add Meetup"})})]})})};var R=function(){var e=Object(u.e)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"New Meetup Form"}),Object(d.jsx)(C,{addMeetup:function(t){fetch("https://react-meetup-ee022-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),header:{"Content-type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var S=function(){var e=Object(i.useContext)(h);0===e.totalFavorites||e.favorites};var k=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(u.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{})}),Object(d.jsx)(u.a,{exact:!0,path:"/new",children:Object(d.jsx)(R,{})}),Object(d.jsx)(u.a,{exact:!0,path:"/favorites",children:Object(d.jsx)(S,{})})]})})};r.a.render(Object(d.jsx)(O,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__3K5UR",control:"NewMeetupForm_control__16lpK",actions:"NewMeetupForm_actions__1vK0o"}}},[[38,1,2]]]);
//# sourceMappingURL=main.c3f79216.chunk.js.map