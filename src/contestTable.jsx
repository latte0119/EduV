import React from 'react';

const Color={
	accepted:"#006400",
	incorrect:"#696969"
};

export default props=>{
	let T=new Map();
	for(const contest of props.contestList){
		T[contest.id]=new Array(9);
		for(let i=0;i<9;i++)T[contest.id][i]={
			href:``,
			text:"",
			bgcolor:""
		};
	}

	for(const problem of props.problemList){
		T[problem.contestId][problem.index.charCodeAt(0)-65]={
			href:`https://codeforces.com/contest/${problem.contestId}/problem/${problem.index}`,
			text:problem.index+". "+problem.name,
			bgcolor:""
		};
	}

	for(const submission of props.submissionList){
		if(T[submission.contestId]===undefined)continue;
		let content=T[submission.contestId][submission.problem.index.charCodeAt(0)-65];
		
		if(submission.verdict==="OK"){
			content.bgcolor=Color.accepted;
		}
		else if(content.bgcolor===""){
			content.bgcolor=Color.incorrect;
		}
	}

		

	return (
		<table>
          <thead>
            <tr key="top">
              <th><p>Contest</p></th>
              {
				(()=>{
					let arr=[];
					for(let i=0;i<9;i++){
						arr.push(<th><p>{String.fromCharCode(65+i)}</p></th>);
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
						<tr key={contest.id}>
							<th><a href={`https://codeforces.com/contest/${contest.id}`}><p>{"ECR"+contest.name.split(' ')[3].padStart(3,'0')}</p></a></th>
							{
								T[contest.id].map(ht=>{
									return <td bgcolor={ht.bgcolor}><a href={ht.href}><p>{ht.text}</p></a></td>;
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

