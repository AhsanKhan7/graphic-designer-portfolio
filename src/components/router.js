import React from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
// import App from '../app'
import Home from './Home'
import About from './about'
import EduPage from './educationalPage'
import MaskPage from './maskPage'
import MobilePage from './mobilePage'
import TexPage from './textilePage'
import Error from './Notfound'

const Rout = (
                <BrowserRouter>
                 <div>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about" component={About} />
                    <Route path="/edupage" component={EduPage} />
                    <Route path="/maskpage" component={MaskPage} />
                    <Route path="/mobilepage" component={MobilePage} />
                    <Route path="/texpage" component={TexPage} />
                    <Route Component={Error}/>
                 </div>
                </BrowserRouter>
    )   


export default Rout