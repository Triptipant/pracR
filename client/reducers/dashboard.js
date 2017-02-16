function addComments(state = [], action) {
 let newitem
    switch(action.type){
        case 'ADD_COMMENT': 
              return [
                ...state,{
                    email:action.email,
                    password:action.password,
                    id:action.id
                }
               ];
     
         case 'DELETE_LIST' : 
         console.log("delete");
                return [
                    ...state.slice(0,action.idx),
                    ...state.slice(action.idx+1)
                ]
                
                    
            
          
      default:
            return state;
    }
    return state;
}

export default addComments;