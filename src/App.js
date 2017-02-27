import React from 'react';

import TodoList from './components/TodoList';
import TodoControl from './components/TodoControl';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue:'',
      data:[
        {text:'我最漂亮！',completed:false,id:1},
        {text:'我最漂亮！',completed:true,id:66},
        {text:'我最漂亮！',completed:false,id:2},
        {text:'我最漂亮！',completed:false,id:3}
      ],
      visible:'ALL'
    }
  }
  handleInput(e){
    this.setState({inputValue:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    let newItem=this.state.inputValue.trim();
    if(newItem.length === 0){
      alert('输入不能为空')
    }else{
      let newTodo = {
        text:newItem,
        completed:false,
        id:new Date().getTime()
      }
      this.setState({data: [...this.state.data,newTodo]})
    }
    this.setState({inputValue:''});
  }
  handleCompleted(id){
    console.log(id);
    let index=  this.myFindIndex(id);
    this.state.data[index].completed = !this.state.data[index].completed;
    this.setState({data:this.state.data})
  }
  handleRemove(id){
    console.log(id);
    let index= this.myFindIndex(id);
    this.state.data.splice(index,1);
    this.setState({data:this.state.data})
  }
  handleFilter(visible){
    this.setState({visible:visible});
  }
  myFindIndex(id){
    return this.state.data.findIndex(item => item.id===id)
  }
  render () {
      let styles={
        root:{
          maxWidth:'500px',
          margin:'0 auto',
          textAlign:'center'
        }
      }
      let showData;
      switch(this.state.visible){
        case 'ACTIVE':
          showData=this.state.data.filter(item => !item.completed);
          break;
        case 'COMPLETED':
          showData=this.state.data.filter(item => item.completed);
          break;
        default:
        showData=this.state.data
      }
      console.log(showData);
    return(
      <div style={styles.root}>
        <h1>TODO</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className='form-inline'>
          <div className='form-group'>
            <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)} className='form-control'/>
            <button className='btn btn-default'>ADD{this.state.data.length}</button>
          </div>
        </form>
        <TodoList data={showData} handleCompleted={this.handleCompleted.bind(this)} handleRemove={this.handleRemove.bind(this)}/>
        <TodoControl handleFilter={this.handleFilter.bind(this)} visible={this.state.visible}/>
      </div>
    )
  }
}

export default App;
