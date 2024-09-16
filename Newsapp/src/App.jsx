import './App.css';
import Navbar from './components/navbar.jsx';
import News from './components/news.jsx';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react';

const App = () => {
    
    const pageSize = 15;
    const [progress, setProgress] = useState(0);
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;

        return (
            <> 
                <Navbar/>
                <LoadingBar color='#f11946' progress={progress} />

                <Routes>
                    <Route exact path="/" element={<News key="main" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="general"/>} />
                    <Route exact path="/home" element={<News key="general" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="general"/>} />
                    <Route exact path="/business" element={<News key="business" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="business"/>} />
                    <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="entertainment"/>} />
                    <Route exact path="/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="health"/>} />
                    <Route exact path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="science"/>} />
                    <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="sports"/>} />
                    <Route exact path="/technology" element={<News key="technology" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='us' category="technology"/>} />

                    {/* here components are not remounting in the browser, because it is assuming that component it mount so no need to remount the same component */}
                    {/* we are using key to make all route unique */}
                    
                </Routes>
            </>
        )

}

export default App;
