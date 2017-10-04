var NewItem= React.createClass({ 
                                
handleClick() { 
//    var name = this.refs.name.value; 
    var name = this.nameElement.value;
    var description = this.descriptionElement.value; 
//    var description = this.refs.description.value; 
    
    
    $.ajax({ 
        url: '/api/v1/items', 
        type: 'POST', 
        data: { item: { name: name, description: description } }, 
        success: (item) => { 
            this.props.handleSubmit(item);
            console.log('it worked!'); 
        } 
    }); 
},
    
    render() { 
        return ( 
            <div> 
                <h1>new item</h1> 
                <input ref={node => this.nameElement = node} placeholder='Enter the name of the item' /> 
                <input ref={node => this.descriptionElement = node} placeholder='Enter a description' /> 
                <button onClick={this.handleClick}>Submit</button>
                
            </div> 
        ) 
    } 
});
