(this.webpackJsonprt=this.webpackJsonprt||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),s=n.n(c),o=(n(27),n(3)),i=n(4),l=n(7),u=n(6),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",null,"EduV"))}}]),n}(r.a.Component),d=n(2),f=n(5),h=n(9),b=n.n(h),p=n(1),v=n(15),E=n(19),L=function(e){var t=Object(a.useState)(""),n=Object(E.a)(t,2),c=n[0],s=n[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(e){s(e.target.value)},value:c,className:"inputtext"}),r.a.createElement("button",{onClick:function(){e.setUsername(c)}},"exec"))},j="#006400",O="#696969",y=function(e){var t,n=new Map,a=Object(p.a)(e.contestList);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.id]=new Array(9);for(var s=0;s<9;s++)n[c.id][s]={href:"",text:"",bgcolor:""}}}catch(h){a.e(h)}finally{a.f()}var o,i=Object(p.a)(e.problemList);try{for(i.s();!(o=i.n()).done;){var l=o.value;n[l.contestId][l.index.charCodeAt(0)-65]={href:"https://codeforces.com/contest/".concat(l.contestId,"/problem/").concat(l.index),text:l.index+". "+l.name,bgcolor:""}}}catch(h){i.e(h)}finally{i.f()}var u,m=Object(p.a)(e.submissionList);try{for(m.s();!(u=m.n()).done;){var d=u.value;if(void 0!==n[d.contestId]){var f=n[d.contestId][d.problem.index.charCodeAt(0)-65];"OK"===d.verdict?f.bgcolor=j:""===f.bgcolor&&(f.bgcolor=O)}}}catch(h){m.e(h)}finally{m.f()}return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{key:"top"},r.a.createElement("th",null,r.a.createElement("p",null,"Contest")),function(){for(var e=[],t=0;t<9;t++)e.push(r.a.createElement("th",null,r.a.createElement("p",null,String.fromCharCode(65+t))));return e}())),r.a.createElement("tbody",null,e.contestList.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",null,r.a.createElement("a",{href:"https://codeforces.com/contest/".concat(e.id)},r.a.createElement("p",null,"ECR"+e.name.split(" ")[3].padStart(3,"0")))),n[e.id].map((function(e){return r.a.createElement("td",{bgcolor:e.bgcolor},r.a.createElement("a",{href:e.href},r.a.createElement("p",null,e.text)))})))}))))},x=n(16),g=n.n(x),k=function(){var e=Object(v.a)(b.a.mark((function e(){var t,n,a,r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://codeforces.com/api/contest.list").then((function(e){return e.json()})).then((function(e){return e.result.filter((function(e){return/Educational\sCodeforces\sRound/.test(e.name)})).sort((function(e,t){return e.startTimeSeconds<t.startTimeSeconds?-1:1}))}));case 2:t=e.sent,n=new Set,a=Object(p.a)(t);try{for(a.s();!(r=a.n()).done;)c=r.value,n.add(c.id)}catch(o){a.e(o)}finally{a.f()}return e.next=8,fetch("https://codeforces.com/api/problemset.problems").then((function(e){return e.json()})).then((function(e){return e.result.problems.filter((function(e){return!(e.index.length>=2&&"2"!==e.index[1])&&n.has(e.contestId)}))}));case 8:return s=e.sent,e.abrupt("return",{contestList:t,problemList:s});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={isLoaded:!1,contestList:[],problemList:[],submissionList:[],username:""},e.setUsername=e.setUsername.bind(Object(f.a)(e)),e}return Object(i.a)(n,[{key:"setUsername",value:function(e){var t=this;fetch("https://codeforces.com/api/user.status?handle=".concat(e)).then((function(e){return e.json()})).then((function(n){"OK"===n.status?t.setState(Object(d.a)(Object(d.a)({},t.state),{},{username:e,submissionList:n.result})):t.setState(Object(d.a)(Object(d.a)({},t.state),{},{username:"",submissionList:[]}))}))}},{key:"componentDidMount",value:function(){var e=this;k().then((function(t){e.setState({isLoaded:!0,contestList:t.contestList,problemList:t.problemList})}))}},{key:"render",value:function(){return!1===this.state.isLoaded?r.a.createElement("div",null,r.a.createElement(g.a,null)):r.a.createElement("div",null,r.a.createElement("header",{className:"InputForm"},r.a.createElement(L,{setUsername:this.setUsername})),r.a.createElement("div",{className:"main"},r.a.createElement(y,{key:"contestTable",contestList:this.state.contestList,problemList:this.state.problemList,submissionList:this.state.submissionList})))}}]),n}(r.a.Component);s.a.render(r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.57db08ed.chunk.js.map