import React, { Component } from 'react';

export class DeptDetails extends Component {

    constructor(props){
        super()
    }

    handleOnClick = (deptId) => {
        this.props.getDeptDetails(deptId)
    }

  render() {
    const {data} = this.props

    return (
      
      <div className='nav-bar'>
        <h2 className='nav-text'>Department List</h2>
        {data.map((item) => {
            return(
                <div key={item.deptId} className='nav-text'>
                    <a
                      className='link-text'
                      href="#"
                      onClick={() => this.handleOnClick(item.deptId)} >
                      {item.deptId} {item.deptDetails.dept_name}
                    </a>
                </div>
            )
        })}
    </div>
    );
  }
}

export default DeptDetails;
