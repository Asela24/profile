import './BuyPage.css';
import React from "react";
import Card from "./Card/Card";
import apartmentList from "../Data/apartmentData";
export default class BuyPage extends React.Component{


    render() {

        return(
        <div  className={'main-card-container'}>

            {
                apartmentList.map((element) => {
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
                        />
                        </div>
                    )
                })
            }



        </div>
        )
    }
}
