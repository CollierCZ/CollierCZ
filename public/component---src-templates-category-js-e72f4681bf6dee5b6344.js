(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return y});var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(151),c=n.n(l),s=n(177),u=n(154),p=n(155),m=n(145),f=n(156),g=n(157),h=n(173),d=n(162),v=n(164),E=n(165),C=n(176),O=n(158),w=(n(172),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.category,n=e.page,a=e.pages,r=e.total,o=e.limit,l=e.prev,w=e.next,y=this.props.data.articles.edges,k=this.props.data.config;return i.a.createElement(p.a,{isOpen:this.state.menuOpen},i.a.createElement(c.a,{title:'Articles in "'+t+'" | '+k.siteTitle}),i.a.createElement(O.a,{articleEdges:y,seoConfig:k}),i.a.createElement(d.a,{config:k,onClose:this.handleOnClose}),i.a.createElement(m.a,null,i.a.createElement(f.a,{className:"category-head"},i.a.createElement(g.a,{overlay:k.splash_image.value[0].url},i.a.createElement(u.a,{logo:k.blog_logo.value[0].url,title:k.title.value}),i.a.createElement(h.a,{navigation:!0,onClick:this.handleOnClick})),i.a.createElement("div",{className:"vertical"},i.a.createElement("div",{className:"main-header-content inner"},i.a.createElement(v.a,{text:t}),i.a.createElement(E.a,{text:t.description||"A "+r+"-post collection"})))),i.a.createElement("div",null,i.a.createElement(C.a,{page:n,pages:a,total:r,limit:o,prev:l,next:w},i.a.createElement(s.a,{articleEdges:y})))))},t}(i.a.Component)),y="137252263";t.default=w},152:function(e,t,n){var a=n(6),r=n(17),o=n(27),i=/"/g,l=function(e,t,n,a){var r=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},163:function(e,t,n){"use strict";n(152)("link",function(e){return function(t){return e(this,"a","href",t)}})},173:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=l},174:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-category-js-e72f4681bf6dee5b6344.js.map