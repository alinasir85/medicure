export const REGISTER_INIT = 'REGISTER_INIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REMOVE_INIT = 'REGISTER_INIT';
export const REMOVE_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_INIT = 'LOGIN_INIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ADMIN_INIT = 'ADMIN_INIT';
export const ADMIN_SUCCESS = 'ADMIN_SUCCESS';
export const LOGOUT_INIT = 'LOGOUT_INIT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CLEAR_REGISTERED_STATUS = 'CLEAR_REGISTERED_STATUS';

export const registerInit = (user) => {
    return {
        type:REGISTER_INIT,
        user: user
    }
}

export const registerSuccess = () => {
    return {
        type:REGISTER_SUCCESS
    }
}

export const removeInit = (user) => {
    return {
        type:REMOVE_INIT,
        user: user
    }
}

export const removeSuccess = () => {
    return {
        type:REMOVE_SUCCESS
    }
}


export const loginInit = (user) => {
    return {
        type:LOGIN_INIT,
        user: user
    }
}

export const loginSuccess = (user) => {
    return {
        type:LOGIN_SUCCESS,
        user: user
    }
}

export const adminInit = (user) => {
    return {
        type:ADMIN_INIT,
        user: user
    }
}
export const adminSuccess = (user) => {
    return {
        type:ADMIN_SUCCESS,
        user: user
    }
}

export const logoutInit = () => {
    return {
        type:LOGOUT_INIT
    }
}

export const logoutSuccess = () => {
    return {
        type:LOGOUT_SUCCESS
    }
}

export const clearRegisteredStatus = () => {
    return {
        type:CLEAR_REGISTERED_STATUS
    }
}