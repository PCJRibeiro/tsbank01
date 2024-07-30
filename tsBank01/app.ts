import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
peopleAccount.getBalance()
peopleAccount.setName('Paulo Ribeiro')
console.log(peopleAccount.getName())
peopleAccount.withdraw(10)
peopleAccount.getBalance()



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(20)
companyAccount.getBalance()
companyAccount.getLoan(30)
companyAccount.getBalance()
companyAccount.withdraw(10)
companyAccount.getBalance()


const plusAccount: PlusAccount = new PlusAccount('maicon', 24)
console.log(plusAccount)
plusAccount.deposit(100)
plusAccount.getBalance()