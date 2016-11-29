import React from 'react';

class NevHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <button type="button" className="btn btn-default" aria-label="Left Align">
        <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>BACK
        </button>
        <h3>liuxicui@HOME</h3>
        <button type="button" className="btn btn-default" aria-label="Left Align">
        <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}

export default NevHeader;
