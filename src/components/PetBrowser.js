import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderAllPets = () => {
    return this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet}/>)
  }

  render() {
    return <div className="ui cards">
      {this.renderAllPets()}
    </div>
  }
}

export default PetBrowser
