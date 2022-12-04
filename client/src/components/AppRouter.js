import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = false
    return (
        <div>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
            </Routes>
        </div>
    );
};

export default AppRouter;