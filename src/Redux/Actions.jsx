import axios from "axios";
export const LOADING = "LOADING";
export const TODOS = "TODOS";
export const ADD_MENU = "ADD_MENU";
export const LOGIN = "LOGIN";
export const MODAL = "MODAL";
export const QUITA_MENU = "QUITA_MENU";
export const NEW = "NEW";
export const ONE = "ONE";
const users = "https://03c403f0-9b62-479d-9a8f-244e1e52e796.mock.pstmn.io/";


export function ActionTodosMenu() {
    return async function (dispatch) {
        try {
            let response = await axios({
                url: users + "test_users_list?page=2&",
                method: "get"
            });

            let datas = JSON.parse(JSON.stringify(response));
            datas = datas.data.map((arr) => {
                return {
                    first_name: arr.first_name,
                    last_name: arr.last_name,
                    email: arr.email,
                    img: arr.img,
                    company: arr.company,
                    id: arr.id
                };
            });
            localStorage.setItem("Users", JSON.stringify(datas));
            console.log(datas, "data");
            dispatch({type: "TODOS", payload: datas});
            dispatch({type: "LOADING", payload: false});
        } catch (error) {
            console.log("ERROR API", error);
        }
    };
}

export const ActionQuitar = (id) => {
    let local;
    const items = JSON.parse(localStorage.getItem("Users"));
    const filtered = items.filter((item) => item.id !== id);
    localStorage.setItem("Users", JSON.stringify(filtered));
    local = JSON.parse(localStorage.getItem("Users"));
    console.log(local, "LOCAL STORAGE USERS");
    return {type: QUITA_MENU, payload: local};
};

export const ActionNewUser = ( name, lastname, company, email) => {
    let local;
    let dataa;
    return async function (dispatch) {
        try {
            let response = await axios({
                url: users + "test_users_new?name=" + name + "&lastname=" + lastname + "&company=" + company + "&email" + email,
                method: "post"

            });

            console.log(response.data[0].guardado, "LOCAL");
            if (response.data[0].guardado == "ok") {
                dispatch({type: "NEW", payload: false});


                const items = JSON.parse(localStorage.getItem("Users"));
                let newuser = {
                    "id": Math.floor(Math.random()*90000) + 10000,
                    "first_name": name,
                    "last_name": lastname,
                    "email": email,
                    "company":  company,
                    "img": "https://cdn-icons-png.flaticon.com/512/219/219986.png"

                }
                let combine = items.concat(newuser);
                localStorage.setItem("Users", JSON.stringify(combine));
                dispatch(ActionTodosMenu());
                dispatch({type: "MODAL", payload: true, msg: "Guardado"});
            } else {
                dispatch({type: "LOGIN", payload: true});
                dispatch({type: "MODAL", payload: true, msg: "Ocurrio un error "});
            }
        } catch (error) {
            console.log("ERROR SERVER", error);
            dispatch({type: "LOGIN", payload: true});
            dispatch({type: "MODAL", payload: true, msg: "!Error! al acceder a server postman"});
        }
    }
};


export const ElLogin = (data) => {
    return {type: "LOGIN", payload: true};
};

export const ElAddMenu = (data) => {
    return {type: ADD_MENU, payload: data};
};

export const ElAddTodoEdit = (data) => {
    return {type: TODOS, payload: data};
};

export const ElActionSesionRemove = (data) => {
    return function (dispatch) {
        localStorage.removeItem("myData");
        dispatch({type: ONE});
        dispatch({type: LOGIN, payload: true});
    }
}


export const ElActionNew = (valor) => {
    return {type: NEW, payload: valor};
};

export const Modal = (modal, msg) => {
    return {type: MODAL, payload: modal, msg: msg, img: "https://freesvg.org/img/1538154274.png"};
};

export const ElAddToken = (username, pass) => {
    let dataa;
    return async function (dispatch) {
        try {
            let response = await axios({
                url: users + "test_users_login?username=" + username + "&password=" + pass,
                method: "post",
                // auth: {
                //     email: email,
                //     password: pass
                // }
            });

            console.log(response.data[0].acceso, "LOCAL");
            if (response.data[0].acceso == "ok") {
                dispatch({type: "LOGIN", payload: false});
                console.log(response, "LOGIN data true");
                localStorage.setItem("myData", response.data[0].acceso);
                console.log(localStorage.getItem("myData"), "LOCAL");
                dataa = localStorage.getItem("myData");
                dispatch(ActionTodosMenu());
                dispatch({type: "MODAL", payload: true, msg: "++++++++ Bienvenido ++++++++++"});
            } else {
                dispatch({type: "LOGIN", payload: true});
                dispatch({type: "MODAL", payload: true, msg: "Ocurrio un error de credenciales, favor inicie sesión"});
            }
        } catch (error) {
            console.log("ERROR TOKEN", error);
            dispatch({type: "LOGIN", payload: true});
            dispatch({type: "MODAL", payload: true, msg: "!Error! de credenciales, favor inicie sesión"});
        }
    };
};
