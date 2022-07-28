export class BankDetail {
    _id: string;
    bank: string;
    branch: string;
    accountNumber: number;
    accountType: string;
    status: string;
    studentID: string;

    constructor(_id?: string, bank?: string, branch?: string, accountNumber?: number, accountType?: string, status?: string,studentID?: string){
        this._id = _id!;
        this.bank = bank!;
        this.branch = branch!;
        this.accountNumber = accountNumber!;
        this.accountType = accountType!;
        this.status = status!;
        this.studentID = studentID!;
    }
}