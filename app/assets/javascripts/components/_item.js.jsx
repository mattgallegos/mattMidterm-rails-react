var Item = React.createClass({ 
    getInitialState() {
        return {editable: false}    
    },
    
    handleEdit() {
        if(this.state.editable) { 

            var name = this.nameElement.value; 
            var description = this.descriptionElement.value; 
            var id = this.props.item.id;
            var item = {id: id, name: name, description: description};
            this.props.handleUpdate(item);
            console.log('in handleEdit', this.state.editable, name, description); 
        } 
        this.setState({ editable: !this.state.editable })
        console.log('edit button clicked');
    },
    

    render() { 
        var name = this.state.editable ? <input type='text' ref={node => this.nameElement = node} defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>; 
        var description = this.state.editable ? <input type='text' ref={node => this.descriptionElement = node} defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
        return ( 
            <div> 
                {name} 
                {description}

                <button onClick={this.props.handleDelete} >Delete</button> 
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button> 
            </div> 
        ) 
    } 
});