import React from "react";

const Card = (props) => {
    const {card} = props;

    return(
        <div className={"card"}>
            <div className={"content "}>
                <div className={"header"}>{card.userId}</div>
                <div className={"meta"}>{card.id}</div>
                <div className={"meta"}>{card.title}</div>
                <div className={"description"}>{card.body}</div>
            </div>
        </div>
    );
};
    
export default Card;