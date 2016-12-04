import React from 'react';
import marked from 'marked';
import axios from 'axios';
import Loading from '../component/Loading';
import '../post.css';
import hljs from 'highlight.js';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address = this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/liuxicui/11-28-demo/master/data/${address}.md`)
      .then(res => this.setState({data:res.data}) )
      .catch( err => alert(err))
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });
    return(
      <div className='item-wrap'>
        {
          this.state.data.length==0 ? <Loading /> :
              <div className='post-content' dangerouslySetInnerHTML={{__html:marked(this.state.data)}}/>
        }
      </div>
    )
  }
}
export default Item;
