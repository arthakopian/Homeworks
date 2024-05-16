// 1. Create an Author class and a Book class.
class Author {
    constructor({name, email, gender}) {
        this.name = name
        this._email = email
        this.gender = gender
    }
    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }
    toString(){
        return `Тhe author of this work is ${this.name}. For contact write to this email: ${this.email}`
    }
}

class Book {
    constructor({title, author, price, quantity}) {
        if (!(author instanceof Author)) {
            throw new Error('author must be instance of Author')
        }
        this.author = author
        this.title = title
        this._price = price
        this._quantity = quantity
    }
    get price(){
        return this._price
    }
    set price(value){
        this._price = value
    }
    get quantity(){
        return this._quantity
    }
    set quantity(value){
        this._quantity = value
    }
    getProfit(){
        let profit = this.price * this.quantity
        return profit
    }
    toString(){
        return `The ${this.author.name}'s profit from the book "${this.title}" is ${this.getProfit()}USD`
    }
}

// 2. Create an Account class. Account should have: id, name, balance.

class Account {
    constructor(name, balance) {
        this._name = name
        this._balance = balance
        this._id = Math.trunc(Math.random() * 1e8)
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
    get balance(){
        return this._balance
    }
    set balance(value){
        this._balance = value
    }
    get id(){
        return this._id
    }
    set id(value){
        throw new Error('You can not change your account ID')
    }
    credit(amount){
        return this._balance += amount
    }
    debit(amount){
        if (amount > this._balance) {
            throw new Error('Amount exceeded balance.')
        }
        return this._balance -= amount
    }
    transferTo(anotherAccount, amount){
        if (anotherAccount instanceof Account) {
           if (amount > this._balance) {
               throw new Error('Amount exceeded balance.')
           } else {
               this._balance -= amount
               anotherAccount.credit(amount)
               return this._balance
           }
        } else {
            throw new Error('anotherAccount must be instance of Account')
        }
    }
    static identifyAccounts(accountFirst, accountSecond){
        if (accountFirst instanceof Account && accountSecond instanceof Account) {
            if (accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance &&
            accountFirst.id === accountSecond.id
            ) {
                return true
            }
        } else {
            return false
        }       
    }
    toString(){
        return `Hello ${this.name}, your balance is ${this.balance} USD`
    }
}

// 3. Write classes: Person, Student, Staff.

class Person {
    constructor({firstName, lastName, gender, age}) {
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
    }
    get firstName(){
        return this._firstName
    }
    set firstName(value){
        return this._firstName = value
    }
    get lastName(){
        return this._lastName
    }
    set lastName(value){
        return this._lastName = value
    }
    get gender(){
        return this._gender
    }
    set gender(value){
        return this._gender = value
    }
    get age(){
        return this._age
    }
    set age(value){
        return this._age = value
    }
    toString(){
        return `Person: ${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}`
    }
}

class Student extends Person {
    constructor({person, program, year = 0, fee}) {
        super(person)
        this._program = program
        this._year = year
        this._fee = fee
    }
    get program(){
        return this._program
    }
    set program(value){
        return this._program = value
    }
    get year(){
        return this._year
    }
    set year(value){
        return this._year = value
    }
    get fee(){
        return this._fee
    }
    set fee(value){
        return this._fee = value
    }
    passExam(program, grade){
        if (grade >= 50 && this._program.include(program)) {
            let index = this._program.indexOf(program)
            this._program.splice(index, 1)
            if (this._program.length) {
                return `You still have ${this._program.length} exams.`
            } else {
                this.year++
                return `Congratulations! You've advanced to year ${this.year}.`
            }
        } else {
            return `You need a higher grade to pass the ${program} exam.` 
        }
    }
    toString(){
        return `Student: ${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}, Program: ${this.program}, Year: ${this.year}, Fee: ${this.fee}`
    }
}

class Teacher extends Person {
    constructor({person, program, pay}) {
        super(person)
        this.program = program
        this._pay = pay
    }
    get pay(){
        return this._pay
    }
    set pay(value){
        return this._pay = value
    }
    toString(){
        return  `Teacher: ${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}, Program: ${this.program}, Pay: ${this.pay}`
    }
}

