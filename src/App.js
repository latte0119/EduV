import React from 'react';

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
      this.state={contestList:[]};
    }

    componentDidMount(){
      getECRList()
      .then(arr=>{
        this.setState({
          contestList:arr
        });
      });
    }

    render(){
      return(
        <table border="1">
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