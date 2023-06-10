import React from 'react';

const Card = (props) => {
	const {name , email , id}= props; 
	return( //only returning (one)div element
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
			<img alt='robots' src={`https://robohash.org/${id}?size=300x300`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
} 

export default Card;        




/* destructuring assignment in JavaScript.

	const {name , email , id}= props;
is same as:
	const props = {
	  name: 'John Doe',
	  email: 'johndoe@example.com',
	  id: 12345
	};
	const name = props.name;
	const email = props.email;
	const id = props.id;

*/