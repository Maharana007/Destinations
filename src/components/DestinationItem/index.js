// Write your code here
const DestinationItem = prop => {
  const {destinationsDetails} = prop
  const {imgUrl, name} = destinationsDetails

  return (
    <li className="destination-item">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name"> {name}</p>
    </li>
  )
}

export default DestinationItem
