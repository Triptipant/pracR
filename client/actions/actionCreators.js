// increment
export function login(email,password,id) {
  
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

// remove comment



export const addToCart = (item) => {
  console.log('adding item:', item);
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
