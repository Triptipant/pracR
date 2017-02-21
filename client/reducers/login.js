function addUser(state = [], action) {
    switch(action.type) {
     
        case 'ADD_USER':
            return [
                ...state,{
                    email:action.email,
                    password:action.password
                  
                   
                }
              
            ]  
        case 'ADD_NEW_USER':
        return [
          ...state,{
                    name:action.name,
                    email:action.email,
                    password:action.password,
                    address:action.address
                  
                   
                }
        ]
              
    }
    return state;   
}

export default addUser;