var AllItems = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
        console.log('delete item clicked');  
    },
    
    onUpdate(item) {
      this.props.onUpdate(item);  
    },
    
    render() {
        var items = this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <Item item={item}
                        handleDelete = {this.handleDelete.bind(this, item.id)}
                        handleUpdate={this.onUpdate} />
                </div>
                
//                
//                <div key={item.id}>
//                    <h1>All items component</h1>
//                    <h3>{item.name}</h3>
//                    <p>{item.description}</p>
//                    <button onClick={this.handleDelete.bind(this, item.id)} >Delete</button>
//                    <button onClick={this.handleEdit.bind(this, item.id)} >Edit</button>
//                </div>
//                
            )
        });

        return(
            <div>
                {items}
            </div>    
        )
    }
                       
      
});