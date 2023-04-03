import {useState} from 'react'

 export default function CommentList({ comments, deleteComment,updateComment}) {

    const [updatedComment,setUpdatedComment] = useState([]);
  

    const onSubmit = (comment) => {
        const updatedComment= {
            id: comment.id,
            comment:document.getElementById('updatedComment').value,
        }

        updateComment(updatedComment);
    };

    const handleCommentChange = (e) => {
        setUpdatedComment(e.target.value);
    }


    

        return(
            <div className = 'card'>
                {comments.map((comment) => (
                   <div key = {comment.id} className="framed secondary">
                        <h4>{comment.name}</h4>
                        <p>{comment.comment}</p>
                        <form onSubmit ={onSubmit}>
                        <input
                            type='text'
                            id = 'updatedComment'
                            placeholder ='update Sighting'
                            onChange ={handleCommentChange}
                            value ={comment.updatedComment}
                        />
                        <button type='submit'>Update</button>
                        <button type = 'button' onClick = {() => deleteComment(comment.id)}>Delete</button>
                        </form>
                    </div>
                ))}
            </div>
        )
    


}
