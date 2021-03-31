// create your App component here
import React , {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            peopleInSpace:[]
        }
    }

 

    render(){
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
        
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(spaceList => {
                this.setState({
                    peopleInSpace: spaceList.people
                })
            })
    }
}
export default App