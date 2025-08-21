import './App.css'
import Home from './components/new/Home'
import HomeNew from './components/home/Home'

function App() {
  return (
    <>
    <h1>Task from ClassMonitor</h1>
    <h3>Sample 1</h3>
    <h6>Note:-I am using a tooltip for small screens so that when we hover over a cell, the full text is displayed.</h6>
      <Home/>
    <h3>Sample 2</h3>
    <h6>Note:-Normally, I don’t use tooltips here. Please check on a small screen, and also try zooming out the screen, because sometimes smaller desktop screens freeze and do not adjust the UI properly.</h6>
      <HomeNew />
    </>
  )
}

export default App
