import React, { Component } from 'react';
import "./BusinessList.css"
import Business from "../business/Business"


class BusinessList extends Component {

  render() {
    console.log(this.props.busineses)
    return (
      <div className="BusinessList">
        {this.props.busineses.map((business) => (
          <Business key={business.id} business={business} />
        ))}

      </div>

    )
  }
}


export default BusinessList; 
