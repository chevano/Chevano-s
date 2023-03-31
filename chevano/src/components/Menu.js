import React from "react";
import '../App.css';

const Menu = () => {
  return (
    <div className="container">
      <br></br>
      <h1 className="heading text-center">Menu</h1> <br></br>

      <div className="card mb-3">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" alt="menu-item" src="https://thumbs.dreamstime.com/b/oxtail-curry-rice-2518644.jpg"></img>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Oxtail</h5>
              <p className="card-text">Brown Stew Oxtail with rice and peas</p>
              <p className="card-text">
                <small className="text-muted">$18.00 Small</small> <br></br>
                <small className="text-muted">$21.00 Medium</small> <br></br>
                <small className="text-muted">$25.00 Large</small>
              </p>
            </div>
          </div>
        </div>
      </div> { /*menu-item1*/}

      <div className="card mb-3">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" alt="menu-item" src="https://gracefoods.com/images/Recipes2017/cropped-Curried--oat.jpg"></img>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Curry Goat</h5>
              <p className="card-text">Curry Goat is best serve with jasmine white rice but can also be served with rice and peas</p>
              <p className="card-text">
                <small className="text-muted">$18.00 Small</small> <br></br>
                <small className="text-muted">$21.00 Medium</small> <br></br>
                <small className="text-muted">$25.00 Large</small>
              </p>
            </div>
          </div>
        </div>
      </div> { /*menu-item2*/}

      <div className="card mb-3">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" alt="menu-item" src="https://www.lifehabi.com/recipes/jamaica/wp-content/uploads/2020/03/Fried-Chicken-678x422.jpg"></img>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Fry Chicken</h5>
              <p className="card-text">Golden Crust Fry Chicken can be eaten by itself as a tasty treat or can be combined white rice, rice and peas, or with dumplins and banana</p>
              <p className="card-text">
                <small className="text-muted">$10.00 Small</small> <br></br>
                <small className="text-muted">$13.00 Medium</small> <br></br>
                <small className="text-muted">$15.00 Large</small>
              </p>
            </div>
          </div>
        </div>
      </div> { /*menu-item3*/}

      <div className="card mb-3">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" alt="menu-item" src="https://media.istockphoto.com/id/538643574/photo/spicy-grilled-jerk-chicken.jpg?s=612x612&w=0&k=20&c=A5bzNuietYkn1suqd83hm4YVNRdl5xLWYNmQ4sv_5x0="></img>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Jerk Chicken</h5>
              <p className="card-text">Spicy Grilled Jamaican Jerk Chicken can be eaten by itself as a tasty treat or can be combined white rice, rice and peas, or dumplins and banana</p>
              <p className="card-text">
                <small className="text-muted">$10.00 Small</small> <br></br>
                <small className="text-muted">$13.00 Medium</small> <br></br>
                <small className="text-muted">$15.00 Large</small>
              </p>
            </div>
          </div>
        </div>
      </div> { /*menu-item4*/}

      <div className="card mb-3">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" alt="menu-item" src="https://media.istockphoto.com/id/513800730/photo/ackee-and-saltfish-jamaican-cuisine.jpg?s=612x612&w=0&k=20&c=y2e1zbjtj3Be7fJVghwaWGpOG-M-mQKOWhTpNPD1gbM="></img>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Ackee and Salfish</h5>
              <p className="card-text">The Jamaican national dish (ackee) is best served with breadfruit, or boil dumplin with green bananas.</p>
              <p className="card-text">
                <small className="text-muted">$16.00 Small</small> <br></br>
                <small className="text-muted">$21.00 Medium</small> <br></br>
                <small className="text-muted">$28.00 Large</small>
              </p>
            </div>
          </div>
        </div>
      </div> { /*menu-item5*/}

      <div className="card mb-5">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" alt="menu-item" src="https://www.blackfoodie.co/wp-content/uploads/2016/04/Screen-Shot-2016-04-29-at-6.10.10-PM.png"></img>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Fry Fish</h5>
              <p className="card-text">Jamaican Escovitch Fried Red Snapper is best serve with boil dumplins and green bananas.</p>
              <p className="card-text">
                <small className="text-muted">$20.00 Small</small> <br></br>
                <small className="text-muted">$28.00 Medium</small> <br></br>
                <small className="text-muted">$35.00 Large</small>
              </p>
            </div>
          </div>
        </div>
      </div> { /*menu-item6*/}
    </div>
  )
}
export default Menu;