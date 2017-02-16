function addUser(state = [], action) {
    switch(action.type) {
     
        case 'ADD_USER':
            return [
                ...state,{
                    email:action.email,
                    password:action.password
                  
                   
                }
              
            ]  
              
    }
    return state;   
}

export default addUser;