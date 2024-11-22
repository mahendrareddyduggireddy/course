import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import FailureView from '../failureView'

class CourseDetails extends Component {
  state = {courseList: [], isLoading: true, errMsgArr: false}

  componentDidMount() {
    this.courseApiCall()
  }

  courseApiCall = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({courseList: updatedData, isLoading: false})
    } else {
      this.setState({isLoading: false, errMsgArr: true})
    }
  }

  render() {
    const {courseList, isLoading, errMsgArr} = this.state
    return (
      <div className="home-container">
        {!isLoading && errMsgArr ? (
          <FailureView apiFunc={this.apiFunc} />
        ) : (
          <ul className="ul-container">
            {courseList.map(each => (
              <Link to={`/course/${each.id}`}>
                <li className="li-container" key={each.id}>
                  <img src={each.logoUrl} alt={each.name} />
                </li>
              </Link>
            ))}
          </ul>
        )}
        {isLoading && <Loader data-testid="loader" type="talespin" />}
      </div>
    )
  }
}
export default CourseDetails
