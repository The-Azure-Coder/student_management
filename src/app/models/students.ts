export class Student {
    _id: string;
    name: string;
    email: string;
    cohort: string;
    phoneNumber: number;

    constructor(_id?: string, name?: string, email?: string, cohort?: string, phoneNumber?: number){
        this._id = _id!;
        this.name = name!;
        this.email = email!;
        this.cohort = cohort!;
        this.phoneNumber = phoneNumber!;
    }
}