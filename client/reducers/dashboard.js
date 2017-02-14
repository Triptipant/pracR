function addComments(state = [], action) {
    console.log("s");
    console.log(state);
    switch(action.type){
        case 'ADD_COMMENT':
            return [
                ...state,{
                    email:action.email,
                    password:action.password,
                    id:action.id
                }

            ];
      
           
        default:
            return state;
    }
    return state;
}

export default addComments;