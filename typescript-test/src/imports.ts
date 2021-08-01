//Imports 1

// export class Person {
//     firstName: string;
//     middleName: string;
//     lastName: string;
    
//     constructor(data?: any) {
//         this.firstName = data.firstName || 'Dylan';
//         this.lastName = data.lastName || 'Israel';
//         this.middleName = data.middleName;    
//     }
// }

//

//import 2

export class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName || 'Dylan';
        this.lastName = data.lastName || 'Israel';
        this.middleName = data.middleName;    
    }
}