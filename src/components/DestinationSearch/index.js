// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="destinations-search-container">
          <h1 className="title">Destination Search </h1>
          <div className="search-input-container ">
            <input
              type="search"
              onClick={this.onChangeSearch}
              value={searchInput}
              placeholder="Search"
              className="search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="icon"
              alt="search icon"
            />
          </div>
          <ul className="destination-card-list">
            {searchResult.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationsDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
