import { DioAccount } from "./DioAccount"

export class PlusAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }

      deposit = (deposit: number): void => {
          deposit += 10
          this.balance += deposit
      }
}