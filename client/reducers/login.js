function addUser(state = [], action) {
    switch(action.type) {
        case 'ADD_USER':
            return [
                ...state,{
                    email:action.email,
                    text:action.password,
                    id:action.id
                   
                }
            ]
          default:
             return state;

    }
    return state;   
}

export default addUser;