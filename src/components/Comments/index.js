import './index.css'

import {formatDistanceToNow} from 'date-fns'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {count: 0, name: '', txt: '', commentsList: []}

  onName = event => {
    this.setState({name: event.target.value})
  }

  onType = event => {
    this.setState({txt: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, txt} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      txt,
      date: new Date(),
      isLiked: false,
      cl:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      txt: '',
      count: prevState.commentsList.length + 1,
    }))
  }

  onLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleted = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {count, name, txt, commentsList} = this.state
    return (
      <div className="total">
        <div className="bg">
          <div>
            <h1 className="head">Comments</h1>
            <form className="card">
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="ipt"
                value={name}
                onChange={this.onName}
              />
              <textarea
                className="ipt-1"
                placeholder="Your Comment"
                value={txt}
                onChange={this.onType}
              />
              <button className="btn" type="submit" onClick={this.onAddComment}>
                {' '}
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="line" />

        <p>
          {' '}
          <span className="spcl">{count}</span> Comments
        </p>
        <ul className="lists">
          {commentsList.map(each => (
            <CommentItem
              onLiked={this.onLiked}
              onDeleted={this.onDeleted}
              key={each.id}
              details={each}
              isActive={each.isLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
