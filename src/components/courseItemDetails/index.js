import './index.css'
import {Component} from 'react'

class CourseItem extends Component {
  state = {itemDetails: {}}

  componentDidMount() {
    this.itemApiFunc()
  }

  itemApiFunc = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()
    const courseDetails = data.course_details
    const updatedData = {
      id: courseDetails.id,
      name: courseDetails.name,
      imageUrl: courseDetails.image_url,
      description: courseDetails.description,
    }

    this.setState({itemDetails: updatedData})
  }

  render() {
    const {itemDetails} = this.state
    const {name, description, imageUrl, id} = itemDetails
    return (
      <div className="item-container">
        <h1>{id}</h1>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={imageUrl} alt={name} height={40} width={40} />
      </div>
    )
  }
}
export default CourseItem
