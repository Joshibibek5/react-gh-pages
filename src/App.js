import React, {Component} from 'react';
// import { robots } from './robots';
import Cardarray from './Cardarray';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}));
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
		// console.log(filteredRobots)
		if (this.state.robots.length === 0){
			return <h1> LOADINNG </h1>
		}
		else{
			return(
				<div className='tc'>
					<h1 className='f1'> ROBOTS UNIVERSE </h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<Cardarray robots={filteredRobots} />	
					</Scroll>
				</div>
			);
		}
	}
}

export default App;