//////////////////////////////////

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUserCart} from '../store/userCart'

class UserCart extends Component {
  componentDidMount() {
    this.props.usercart()
  }

  render() {
    let addedProducts = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.imageUrl} alt={item.imageUrl} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.name}</span>
              <p>{item.description}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/usercart">
                  <i className="material-icons">arrow_drop_up</i>
                </Link>
                <Link to="/usercart">
                  <i className="material-icons">arrow_drop_down</i>
                </Link>
              </div>
              <button
                type="button"
                className="waves-effect waves-light btn pink remove"
              >
                Remove
              </button>
            </div>
          </li>
        )
      })
    ) : (
      <p>Nothing.</p>
    )
    return (
      <div className="container">
        <div className="UserCart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedProducts}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    items: state.userCart.addedProducts
  }
}

const mapDispatchToProps = dispatch => {
  console.log('.........>>>>>>')
  return {
    usercart: () => dispatch(getUserCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCart)
