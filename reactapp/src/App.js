import './App.css';
import {Provider} from 'react-redux';
import MainPage from "./component/MainPage/MainPage";
import {Outlet, Route, Router, Routes, Switch} from "react-router-dom";
import BuyPage from "./component/BuyPage/BuyPage";
import AutoPage from "./component/AutoPage/AutoPage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import {store} from "./redux";
import FavoritePage from "./component/FavoritePage/FavoritePage";
import ScrollToTop from "./component/Route/ScrollTotop";


export default function App() {
    return (
        <Provider store={store}>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={'buyPage'} element={<BuyPage/>}/>
                <Route path={'autoPage'} element={<AutoPage/>}/>
                <Route path={'favPage'} element={<FavoritePage/>}/>
            </Route>

        </Routes>
        </Provider>

);
}



function Layout() {
    return (
        // Основной Layout. Содержит основные элементы страницы, которые
        // загружаются на все роуты
        <div>
            <Header/>
            <main style={{height: 'fit-content', backgroundColor: 'rgb(141, 147, 169)'}}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}


