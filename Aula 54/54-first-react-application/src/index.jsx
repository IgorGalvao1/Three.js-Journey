import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

const toto = 'there'

root.render(
    <div>
        <App clickersCount={ 4 }>
            <h1>My First React App</h1>
            <h2>And a fancy subtitle</h2>
        </App>
    </div>
)
