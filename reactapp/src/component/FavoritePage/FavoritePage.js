
import {useSelector} from "react-redux";
import Card from "../BuyPage/Card/Card";
import React, {useState} from "react";
import './FavortiePage.css'


export default function FavoritePage() {
    const favApartmentList = useSelector(state => state.cart.itemsInCart)
    //есть ли товары в избранном
    const a = (item) => { if (item.length === 0) {
        return ('No favourites')
    } else {
        return ('')
    } }

        return(
            <div className={'fav_page'}>
                <div className={'empty-text'}> { a(favApartmentList) } </div>
                <div className={'card_cont'}>
                    {favApartmentList.map((element) => {
                    return (
                        <div className={'div_el'} key={element.id}>
                            <Card
                                id={element.id}
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
        )
};


