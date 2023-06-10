import React, {Component} from 'react';
import { robots } from './robots';
import Cardarray from './Cardarray';
import SearchBox from './SearchBox';

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield:''
		}
	}

	onSearchChange = (event) => {
		// console.log(event);
		// console.log(event.target.value)
		this.setState({searchfield:event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filteredRobots)
		return(
			<div className='tc'>
				<h1> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Cardarray robots={filteredRobots} />	
			</div>
		);
	}
}

export default App;