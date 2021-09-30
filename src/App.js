import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import Home from "./pages/Home";
import TagList from "./pages/TagList";
import AboutUs from "./pages/AboutUs";

// Elements import Here 

import BlogGridView from "./components/blog/BlogGridView";
import BlogListView from "./components/blog/BlogListView";
import BlogGridSidebar from "./components/blog/BlogGridSidebar";
import BlogListSidebar from "./components/blog/BlogListSidebar";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";


// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Home}/>
                    {/* Blog Part  */}
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} exact component={BlogGridView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-view"}`} exact component={BlogListView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid-sidebar"}`} exact component={BlogGridSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-sidebar"}`} exact component={BlogListSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} exact component={BlogDetails}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} exact component={TagList}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs}/>
                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>
                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
