import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-white p-0 rounded-lg shadow-lg flex h-[90vh] w-full">
          <div className="p-4 w-1/2">
            <div className="flex items-center justify-center h-screen">
              <form className="bg-white p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
              </form>
            </div>
          </div>
          <div className="text-white p-4 w-1/2 bg-indigo-800 rounded-r-lg">
            test
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
