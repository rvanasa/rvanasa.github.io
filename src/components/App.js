import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './page/HomePage';
import ProjectPage from './page/ProjectsPage';
import StoryPage from './page/StoryPage';
import SkillsPage from './page/SkillsPage';
import ScrollToTop from './util/ScrollToTop';
import ContactPage from './page/ContactPage';

import './App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/story">
                        <StoryPage/>
                    </Route>
                    <Route path="/skills">
                        <SkillsPage/>
                    </Route>
                    <Route path="/projects">
                        <ProjectPage/>
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
};
