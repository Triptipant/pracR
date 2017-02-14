const cart = (state =[], payload) => {
    switch (payload.type) {
        case 'add': {
            return [...state, payload.item];
    }
    case 'addtext': {
        console.log('ball');
            return [...state, payload.text];  
            console.log('basdfasdfasdfall'); 
    } 
    default:
            return state;

};

}
export default cart


