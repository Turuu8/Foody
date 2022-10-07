import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    {/* <Route/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
};