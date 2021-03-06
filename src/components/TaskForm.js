import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status : false
        }
    }

    componentDidMount() {
        if(this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            })
        }    
         else if(nextProps && nextProps.task === null) {
            this.setState({
                id: '',
                name: '',
                status : false
            })
        }
    }

    // componentDidUpdate(prevProps) {
    //    if(prevProps.task && prevProps.task !== this.props.task) {
    //        this.setState({
    //             id: this.props.task.id,
    //             name: this.props.task.name,
    //             status: this.props.task.status
    //        })
    //     } else if(prevProps.task && this.props.task === null) {
    //        this.setState({
    //         id: '',
    //         name: '',
    //         status : false
    //        })
    //    }
    // }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status') {
            value = target.value ==='true'? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.onClear();
        this.onCloseForm();
    }

    onCloseForm = () => {
        this.props.onCloseForm()
    }

    onClear = () => {
        this.setState({
            name: '',
            status : false
        })
    }
 
     render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { id ? 'C???p nh???t c??ng vi???c': 'Th??m c??ng vi???c'}
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>T??n :</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Tr???ng Th??i :</label>
                        <select 
                            className="form-control" 
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>K??ch Ho???t</option>
                            <option value={false}>???n</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">L??u</button>&nbsp;
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.onClear}
                            >H???y B???
                            </button>
                        </div>
                    </form>
                </div>
            </div>    
        )
    }
}

export default TaskForm;
