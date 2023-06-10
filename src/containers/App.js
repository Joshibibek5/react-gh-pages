import React, {Component} from 'react';
// import { robots } from './robots';
import Cardarray from '../components/Cardarray';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

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
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// console.log(filteredRobots)
		return (!robots.length)?
			<h1> LOADINNG </h1> :
			(
				<div className='tc'>
					<h1 className='f1'> ROBOTS UNIVERSE </h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<Cardarray robots={filteredRobots} />	
					</Scroll>
				</div>
			)
		}
}

export default App;