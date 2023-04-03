

export default function Forms({comments, fetchComments, createComment}){

    const handleSubmit = (event) => {
        event.preventDefault();

        const anotherComment = {
            name: document.getElementById('name').value,
            comment: document.getElementById('comment').value,
        }

        createComment({...anotherComment}).then(fetchComments());

        document.getElementById('name').value = '';
        document.getElementById('comment').value='';
    }
    return(
        <div className='row'>
            <form onSubmit = {handleSubmit}>
                <input type="text" id ='name' placeholder="Enter your Name"></input>
                <input type="text" id = 'comment' placeholder="Record your sighting here"></input>
                <button type='submit'>Submit</button>  
            </form>
            
        </div>
        );
    
}