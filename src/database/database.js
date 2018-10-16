import Realm from "realm";
export const COMPANY_SCHEMA = 'Company'
export const CHECKLIST_SCHEMA = 'Checklist'
export const REMARKS_SCHEMA = 'Remarks'

export const companySchema = {
    name:COMPANY_SCHEMA,
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

export const insertNewCompany = newCompany => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(COMPANY_SCHEMA,newCompany)
            resolve(newCompany)
        })
    }).catch((error) => reject(error))
})

export const updateCompany = company => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let updatedCompany = realm.objectForPrimaryKey(COMPANY_SCHEMA, company.id)
            updatedCompany.companyName = company.companyName
            updateCompany.companyOwner = company.companyOwner
            updateCompany.companyAddress = company.companyAddress
            updateCompany.ownerContactNumber = company.ownerContactNumber
            updateCompany.ownerSanitaryPermitNo = company.ownerSanitaryPermitNo
            updateCompany.dateIssued = company.dateIssued
            updateCompany.numberOfPersonnel = company.numberOfPersonnel
            updateCompany.numberWithHealthCertificate = company.numberWithHealthCertificate

            resolve()
        })
    }).catch((error) => reject(error))
})

export const deleteCompany = company => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deletedCompany = realm.objectForPrimaryKey(COMPANY_SCHEMA, company.id)
            realm.delete(deletedCompany)

            resolve()
        })
    }).catch((error) => reject(error))
})

export const selectAllCompany = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allCompany = realm.objects(COMPANY_SCHEMA)

            resolve(allCompany)
        })
    }).catch((error) => reject(error))
})

export default new Realm(databaseOptions)

