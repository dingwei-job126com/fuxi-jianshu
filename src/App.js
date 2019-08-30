import React from 'react';
import { GlobalStyle } from './style.js';
import { GlobalstyleFont } from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import Header from './common/header';
import HomeIndex from './pages/home';
import Login from './pages/login';
import Writer from './pages/writer';
import Detailed from './pages/detail';
import Footer from './common/footer';


function App() {
  return (
    <Provider store={store}>
      <div>
          <GlobalStyle />
          <GlobalstyleFont />      
        	<BrowserRouter>
        		<div>
    		     	<Header/>
              <Route path="/" exact component={HomeIndex}></Route>
    		     	<Route path='/login' exact component={Login}></Route>
              <Route path='/Writer' exact component={Writer}></Route>
              <Route path='/detail/:id' exact component={Detailed}></Route>
    		     	<Footer/>
    	     	</div>
         	</BrowserRouter>
          
      </div>
    </Provider>
  );
}

export default App;
