// increment
export function login(email,password) {
  
  return {
    type: 'ADD_USER',
    email,
    password
    
    
    
  }
}

// add comment
export function addComment(email,password,id) {
   const i =0;
  return {
    type: 'ADD_COMMENT',
    email,
    password,
    id: i+1
  
  }
}

export function deletelistcart(idx) {
  return {
    type: 'DELETE_LISTCART',
    idx
  }
}



// remove comment



export const addToCart = (item) => {
  
  return {
      type: 'add',
      item
  };
}

export const  addfromtext = (text) => {
  
        return {
            type: 'addtext',
            text
        }

}
