// Library Imports
import React from "react"
import ReactDOM from 'react-dom/client'

// User defined imports
import App from "./App"


// Creating a root
const root = ReactDOM.createRoot(document.getElementById('root'))


// Rendering the root
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)