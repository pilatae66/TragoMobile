import { selectAllCompany, insertNewCompany } from "../database/database";
import Realm from "realm";
import { ToastAndroid } from "react-native";

export const companySchema = {
    name:'Company',
    primaryKey:'id',
    properties: {
        id:'int',
        companyName: 'string',
        companyOwner: 'string',
        ownerContactNumber: 'string',
        companyAddress: 'string',
        ownerSanitaryPermitNo:'string',
        dateIssued:'date',
        numberOfPersonnel:'int',
        numberWithHealthCertificate:'int',
        q1:'bool',
        q2:'bool',
        q3:'bool',
        q4:'bool',
        q5:'bool',
        q6:'bool',
        q7:'bool',
        q8:'bool',
        q9:'bool',
        q10:'bool',
        q11:'bool',
        q12:'bool',
        q13:'bool',
        q14:'bool',
        q15:'bool',
        q16:'bool',
        q17:'bool',
        q18:'bool',
        q19:'bool',
        q20:'bool',
        remarks:'string',
        rating:'int'
    }
}

const databaseOptions = {
    path:'SanitaryChecklist.realm',
    schema: [companySchema],
    schemaVersion: 0
}

const nextID = 0;

Realm.open(databaseOptions).then(realm => {
    nextID = parseInt(realm.objects('Company').max('id'))
    if (nextID == null) {
        nextID = 0
    }
    else{
        nextID += 1
    }
    console.log(nextID)
})

const initialState = {
    checklist: [],
    show:[],
    data:{
        id:0,
        companyName:'',
        companyAddress:'',
        companyOwner:'',
        ownerContactNumber:'',
        ownerSanitaryPermitNo:'',
        dateIssued:'',
        numberOfPersonnel:0,
        numberWithHealthCertificate:0,
        q1:false,
        q2:false,
        q3:false,
        q4:false,
        q5:false,
        q6:false,
        q7:false,
        q8:false,
        q9:false,
        q10:false,
        q11:false,
        q12:false,
        q13:false,
        q14:false,
        q15:false,
        q16:false,
        q17:false,
        q18:false,
        q19:false,
        q20:false,
        remarks:'',
        rating:0
    }
}


selectAllCompany().then((allCompany) => {
    console.log('success!') 
    initialState.checklist = allCompany
    }).catch((error) => {
    console.log('error')
})


export default (state = initialState, action) => {
    
    console.log(state.data)
    switch (action.type) {
        case 'ADD_CHECKLIST': 
            insertNewCompany(state.data).then(() => {
                ToastAndroid.show('Checklist Submitted!', ToastAndroid.SHORT)
            })
            .catch((error) => console.log(error))
            return state;

        case 'REGISTER_COMPANY': 
        return {
            ...state, data: {...state.data,
                id: nextID,
                companyName: action.payload.companyName,
                companyAddress: action.payload.companyAddress,
                companyOwner: action.payload.companyOwner,
                ownerContactNumber: action.payload.ownerContactNumber,
                ownerSanitaryPermitNo: action.payload.ownerSanitaryPermitNo,
                dateIssued: action.payload.dateIssued,
                numberOfPersonnel: action.payload.numberOfPersonnel,
                numberWithHealthCertificate: action.payload.numberWithHealthCertificate
            }
        }

        case 'INSERT_CHECKLIST': 
        return {
            ...state, data: {...state.data,
                q1:action.payload.q1,
                q2:action.payload.q2,
                q3:action.payload.q3,
                q4:action.payload.q4,
                q5:action.payload.q5,
                q6:action.payload.q6,
                q7:action.payload.q7,
                q8:action.payload.q8,
                q9:action.payload.q9,
                q10:action.payload.q10,
                q11:action.payload.q11,
                q12:action.payload.q12,
                q13:action.payload.q13,
                q14:action.payload.q14,
                q15:action.payload.q15,
                q16:action.payload.q16,
                q17:action.payload.q17,
                q18:action.payload.q18,
                q19:action.payload.q19,
                q20:action.payload.q20
            }
        }

        case 'INSERT_RATING': 
        return {
            ...state, data: {...state.data,
                rating:action.payload
            }
        }

        case 'INSERT_REMARKS': 
        return {
            ...state, data: {...state.data,
                remarks:action.payload
            }
        }

        default:
            return state;
    }
};