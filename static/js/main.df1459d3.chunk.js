(this.webpackJsonprt=this.webpackJsonprt||[]).push([[0],{21:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),s=n.n(c),o=(n(26),n(4)),i=n(5),u=n(8),l=n(7),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",null,"EduV"))}}]),n}(r.a.Component),d=n(6),f=n(1),p=n(3),h=n(9),b=n.n(h),v=n(2),E=n(15),j=function(e){return r.a.createElement("form",{onSubmit:e.exec},r.a.createElement("input",{type:"text",name:"in",onChange:e.update,value:e.in,className:"inputtext"}),r.a.createElement("input",{type:"submit",value:"exec",className:"button"}))},L="#006400",O="#696969",y=function(e){var t,n=new Map,a=Object(v.a)(e.contestList);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.id]=new Array(9);for(var s=0;s<9;s++)n[c.id][s]={href:"",text:"",bgcolor:""}}}catch(p){a.e(p)}finally{a.f()}var o,i=Object(v.a)(e.problemList);try{for(i.s();!(o=i.n()).done;){var u=o.value;n[u.contestId][u.index.charCodeAt(0)-65]={href:"https://codeforces.com/contest/".concat(u.contestId,"/problem/").concat(u.index),text:u.index+". "+u.name,bgcolor:""}}}catch(p){i.e(p)}finally{i.f()}var l,m=Object(v.a)(e.submissionList);try{for(m.s();!(l=m.n()).done;){var d=l.value;if(void 0!==n[d.contestId]){var f=n[d.contestId][d.problem.index.charCodeAt(0)-65];"OK"===d.verdict?f.bgcolor=L:""===f.bgcolor&&(f.bgcolor=O)}}}catch(p){m.e(p)}finally{m.f()}return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{key:"top"},r.a.createElement("th",null,r.a.createElement("p",null,"Contest")),function(){for(var e=[],t=0;t<9;t++)e.push(r.a.createElement("th",null,r.a.createElement("p",null,String.fromCharCode(65+t))));return e}())),r.a.createElement("tbody",null,e.contestList.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",null,r.a.createElement("a",{href:"https://codeforces.com/contest/".concat(e.id)},r.a.createElement("p",null,"ERC"+e.name.split(" ")[3].padStart(3,"0")))),n[e.id].map((function(e){return r.a.createElement("td",{bgcolor:e.bgcolor},r.a.createElement("a",{href:e.href},r.a.createElement("p",null,e.text)))})))}))))},x=n(16),g=n.n(x),k=function(){var e=Object(E.a)(b.a.mark((function e(){var t,n,a,r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://codeforces.com/api/contest.list").then((function(e){return e.json()})).then((function(e){return e.result.filter((function(e){return/Educational\sCodeforces\sRound/.test(e.name)})).sort((function(e,t){return e.startTimeSeconds<t.startTimeSeconds?-1:1}))}));case 2:t=e.sent,n=new Set,a=Object(v.a)(t);try{for(a.s();!(r=a.n()).done;)c=r.value,n.add(c.id)}catch(o){a.e(o)}finally{a.f()}return e.next=8,fetch("https://codeforces.com/api/problemset.problems").then((function(e){return e.json()})).then((function(e){return e.result.problems.filter((function(e){return!(e.index.length>=2&&"2"!==e.index[1])&&n.has(e.contestId)}))}));case 8:return s=e.sent,e.abrupt("return",{contestList:t,problemList:s});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={isLoaded:!1,contestList:[],problemList:[],submissionList:[],username:"",in:""},e.update=e.update.bind(Object(p.a)(e)),e.exec=e.exec.bind(Object(p.a)(e)),e}return Object(i.a)(n,[{key:"update",value:function(e){this.setState(Object(f.a)(Object(f.a)({},this.state),{},Object(d.a)({},e.currentTarget.attributes.name.value,e.currentTarget.value)))}},{key:"exec",value:function(e){var t=this;e.preventDefault(),fetch("https://codeforces.com/api/user.status?handle=".concat(this.state.in)).then((function(e){return e.json()})).then((function(e){"OK"===e.status?t.setState(Object(f.a)(Object(f.a)({},t.state),{},{username:t.in,submissionList:e.result})):t.setState(Object(f.a)(Object(f.a)({},t.state),{},{username:"",submissionList:[]})),t.render()}))}},{key:"componentDidMount",value:function(){var e=this;k().then((function(t){e.setState({isLoaded:!0,contestList:t.contestList,problemList:t.problemList})}))}},{key:"render",value:function(){return!1===this.state.isLoaded?r.a.createElement("div",null,r.a.createElement(g.a,null)):r.a.createElement("div",null,r.a.createElement("header",{className:"InputForm"},r.a.createElement(j,{in:this.state.in,update:this.update,exec:this.exec})),r.a.createElement("div",{className:"main"},r.a.createElement(y,{key:"contestTable",contestList:this.state.contestList,problemList:this.state.problemList,submissionList:this.state.submissionList})))}}]),n}(r.a.Component);s.a.render(r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(C,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.df1459d3.chunk.js.map