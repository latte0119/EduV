(this.webpackJsonprt=this.webpackJsonprt||[]).push([[0],{19:function(e,t,n){e.exports=n(66)},24:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),u=n.n(c),l=(n(24),n(3)),s=n(4),o=n(6),i=n(5),m=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"EduV"))}}]),n}(r.a.Component),d=n(8),f=n.n(d),h=n(14),p=(n(26),n(7)),E=n.n(p),b=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://codeforces.com/api/contest.list");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.result.filter((function(e){return/Educational\sCodeforces\sRound/.test(e.name)})).sort((function(e,t){return e.startTimeSeconds<t.startTimeSeconds?-1:1})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={isLoaded:!1,contestList:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({isLoaded:!0,contestList:t})}))}},{key:"render",value:function(){if(!1===this.state.isLoaded){return r.a.createElement("div",null,r.a.createElement(E.a,null))}return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"id"))),r.a.createElement("tbody",null,this.state.contestList.map((function(e){return r.a.createElement("tr",{key:e.contestId},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.id))}))))}}]),n}(r.a.Component);u.a.render(r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"main"},r.a.createElement(v,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9b57447e.chunk.js.map