(this.webpackJsonprt=this.webpackJsonprt||[]).push([[0],{19:function(e,t,n){e.exports=n(66)},24:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),u=n.n(c),s=(n(24),n(3)),o=n(4),i=n(6),l=n(5),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"EduV"),a.a.createElement("hr",null))}}]),n}(a.a.Component),f=n(8),m=n.n(f),p=n(14),h=(n(26),n(7)),v=n.n(h),b=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://codeforces.com/api/contest.list");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.result.filter((function(e){return/Educational\sCodeforces\sRound/.test(e.name)})).sort((function(e,t){return e.startTimeSeconds<t.startTimeSeconds?-1:1})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={isLoaded:!1,contestList:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({isLoaded:!0,contestList:t})}))}},{key:"render",value:function(){this.state.isLoaded;return a.a.createElement("div",null,a.a.createElement(v.a,null))}}]),n}(a.a.Component);u.a.render(a.a.createElement("div",null,a.a.createElement(d,null),a.a.createElement("div",{className:"main"},a.a.createElement(E,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cb27181c.chunk.js.map