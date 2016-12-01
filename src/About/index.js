import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      //0没搜索,1后台未响应数据为接受,2数据接受完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value = this.refs.gitname.getValue();
    axios.get(`https://api.github.com/users/${value}`)
     .then( res => this.setState({data:res.data,wait:2}) )
     .catch( error => {alert(error);this.setState({wait:0}) } )
    this.refs.form.reset();
  }
  render () {
    let showGitinfo = this.state.wait == 0 ? null :
     this.state.wait ==1 ? <Loading /> : <ShowGit gitInfo={this.state.data}/>
    return(
    <div className="about-wrap">
      <div className="git-card">
        <h4>黑球球</h4>
        <form className="about-form" onSubmit={this.handleSubmit.bind(this)} ref='form'>
          <TextField ref='gitname' hintText="text" underlineFocusStyle={{borderColor:'pink'}} style={{width:'60%'}}/>
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="Search" secondary={true} style={{marginLeft:'10px'}}/>
        </form>
        {showGitinfo}
      </div>
    </div>
    )
  }
}

export default About;
