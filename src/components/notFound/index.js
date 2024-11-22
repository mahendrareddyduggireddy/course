import './index.css'

const NotFound = props => {
  const {history} = props
  const backHomeFunc = () => {
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img src="" alt="not found" />
      <p>404 Not Found</p>
      <button type="button" onClick={backHomeFunc}>
        Back Home
      </button>
    </div>
  )
}
export default NotFound
