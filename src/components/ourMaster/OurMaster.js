import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './OurMaster.css'

class OurMaster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div class ="section" > 
      <div class="card w-100">
              <img class="card-img img-fluid" src="../img/Amma_banner.jpeg" alt="Card image"/>
            
      </div>
      </div>
    )
  }

}

export default OurMaster;
