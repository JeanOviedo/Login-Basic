import {
    LOADING,
    TODOS,
    ADD_MENU,
    LOGIN,
    MODAL,
    QUITA_MENU,
    NEW,
    ONE,

} from "./Actions";
const initialState = {
    todos: [],
    one: [],
    new: false,
    loading: true,
    modal: {
        visible: false,
        msg: "",
        img: ""
    },
    mimenu: [],
    login: ""
};

export default function rooReducer(state = initialState, action) {
    switch (action.type) {


        case TODOS:
            return {
                ... state,
                todos: action.payload


            };

        case LOADING:
            return {
                ... state,
                loading: action.payload
            };

            case ONE:
            {
                state = initialState
            };
          

        case MODAL:
            return {
                ... state,
                modal: {
                    visible: action.payload,
                    msg: action.msg
                }
            };



            case QUITA_MENU:
                return {
                    ... state,
    
                    todos: action.payload
                }

        case LOGIN:
            return {
                ... state,
                login: action.payload
            };


            case NEW:
            return {
                ... state,
                new: action.payload
            };


        case ADD_MENU:

            return {
                ... state,

                mimenu: [
                    ... state.mimenu,
                    action.payload
                ],

                modal: {
                    visible: true,
                    msg: "Guardado"
                }

            }


        default:
            return state;
    }
}
