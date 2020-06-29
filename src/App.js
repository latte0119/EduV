import React from 'react';
import {CommonRainLoading} from 'react-loadingg';
import CommonLoading from 'react-loadingg/lib/CommonLoading';

const getECRList=async()=>{
  const response=await fetch('https://codeforces.com/api/contest.list');
  const json=await response.json(); 
  return json.result
  .filter(contest=>/Educational\sCodeforces\sRound/.test(contest.name))
  .sort((a,b)=>a.startTimeSeconds<b.startTimeSeconds?-1:1);
};

class App extends React.Component{
    constructor(){
      super();
      this.state={isLoaded:false,contestList:[]};
    }

    componentDidMount(){
      getECRList()
      .then(arr=>{
        this.setState({
          isLoaded:true,
          contestList:arr
        });
      });
    }

    render(){
      if(this.state.isLoaded===false||true){
        const style = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" };
        return (
          <div>
            <CommonLoading/>
         </div>
        );
      }
      return(
        <table border="1">
          <thead>
            <tr>
              <th>name</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contestList.map(contest=>{
              return (
                <tr key={contest.contestId}>
                  <td>{contest.name}</td>
                  <td>{contest.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
}
export default App;