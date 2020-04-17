const initialState={
    isAuthenticated:false,
    items:[],
    name:'',
    email:'',
    loading:false
}

export default function(state=initialState,action){
    console.log(action)
    switch(action.type){
        case 'authenticated':
            return {
                ...state,
                isAuthenticated:true,
                name:action.payload.name,
                email:action.payload.email,
                loading:false
            }
        case 'get-items':
            return{
                ...state,
                items:action.payload,
                loading:false
            }
        case 'delete-item':
            return{
                ...state,
                items:state.items.filter((item)=>item._id!==action.payload)
            }  
        case 'add-item':
            return{
                ...state,
                items:[action.payload,...state.items]
            }     
        case 'items-loading':
            return{
                ...state,
                loading:true
            }    
        default:
            return state;    
    }
}