import Router from 'next/router';
import axios from 'axios';

export const loginUser = (email,password,noRedirect) => dispatch => {
    axios
    .post(`https://blogplanet.herokuapp.com/api/authenticate`,{email,password})
    .then(res => {
        if (res.status === 200) {
            alert("Logged in successfully")
            dispatch({
                type:'authenticated',
                payload:{email:email,name:"dev"}
            });
            if(!noRedirect)
                Router.push('/home')
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
   .post(`https://blogplanet.herokuapp.com/api/register`,{email,password})
    .then(res => {
        if (res.status === 200) {
            alert("Registered Successfully! Welcome to Dev Zone")
            dispatch({
                type:'authenticated',
                payload:{email:email,name:name}
            });
            if(!noRedirect)
                Router.push('/home')
            
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
        .get('http://localhost:5000/api')
        .then(res=>{
            dispatch({
                type:'get-items',
                payload:res.data
            });
        })

};

export const deleteItem = id => dispatch => {
    axios.delete(`http://localhost:5000/api/${id}`).then(res =>
      dispatch({
        type: 'delete-item',
        payload: id
      })
    );
  };



export const addItem = (item) =>dispatch=> {
    axios
        .post('http://localhost:5000/api',item)
        .then(res=>{
            dispatch({
                type:'add-item',
                payload:res.data
            });
        })
    
};

export const itemsLoading = (item) => {
    return{
        type:'items-loading'
    };
};