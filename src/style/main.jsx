import ReactDom from "react-dom/client"

import { Provider as ReducProvider } from "@/libs/react-redux.jsx"
import App from './App.jsx'
import { store } from "@/store/index.js";



ReactDom.createRoot(document.getElementById('root')).render(
      <ReducProvider store={store}>
            <App />
      </ReducProvider>
)
