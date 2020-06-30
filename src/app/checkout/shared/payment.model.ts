export interface Payment {
    cardNum: number;
    name: string;
    email: string;
    phoneNumber: number;
    expireDate: Date;
    cvsCode: number;
}