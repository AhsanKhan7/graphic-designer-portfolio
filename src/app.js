import ReactDOM from 'react-dom'
import React from 'react'
import Header from './components/header'
import Grid from './components/grid'
import MobilePage from './components/mobilePage'
import MaskPage from './components/maskPage'
import EduPage from './components/educationalPage'
import TexPage from './components/textilePage'
import About from './components/about'
import Rout from './components/router'
import { BrowserRouter, HashRouter } from 'react-router-dom';

import 'normalize.css/normalize.css'
import './styles/style.scss'


// const App = () => {
//     return (
//         <div>
//             <Header />
//             <Grid />
//         </div>
//     )    
// }

// export default App
ReactDOM.render(
                    Rout  
                    ,
                document.getElementById('app'))
