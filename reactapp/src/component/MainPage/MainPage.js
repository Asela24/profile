import './MainPage.css';
import img1 from './img1.jpg';
import {Link} from "react-router-dom";
import Card from "../BuyPage/Card/Card";
import mainapartmentList from "../Data/mainPageCard";
import React from "react";





function MainPage() {

    return(
        <div className={'main-page'}>
            <img src={img1} alt={'img-main'} className={'main-page__img'}/>
            <div className={'main-page__block'}>
                <div className={'main-page__block-text'}>Make yourself at home.</div>
                <Link to={'buyPage'} className={'main-page__block-items'}>Buy</Link>
                <Link to={'autoPage'} className={'main-page__block-items'}>Login</Link>
            </div>
            <div className={'main-page__card'}>
                { mainapartmentList.map((element) =>
                    {
                        return (
                            <div className={'div_el'} key={element.id}>
                            <Card
                                id ={element.id}
                                img={element.img}
                                nameOfObject={element.nameOfObject}
                                costs={element.costs}
                                typeOfObject={element.typeOfObject}
                                size={element.size}
                                bedRoom={element.bedRoom}
                                location={element.location}
                            />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );

}

export default MainPage;