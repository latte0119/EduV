import React from 'react';

export default props=>{
	return(
		<form onSubmit={props.exec}>
			<input type="text" name="in" onChange={props.update} value={props.in} className="inputtext"/>
			<input type="submit" value="exec" className="button"/>
		</form>
	);
}