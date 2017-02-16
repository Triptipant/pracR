const cart = (state =[], action) => {
    switch (action.type) {
        case 'add': {
            return [...state, action.item];
    }
    case 'addtext': {
       
            return [...state, action.text];  
          
    } 
    
    case 'DELETE_LISTCART' : 
         console.log("delete2");
                return [
                    ...state.slice(0,action.idx),
                    ...state.slice(action.idx+1),
                  
                ]
          default:
             return state;


};

}
export default cart


