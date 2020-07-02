import React from 'react';

import InputForm from './inputForm';
import ContestTable from './contestTable';
import CommonLoading from 'react-loadingg/lib/CommonLoading';

const fetchContestInfometion=async()=>{
  const contestList=
  await fetch('https://codeforces.com/api/contest.list')
  .then(response=>response.json())
  .then(json=>{
    return json.result
    .filter(contest=>/Educational\sCodeforces\sRound/.test(contest.name))
    .sort((a,b)=>a.startTimeSeconds<b.startTimeSeconds?-1:1);
  });

  let s=new Set();
  for(const  c of contestList)s.add(c.id);

  const problemList=
  await fetch('https://codeforces.com/api/problemset.problems')
  .then(response=>response.json())
  .then(json=>{
    return json.result.problems
    .filter(problem=>{
      if(problem.index.length>=2&&problem.index[1]!=='2')return false;
      return s.has(problem.contestId);
    });
  });

  return {contestList:contestList,problemList:problemList};
};


class App extends React.Component{
    constructor(){
      super();
      this.state={isLoaded:false,contestList:[],problemList:[],submissionList:[],username:"",in:""};

      this.update=this.update.bind(this);
      this.exec=this.exec.bind(this);
    }

    update(e){
      this.setState({
        ...this.state,
        [e.currentTarget.attributes.name.value]:e.currentTarget.value
      });
    }

    exec(e){
      e.preventDefault();
      fetch(`https://codeforces.com/api/user.status?handle=${this.state.in}`)
      .then(response=>response.json())
      .then(json=>{
        if(json.status==="OK"){
          this.setState(
            {
              ...this.state,
              username:this.in,
              submissionList:json.result
            }
          );
        }
        else{
          this.setState(
            {
              ...this.state,
              username:"",
              submissionList:[]
            }
          );
        }
        this.render();
      });

        /*
      if(this.state.in==="")return;
      this.setState(
        {
          ...this.state,
          username:this.state.in
        },
        this.fetchUserStatus
      );
      */
    }

    componentDidMount(){
      fetchContestInfometion()
      .then(res=>{
        this.setState({
          isLoaded:true,
          contestList:res.contestList,
          problemList:res.problemList
        });
      });
    }

    render(){
      if(this.state.isLoaded===false){
       // const style = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" };
        return (
          <div>
            <CommonLoading/>
         </div>
        );
      }
      

      return(
        <div>
          <header className="InputForm">
            <InputForm in={this.state.in} update={this.update} exec={this.exec}/>
          </header>
          <div className="main">
          <ContestTable key="contestTable" contestList={this.state.contestList} problemList={this.state.problemList} submissionList={this.state.submissionList}/>
          </div>
        </div>
      );
    }
}
export default App;