import React from 'react';


class TodoControl extends React.Component {
  constructor(){
    super();
    this.state={
      btns:['ALL','ACTIVE','COMPLETED']
    }
  }
  render () {

    return(
      <div>
        分类：
        {this.state.btns.map(
          item => <button key={Math.random()} className={this.props.visible==item ? 'btn btn-danger' :'btn-btn-default'} onClick={ ()=> this.props.handleFilter(item)}>{item}</button>
        )}
      </div>
    )
  }
}

export default TodoControl;
