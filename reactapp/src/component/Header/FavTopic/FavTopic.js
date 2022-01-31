import {useSelector} from "react-redux";
import './FavTopic.css';

export default function FavTopic () {
    const items = useSelector(state => state.cart.itemsInCart) // получаем массив itemsInCart
    const totalCard = items.length; // количество штук в массиве - сколько всего в корзине
    return (
        <div className={'counter-style'}> {totalCard} </div>
    )
}