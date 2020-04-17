import Router from 'next/router';
import axios from 'axios';
const baseURL = 'https://dev-zonebackend.herokuapp.com'
export const loginUser = (email,password,noRedirect) => dispatch => {
    axios
    .post(`${baseURL}/api/authenticate`,{email,password})
    .then(res => {
        if (res.status === 200) {
            console.log(res)
            alert("Logged in successfully")
            dispatch({
                type:'authenticated',
                payload:{email:email,name:res.data.name}
            });
            if(!noRedirect)
                Router.push('/')
        } 
        else {
            const error = new Error(res.error);
            throw error;
        }
    })
    .catch(err => {
    console.error(err);
    alert('Error logging in please try again/register');
    });
        
}
export const registerUser = (name,email,password,password2,noRedirect) => dispatch => {
    if(password!==password2){
        alert("Your passwords do not match, please make sure both passwords match.")
        return   
   }
   axios
   .post(`${baseURL}/api/register`,{name,email,password})
    .then(res => {
        if (res.status === 200) {
            alert("Registered Successfully! Welcome to Dev Zone")
            dispatch({
                type:'authenticated',
                payload:{email:email,name:name}
            });
            if(!noRedirect)
                Router.push('/')
            
        } else {
        const error = new Error(res.error);
        throw error;
        }
    })
    .catch(err => {
        console.error(err);
        alert('Error logging in please try again with another email-id');
    });
}
        

export const getItems = () => dispatch => {
    dispatch(itemsLoading());
    axios
        .get(`${baseURL}/api`)
        .then(res=>{
            dispatch({
                type:'get-items',
                payload:res.data
            });
        })

};

export const addItem = (item) =>dispatch=> {
    console.log('adding item')
    axios
        .post(`${baseURL}/api`,item)
        .then(res=>{
            if (res.status === 200) {
                alert(`Hi, ${item.name} your post has been published`)
                dispatch({
                    type:'add-item',
                    payload:res.data
                });
            }
            else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error publishing post, please try again');
        });
    
};
export const editItem = (id,item) => dispatch => {
    axios.put(`${baseURL}/api/${id}`,item)
    .then(res =>{
      dispatch({
        type: 'edit-item',
        payload: id
      })
    });
  };


export const itemsLoading = (item) => {
    return{
        type:'items-loading'
    };
};