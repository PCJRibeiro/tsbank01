export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.balance += deposit
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus() && this.balance >= withdraw){
      this.balance -= withdraw
    }
    else{
    throw Error('Conta invalida ou saldo insuficiente')
    }
  }

  getBalance = (): void => {
    console.log('O seu saldo é:'+this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
