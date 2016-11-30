import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.gitname.getValue());
    this.refs.form.reset();
  }
  render () {
    return(
    <div className="about-wrap">
      <div className="git-card">
        <h4>黑球球</h4>
        <form className="about-form" onSubmit={this.handleSubmit.bind(this)} ref='form'>
          <TextField ref='gitname' hintText="text" underlineFocusStyle={{borderColor:'pink'}} style={{width:'60%'}}/>
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="Search" secondary={true} style={{marginLeft:'10px'}}/>
        </form>

      </div>
    </div>
    )
  }
}

export default About;
