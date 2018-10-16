export const addCheckList = () => {
    return {
        type: 'ADD_CHECKLIST'
    }
}

export const registerCompany = company => {
    return {
        type: 'REGISTER_COMPANY',
        payload:company
    }
}

export const insertCheckList = checklist => {
    return {
        type: 'INSERT_CHECKLIST',
        payload:checklist
    }
}

export const insertRating = rating => {
    return {
        type: 'INSERT_RATING',
        payload:rating
    }
}

export const insertRemarks = remarks => {
    return {
        type: 'INSERT_REMARKS',
        payload:remarks
    }
}

export const deleteData = id => {
    return {
        type: 'INSERT_REMARKS',
        payload:id
    }
}