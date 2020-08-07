import React, {Component} from 'react'
// import { connect } from ‘react - redux’
class UserCart extends Component {
  render() {
    return (
      <div className="container">
        <h3>USER-CART</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Home)
