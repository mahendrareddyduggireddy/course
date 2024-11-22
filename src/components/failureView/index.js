import './index.css'

const FailureView = props => {
  const {apiFunc} = props
  const retryFunc = () => {
    apiFunc()
  }
  return (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="img-style"
      />
      <h1>OOps something went wrong</h1>
      <p>the thing you searching for not found</p>
      <button type="button" onClick={retryFunc}>
        Retry
      </button>
    </div>
  )
}
export default FailureView
