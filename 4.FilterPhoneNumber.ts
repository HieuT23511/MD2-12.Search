function filterPhoneNumber(listPhoneNumber: string[]):string {
    const headViettelPhoneNumber: string[] = ['098', '097', '096', '088', '086', '032', '033', '034', '035', '036', '037', '038', '039'];
    const headMobiPhoneNumber: string[] = ['070', '079', '077', '076', '078', '089', '090', '093'];
    const headVinaPhoneNumber: string[] = ['091', '094', '088', '083', '084', '085', '081', '082'];
    let ViettelPhoneNumber: string[] = [];
    let MobiPhoneNumber: string[] = [];
    let VinaPhoneNumber: string[] = [];
    listPhoneNumber.forEach(elements  => {
        let headNumber :string = elements.substring(0, 3);
        if (headViettelPhoneNumber.includes(headNumber)) {
            ViettelPhoneNumber.push(elements);
        }else if (headMobiPhoneNumber.includes(headNumber)) {
            MobiPhoneNumber.push(elements);
        }else if (headVinaPhoneNumber.includes(headNumber))
        {
            VinaPhoneNumber.push(elements);
        }
    })
    return `List Viettel Phone number: [${ViettelPhoneNumber}]\nList Viettel Phone number: [${MobiPhoneNumber}]\nList Vina Phone number: [${VinaPhoneNumber}]`
}

let listPhoneNumber = ['0988281135', '0915054252', '089998899']
console.log(filterPhoneNumber(listPhoneNumber));