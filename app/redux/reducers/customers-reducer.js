//  Actions:

const CREATE_CUSTOMER = 'CREATE_CUSTOMER'

//  Action-creators:

export const create = customer => ({type: CREATE_CUSTOMER, customer});

// Reducer:

export default function reducer (customers = [], action) {
  switch (action.type){

    case CREATE_CUSTOMER:
      return action.customers

    default:
      return customers;
  }

}