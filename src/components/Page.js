import Forms from './Forms.js';
import CommentList from './CommentList.js';
import {useState, useEffect} from 'react';
import {commentsApi} from './CommentApi.js'

export default function Page() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []); 

    const fetchComments = async() => {
        const addComment = await commentsApi.get();
        setComments(addComment)
    };

    const createComment = async(comment) => {
        await commentsApi.post(comment);
        fetchComments();
    };

    const updateComment = async(comments) =>{
        await commentsApi.put(comments);
        fetchComments();
    }

    const deleteComment = async(id) => {
        await commentsApi.delete(id)
        fetchComments();
    }


    return(
    <div>
        <div className='framed primary'>
         < Forms  comments ={comments} setComments = {setComments} fetchComments ={fetchComments} createComment = {createComment} />   
        </div>
        <div>
         <CommentList comments ={comments} updateComment = {updateComment} deleteComment = {deleteComment} />   
        </div>
        
    </div>
    )
}