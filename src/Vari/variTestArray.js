const updatableFielsMapping = 'recordHeaderData.recordType,recordHeaderData.name,addressData.address,addressData.city,addressData.province,addressData.country,' +
  'taxData.vatNumber,taxData.taxCode,taxPreferencesData.splitPayment,taxPreferencesData.iban,contactsData,referents'

const obj = {
  taxData: {
    taxCode: '1',
    splitPayment: 'o',
  },
  recordHeaderData: {
    name: 'pippo'
  }
}

function arrayFlatOfFields(obj){
  return arrayOfFields(obj,'').flat(10)
}
function arrayOfFields(testObj, pre) {
  return Object.keys(testObj).map((k) => {
    if(isObject(testObj[k])){
      return arrayOfFields(testObj[k],k+'.')
    }else{
      return (pre+k)
    }
  })
}

function isObject(a) {
  return (typeof (a) === 'object')
};

console.log(arrayFlatOfFields(obj))
