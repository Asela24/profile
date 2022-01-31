import {useState} from "react";
import './Card.css';

import {deleteItemFromCart, setItemInCart} from "../../../redux/cart/reducer";
import {useDispatch, useSelector} from "react-redux";

export default function Card (props) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCard = items.some(item => item.id === props.id)//элемент в корзине или нет some возвращает true or false
    const handleClick = (e) => {
                e.stopPropagation(); //// остановка всплытия события
        if (isItemInCard) {
                dispatch(deleteItemFromCart(props.id))
        } else {
                dispatch(setItemInCart(props))
        }
    }
            return(
                <div className={'card_container'}>
                    <img src={props.img} alt={'pic of flat or house'} className={'card__img'}/>
                    <div className={'card_container__data'}>
                        <div className={'name-of-Object'}>{props.nameOfObject}</div>
                        <div className={'card__typeOfObject'}>{props.typeOfObject} | </div>
                        <div className={'card__size'}> {props.size} | </div>
                        <div className={'card__size'}>{props.bedRoom}</div>
                    </div>
                    <div className={'card_container__info'}>
                        <div className={'costs'}>{props.costs}</div>
                        <button
                            onClick={handleClick}
                            className={'like-button'}
                            style={{color:isItemInCard ? 'red' : ' #077b8a'}}> ♡ </button>
                    </div>

                </div>
            )


}

