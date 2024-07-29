

function SelectedCase(selectedOption) {
    switch (license) {
        case 'ViewAllDepts':
            console.log('ViewAllDepts selected');
            break;
        case 'ViewAllRoles': 
            console.log('ViewAllRoles selected');
            break;
        case 'ViewAllEmployees':
            console.log('ViewAllEmployees selected');
            break;
        case 'AddDept': 
            console.log('AddDept selected');
            break;
        case 'AddEmployee':
            console.log('AddEmployee selected');
            break;
        case 'UpdateEmpRole': 
            console.log('UpdateEmployee selected');
            break;
    }
}