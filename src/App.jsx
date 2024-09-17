import './App.css'
import Results from './Components/Results'
import Summary from './Components/Summary'

function App() {
  return (
    <div className="grid place-items-center min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl w-full bg-white rounded-lg shadow-md">
        <Results />
        <Summary />
      </div>
    </div>
  )
}

export default App
