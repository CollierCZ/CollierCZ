(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return b});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(146),c=n.n(s),l=n(173),u=n(156),p=n(157),m=n(158),f=n(144),d=n(160),h=n(161),v=n(164),g=n(167),E=n(168),y=n(172),N=n(163),x=(n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.tag,n=e.page,a=e.pages,r=e.total,i=e.limit,s=e.prev,x=e.next;console.log(this.props.pageContext);var b=this.props.data.articles.edges,C=this.props.data.config.elements;return o.a.createElement(p.a,{isOpen:this.state.menuOpen},o.a.createElement(c.a,{title:'Articles tagged as "'+t+'" | '+C.siteTitle}),o.a.createElement(N.a,{articleEdges:b,seoConfig:C}),o.a.createElement(v.a,{config:C,onClose:this.handleOnClose}),o.a.createElement(f.a,null,o.a.createElement(d.a,{className:"tag-head"},o.a.createElement(h.a,{overlay:C.splash_image.value[0].url},o.a.createElement(u.a,{logo:C.blog_logo.value[0].url,title:C.title.value})),o.a.createElement("div",{className:"vertical"},o.a.createElement("div",{className:"main-header-content inner"},o.a.createElement(g.a,{text:t}),o.a.createElement(E.a,{text:t.description||"A "+r+"-post collection"})))),o.a.createElement("div",null,o.a.createElement(y.a,{page:n,pages:a,total:r,limit:i,prev:s,next:x},o.a.createElement(l.a,{articleEdges:b}))),o.a.createElement(m.a,{author:"Aaron Collier"})))},t}(o.a.Component)),b="3607797527";t.default=x},142:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(29),c=n.n(s);n.d(t,"a",function(){return c.a});n(145),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},144:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(159),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"site-wrapper"},e)},t}(o.a.Component));t.a=s},145:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},148:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?o.a.createElement("a",{className:"subscribe-button icon-feed",href:e},o.a.createElement("span",{className:"sr-only"},"Subscribe")):null},t}(o.a.Component));t.a=s},149:function(e,t,n){"use strict";var a=n(9);e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},150:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(49),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(147),c=n.n(s),l=n(142),u=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.category;return n?o.a.createElement("span",null,t,o.a.createElement("span",{key:n},o.a.createElement(l.a,{key:n,to:"/category/"+c.a.kebabCase(n)},n))):null},t}(i.Component));t.a=u},152:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(175),c=n.n(s),l=(n(176),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.prefix;return o.a.createElement("span",null,n,o.a.createElement("time",{className:"article-date",dateTime:c()(new Date(t)).format("YYYY-MM-DD")},c()(new Date(t)).format("DD MMMM YYYY")))},t}(o.a.Component));t.a=l},153:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return o.a.createElement("article",{className:n},t)},t}(o.a.Component));t.a=s},154:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("header",{className:"article-header"},e)},t}(o.a.Component));t.a=s},155:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(147),c=n.n(s),l=n(142),u=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?o.a.createElement("span",null,t,n.map(function(e,t,n){return o.a.createElement("span",{key:e},o.a.createElement(l.a,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(i.Component));t.a=u},156:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(142),c=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?o.a.createElement(s.a,{className:"blog-logo",to:n||"/"},o.a.createElement("img",{src:t,alt:a})):null},t}(i.Component));t.a=c},157:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(143),c=n.n(s),l=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return o.a.createElement("div",{className:r},t)},t}(o.a.Component));t.a=l},158:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(182),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("footer",{className:"site-footer clearfix"},o.a.createElement("section",{className:"copyright"},"© 2018–",(new Date).getFullYear()," ",this.props.author))},t}(i.Component));t.a=s},160:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(143),c=n.n(s),l=(n(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return o.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(o.a.Component));t.a=l},161:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(143),c=n.n(s),l=(n(184),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return o.a.createElement("nav",{className:a},t)},t}(o.a.Component));t.a=l},162:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(143),c=n.n(s),l=(n(187),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return o.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(o.a.Component));t.a=l},163:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(146),c=n.n(s),l=n(188),u=n.n(l),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props.seoConfig,i=this.props,s=i.articleNode,l=i.articlePath,p=i.articleSEO;p?(e=s.elements.title.value,t=s.elements.metadata__description.value,n=s.elements.teaser.value[0].url,a=u()(r.base_url.value,"/articles",l,"/")):(e=r.title.value,t=r.metadata__description.value,n=r.blog_logo.value[0].url);var m=r.base_url.value,f=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:e,alternateName:r.siteTitleAlt?r.siteTitleAlt:""}];return p&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:e,alternateName:r.siteTitleAlt?r.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:p?a:m}),p?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=p},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=(n(30),n(69)),o=n.n(i),s=n(0),c=n.n(s),l=(n(68),n(142));var u=function(e){var t=[{primaryText:"Home",component:l.a,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",component:l.a,to:"/about/"}),t},p=n(148),m=(n(186),function(){return null}),f=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},d=function(e){var t=e.primaryText,n=e.component,a=o()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},h=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(d,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,i=t.subheader,c=t.nestedItems,l=o()(t,["divider","subheader","nestedItems"]);a=r?m:i?f:d;var u=Object.assign({},l,{key:t.key||n});return c&&(u.nestedItems=c.map(e)),Object(s.createElement)(a,u)},v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(h)),c.a.createElement(p.a,{url:t.siteRss})),c.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=v},165:function(e,t,n){"use strict";n(166)("link",function(e){return function(t){return e(this,"a","href",t)}})},166:function(e,t,n){var a=n(12),r=n(23),i=n(17),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},167:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(194),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?o.a.createElement("h1",{className:"page-title"},e):null},t}(o.a.Component));t.a=s},168:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(195),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?o.a.createElement("h2",{className:"page-description"},e):null},t}(o.a.Component));t.a=s},169:function(e,t,n){"use strict";n(170);var a=n(9),r=n(149),i=n(15),o=/./.toString,s=function(e){n(16)(RegExp.prototype,"toString",e,!0)};n(23)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},170:function(e,t,n){n(15)&&"g"!=/./g.flags&&n(24).f(RegExp.prototype,"flags",{configurable:!0,get:n(149)})},172:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(162),c=(n(30),n(169),n(142)),l=(n(196),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e,t="nav-link";this.props.className&&(t=t+" "+this.props.className),e=1===this.props.url?"":this.props.url.toString();var n=Object.assign({},this.props);return delete n.style,delete n.className,delete n.text,delete n.url,o.a.createElement(c.a,Object.assign({to:"/"+e},n,{className:t}),this.props.text)}return null},t}(o.a.Component)),u=(n(197),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return o.a.createElement("nav",{className:"pagination"},o.a.createElement(l,{className:"newer-articles",url:a,text:"← Newer Articles"}),o.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),o.a.createElement(l,{className:"older-articles",url:r,text:"Older Articles →"}))},t}(o.a.Component)),p=(n(198),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,i=e.children,c="";return t>1&&(c+=" paged"),o.a.createElement(s.a,{className:c},o.a.createElement("div",{className:"extra-pagination inner"},o.a.createElement(u,{page:t,pages:n,prev:a,next:r})),i,o.a.createElement(u,{page:t,pages:n,prev:a,next:r}))},t}(o.a.Component));t.a=p},173:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(142),c=n(151),l=n(152),u=n(153),p=n(154),m=n(155),f=(n(165),n(192),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.cover,n=e.link,a={backgroundImage:"url("+t+")"};return n?o.a.createElement(s.a,{to:n},o.a.createElement("div",{className:"article-teaser",style:a})):null},t}(o.a.Component)),d=(n(193),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.count,n=e.index,a=this.props.articleEdges.slice((n-1)*t,n-1+t).map(function(e){return{category:e.node.fields.category,cover:e.node.elements.teaser.value[0].url,description:e.node.elements.metadata__description.value,path:e.node.fields.slug,date:e.node.fields.date,tags:e.node.fields.tags,title:e.node.elements.title.value}});return o.a.createElement("div",{className:"article-listing"},a.map(function(e){var t=e.category,n=e.cover,a=e.description,r=e.path,i=e.date,d=e.tags,h=e.title,v=e.article_class?e.article_class:"article-card";return o.a.createElement(u.a,{className:v,key:h},o.a.createElement(f,{cover:n,link:"/articles/"+r}),o.a.createElement("div",{className:"article-details"},o.a.createElement(s.a,{className:"article-link",to:"/articles/"+r},o.a.createElement(p.a,null,o.a.createElement("h2",{className:"article-title"},h)),o.a.createElement("section",{className:"article-description"},o.a.createElement("p",null,a," ","»"))),o.a.createElement("footer",{className:"article-meta"},o.a.createElement(l.a,{prefix:"Published ",date:i}),o.a.createElement(c.a,{prefix:" in ",category:t}),o.a.createElement(m.a,{prefix:" on ",tags:d}))))}))},t}(o.a.Component));t.a=d}}]);
//# sourceMappingURL=component---src-templates-tag-js-0801ac419b3908ef728f.js.map