import React from 'react'

const Card = (props) => {
  let badgeText =""
   if(props.openSpots===0){
    badgeText="SOLD OUT"

  }else if(props.location === "Online"){
    badgeText="Online"
    
  }else{
    badgeText=""
  }
  return ( 
    <div>
      <div className="card " style={{ background:" black",
    color: "white"}}>

{badgeText&& <div className="card--badge">{badgeText}</div>}

  <img src={props.coverImg} className="card-img-top" alt="katie-zaferes.png"/>
  <div className="card-body">
                <span>{props.rating}<i className="fa-solid fa-star"></i></span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location }</span>
        <p className="card--title">{props.title}</p>
   <p>{props.price}/person </p>
  </div>
</div>
    </div>
  )
}

export default Card
