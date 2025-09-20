import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
    
     <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        🚀 CI/CD Dashboard Demo
      </h1>

     <div className="min-h-screen bg-gray-100 p-6">
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Family nation</h2>
          <p className="text-green-600 font-bold">Family nation</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Deployments</h2>
          <p className="text-blue-600 font-bold">Technical Assitance</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Health Check</h2>
          <p className="text-green-600 font-bold">Healthy</p>
        </div>

        {/* Box 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Slack Alerts</h2>
          <p className="text-yellow-600 font-bold">2 Pending</p>
        </div>

        {/* Box 5 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">conference room </h2>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
            Rollback Last Release
          </button>
        </div>

        {/* Box 6 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Logs</h2>
          <p className="text-gray-600">Family</p>
            <p className="text-gray-600">Family</p>
        </div>
      </div>
    </div>
    </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
      <h1 className="text-1xl text-red-700  underline underline">
      Hello world!
    </h1>

    
    </div>
  );
}

export default App;
