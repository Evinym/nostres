import React, { Component } from 'react';
import data from "./Data";

class Card extends Component {
    
  render() {
      const{name,alt, price,description,img, onClick} = this.props; 
    
    return (
        <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={img} alt={alt}/>
         <span className="card-title">{name}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={onClick}><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
        <p>{price}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
    );
  }
}

class Basket extends Component {
    
  render() {
    const { img, name, price, total , nb, initDelete } = this.props;
    return (
        <li className="collection-item avatar">
            <img src={img} alt="" className="circle" />
            <span className="title">{name}</span>
            <p><b>Prix: </b>{total} <br />
                <b>Nombre de produits: </b>{nb}
            </p>
            <a href="#!" className="secondary-content" onClick={initDelete}>
                <i className="material-icons">delete</i>
            </a>
        </li>
    );
}
}

class App extends Component {
  state = { 
    cartData : []
  }
  

  sendToArray = product =>{
    let {cartData} = this.state;
    //On vérifie si le produit existe déjadans le tableau
    let index = cartData.indexOf(product);
    
    if (index === -1){
    this.setState({
      cartData : [...this.state.cartData, product]
      //les trois points sont de l'ES6 pour dire qu'en plus de ce qu'il y a dans le tableau, on va rajouter product
    })
  }else{
    //incrémente le nombre 
    cartData[index].nb++;
    //créé une clé total et lui donne la valeur du prix multiplié par le nombre de produits
    cartData[index].total = cartData[index].price * cartData[index].nb;
    this.setState({
      cartData: [...cartData]
    })
  }
  };

delete = (el, i) =>{
  let {cartData} = this.state;
  // si la clé nombre est supérieure a 1 
  if (cartData[i].nb > 1) {
    // tu décrémente la valeur de la clé nombre 
    cartData[i].nb --;
    //tu recalcul le total 
    cartData[i].total = cartData[i].nb * cartData[i].price;
  }else{
    //sinon tu me retire juste l'élément à supprimer 
    cartData.splice(i, 1);
  }
  //tu mets à jour la state
  this.setState({
    cartData: [...cartData]
  })
}


  render() {
    console.log(this.state.cartData)
    return (
      <div>

        <div className="row">
        {data.map((el,i)=>{
          return(
            <Card key={i}
             name={el.name}
             price={el.price}
             description={el.description}
             img={el.src}
             alt={el.name}
             onClick={() =>this.sendToArray(el)}/>
          )
        })}
        </div>
        <ul className="collection">
        {this.state.cartData.map((el,i)=>{
          return(
            <Basket key={i}
            img={el.src}
            name={el.name}
            nb={el.nb}
            total={!el.total ? el.price : el.total}
            initDelete ={()=>this.delete(el, i)}
            />
          )
        })}
        </ul>
      </div>
    );
  }
}

export default App;