import React, {FC} from 'react';
import s from './App.module.scss';
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from '../features/main/Main'
import {Link, Routing} from "../utils/enum/Routing";
import {Recommendation} from "../features/recommendation/Recommendation";
import logo from './../assets/images/logo.svg';
import {Footer} from "../components/ui/footer/Footer";
import {useAppSelector} from "../hooks/useAppSelector";
type AppType = {}

export const App: FC<AppType> = () => {
  const {animal} = useAppSelector(state => state.main);
  return (
    <div className={s.app}>
      <img className={s.logo} src={logo} alt={'Logo'}/>

      <Routes>
        <Route path={Routing.MAIN} element={<Main/>}/>
        <Route path={Routing.MAIN + '*'} element={<Navigate to={'/'}/>}/>
        <Route path={Routing.RECOMMENDATION} element={animal ? <Recommendation/> : <Navigate to={Link.MAIN}/>}>
          <Route path={':id'} element={<Recommendation/>}/>
        </Route>
        <Route path={Routing.RECOMMENDATION + '/*'} element={<Navigate to={Link.RECOMMENDATION}/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}
