import React,{useState} from 'react';

export default props=>{
	const [inputText,setInputText]=useState("");

	return(
		<div>
			<input 
				type="text"
				onChange={(e)=>{setInputText(e.target.value)}}
				value={inputText}
				className="inputtext"
			/>
			<button onClick={()=>{props.setUsername(inputText)}}>exec</button>
		</div>
	);
}