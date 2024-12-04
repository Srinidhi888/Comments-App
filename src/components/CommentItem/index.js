// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, onLiked, onDeleted, isActive} = props
  const {name, txt, date, isLiked, id, cl} = details
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const par = isActive ? 'par' : null
  const ptime = formatDistanceToNow(date)
  const onLike = () => {
    onLiked(id)
  }
  const onDelete = () => {
    onDeleted(id)
  }

  return (
    <li>
      <div className="cmt">
        <p className={`item ${cl}`}>{name[0]}</p>
        <div>
          <p>
            {name} <span className="dt">{ptime}</span>
          </p>

          <p>{txt}</p>
        </div>
      </div>
      <div className="lk">
        <div>
          <button className="bt" onClick={onLike}>
            <img src={imgUrl} alt="like" />
          </button>
          <span className={`dt ${par}`}>Like</span>
        </div>
        <button className="bt" data-testid="delete" onClick={onDelete}>
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
