import React from 'react';
import axios from 'axios';

class ApiExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: undefined,
            taskName: '',
            taksID: undefined
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            const taskData = response.data;
            this.setState({ 'tasks' : taskData});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        if (this.state.tasks === undefined) {
            return(
                <div>
                    <h1>Loading ...</h1>
                </div>
            );
        } else {
            return(
                <div>
                    <h1>Todo List (AJAX requet)</h1>
                    <p>TODO list :</p>
                    <table class="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Task</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.tasks.map(task =>
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.title}</td>   
                            </tr>  
                        )}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default ApiExample;
