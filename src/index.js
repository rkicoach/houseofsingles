import React from 'react';
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux';
import Store from './components/Redux/Store'

render(<Provider store={Store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</Provider>, document.getElementById("root"))
