 const person = {
        name: "Laura",
        last_name: "Jenkins",
        date_of_birth: 1992, 
        bank_accounts: [
        {
            bank: {
            name: "Revolut",
            country: "Spain",
            number_of_clients: 2000
            },
            balance: 100
        },
        {
            bank: {
            name: "Wise",
            country: "UK",
            number_of_clients: 5000
            },
            balance: 1000
        }
        ],
        deposit: function(bankName, value) {
        for (let i = 0; i < this.bank_accounts.length; i++) {
        if (this.bank_accounts[i].bank.name === bankName) {
        this.bank_accounts[i].balance += value;
        break;
        }
        }
        },
        withdraw: function(bankName, value) {
        for (let i = 0; i < this.bank_accounts.length; i++) {
        if (this.bank_accounts[i].bank.name === bankName) {
        this.bank_accounts[i].balance -= value;
        break;
        }
        }
        }
        };
        
