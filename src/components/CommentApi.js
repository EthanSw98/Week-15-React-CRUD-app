
const COMMENTS_ENDPOINT = "https://6407659c77c1a905a0f7cd3e.mockapi.io/Comments";

class CommentsApi {
    get = async () => {
        try{
            const resp = await fetch (COMMENTS_ENDPOINT);
            const data = await resp.json();
            return data;
        }catch(e){
            console.log('Oops, looks like fetchComments had an issue', e);
        }
    }

    put = async(comments,id) => {
        try{
            const resp = await fetch(`${COMMENTS_ENDPOINT}/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comments)
            });
            return await resp.json();
        }catch(e){
            console.log('Oops, looks like there was an issue with updating Comment,', e);
        }      
    }

    post = async(comment) => {
        try{
            const resp = await fetch(`${COMMENTS_ENDPOINT}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(comment),
            });
            const data = await resp.json();
            return data;
        }catch(e){
            console.log('oops! post did not work!', e);
        }
    }

    delete = async(id) => {
        try{
            const resp = await fetch(`${COMMENTS_ENDPOINT}/${id}` , {
                method: "DELETE"
            });
            return await resp.json

        }catch(e){
            console.log('oops error', e);
        }
    }
    
}

export const commentsApi = new CommentsApi();