import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h1>I am liuxicui</h1>
            <p>Welcome!</p>
            <button type="button" className="btn btn-default"><a href="https://liuxicui.github.io" style={{color:'#666'}}>Hire Me</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
