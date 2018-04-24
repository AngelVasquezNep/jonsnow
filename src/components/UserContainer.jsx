import React, {Component} from 'react'
import UserFull from './UserFull';
import User from './User';


class UserContainer extends Component {
  state = {
    userFull: false,
    text: 'More'
  }

  handleClickUser = () => {
    this.setState({
      userFull: !this.state.userFull,
      text: this.state.userFull ? 'More' : 'Less'
    })
  }

  render () {
    return (
      <div>
          {
            !this.state.userFull ? (
                <User
                  text = {this.state.text }
                  handleClick = {this.handleClickUser}
                  {...this.props}
                  />
                ) : (
                <UserFull 
                  text = {this.state.text }
                  handleClick = {this.handleClickUser}
                  {...this.props}
                />
              )
          }
      </div>
    )
  }
}

export default UserContainer