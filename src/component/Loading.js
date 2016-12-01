import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Lodaing extends React.Component {

  render () {
    return(
      <div>
        <CircularProgress color='pink' size={30}/>
      </div>
    )
  }
}

export default Lodaing;
