import * as actionType from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD:
            const newPerson = {
                name: 'Max', 
                age: Math.floor( Math.random() * 40 ), 
                id: Math.random()
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionType.DELETE:
            const updatedArray = state.persons.filter(person => person.id !== action.personId)
            return {
                ...state,
                persons: updatedArray
            }
        default: 
            return state;
    }   
}

export default reducer;