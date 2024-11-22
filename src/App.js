import './App.css'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import CourseDetails from './components/courseDetails'
import CourseItem from './components/courseItemDetails'
import NotFound from './components/notFound'

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={CourseDetails} />
      <Route exact path="/course/:id" component={CourseItem} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
