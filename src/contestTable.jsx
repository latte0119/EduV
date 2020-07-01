import React from 'react';

export default props=>{
	const T=new Map();
	for(const contest of props.contestList){
		T[contest.id]=new Array(9);
		for(let i=0;i<9;i++)T[contest.id][i]={
			href:``,
			text:"",
			bgcolor:""
		};
	}

	for(const problem of props.problemList){
		console.log(problem.name);
		T[problem.contestId][problem.index.charCodeAt(0)-65]={
			href:`https://codeforces.com/contest/${problem.contestId}/problem/${problem.index}`,
			text:problem.name,
			bgcolor:""
		};
	}

		

	return (
		<table>
          <thead>
            <tr>
              <th>Contest</th>
              {
				(()=>{
					let arr=[];
					for(let i=0;i<9;i++){
						arr.push(<th>{String.fromCharCode(65+i)}</th>);
					}
					return arr;
				})()
			  }
            </tr>
          </thead>
          <tbody>
            {
				props.contestList.map(contest=>{
					return (
						<tr>
							<td><a href={`https://codeforces.com/contest/${contest.id}`}>{contest.name}</a></td>
							{
								T[contest.id].map(ht=>{
									return <td bgcolor={ht.bgcolor}><a href={ht.href}>{ht.text}</a></td>;
								})
							}
						</tr>
					);
				})
			}
          </tbody>
        </table>
    );
}

