import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT }
from '../actions/comment_actions';

const commentsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return [...state, action.comment]
        case REMOVE_COMMENT:
            let newState = Object.assign([], state);
            newState = newState.filter(comment => comment._id !== action.commentId);
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;