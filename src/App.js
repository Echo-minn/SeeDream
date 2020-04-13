import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Layout/Nav0';
import Footer from './Layout/Footer0';
import Home from './Home';
import ArtGallery from './AIResearch';
import Library from './AIPaper';
import keepAlive from './keepAlive';
import Concert from './Concert';
import Learnmore from './Learnmore';
import News0 from './AINews/news/news0';
import News1 from './AINews/news/news1';
import News2 from './AINews/news/news2';
import News3 from './AINews/news/news3';
import News4 from './AINews/news/news4';
import News5 from './AINews/news/news5';
import iTeam from './iTeam';
import LoginForm from './user/login0';
import WrappedRegistrationForm from './user/register';
import { BackTop } from 'antd';

import {
  Nav00DataSource,
  Footer00DataSource,
} from './Home/data.source.js';

let isMobil;
enquireScreen((b)=>{
  isMobil=b;
});

// const  TIMER =8000;
// let timeoutId=null;

class App extends Component{

  // state={
  //   show:false
  // };

  constructor(props){
    super(props);
    this.state = {
      isMobil,
    };
  }
  componentDidMount() {
    //适配手机屏幕
    enquireScreen((b)=>{
      this.setState({isMobil: !!b});
    });
  }
  // componentWillMount() {
  //   const { loading } = this.props;
  //   if (loading) {
  //     timeoutId = setTimeout(() => {
  //       this.setState({
  //         show: true
  //       });
  //     }, TIMER);
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   const { loading } = nextProps;
  //   const { show } = this.state;
  //   this.setState({
  //     show: false
  //   });
  //   if (loading) {
  //     timeoutId = setTimeout(() => {
  //       this.setState({
  //         show: true
  //       });
  //     }, TIMER);
  //   }
  // }
  // componentWillUnmount() {
  //   if (timeoutId) {
  //     clearTimeout(timeoutId);
  //   }
  // }

  render() {
    return(
        <Router>
          <div>
            <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
            <Route exact path="/" component={Home} />
            <Route exact path="/ArtGallery" component={ArtGallery}/>
            <Route exact path="/Library" component={Library}/>
            <Route exact path="/keepAlive" component={keepAlive}/>
            <Route exact path="/Concert" component={Concert}/>
            <Route exact path="/Learnmore" component={Learnmore}/>
            <Route exact path="/AINews/News0" component={News0}/>
            <Route exact path="/AINews/News1" component={News1}/>
            <Route exact path="/AINews/News2" component={News2}/>
            <Route exact path="/AINews/News3" component={News3}/>
            <Route exact path="/AINews/News4" component={News4}/>
            <Route exact path="/AINews/News5" component={News5}/>
            <Route exact path="/seeTeam" component={iTeam}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/register" component={WrappedRegistrationForm}/>
            <Footer dataSource={Footer00DataSource} isMobile={this.isMobile} />
          </div>
          <div>
            <BackTop />
            Scroll down to see the bottom-right
            <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
            button.
          </div>
        </Router>
    );
  }
}


export default App;
