import React,{Component} from 'react';


class TodoList extends Component {

  render() {
    const createItem = (itemText, index) =>{
      return <li key={index}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

class TodoApp extends Component {
  state = {items: [], text: ''  };
  onChange=(e)=> {
    this.setState({text: e.target.value});
  };

  handleSubmit=(e)=> {
    e.preventDefault();
    const nextItems = this.state.items.concat([this.state.text]);
    const nextText = '';
    this.setState({items: nextItems, text: nextText});
  };

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    )
  }
}

export default TodoApp;
