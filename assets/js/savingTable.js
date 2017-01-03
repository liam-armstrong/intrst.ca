angular.module("rankingTable", [])

.controller("mainController", function($scope) {
    //list of banks
    $scope.banks = [
        //TD
        { imgsrc: "assets/images/TD.png", name: "TD Youth Savings Account", rate: "0.05%", requirement: "Under 19",
            eTransfer: "$1.50/", eTrans: "transaction", nonBankFees: "$2.00/",
            nonBankTrans: "transaction", return1000: "",
            link: "https://www.tdcanadatrust.com/products-services/banking/accounts/savings-accounts/youth.jsp"},
        //RBC
        { imgsrc: "assets/images/RBC.png", name: "RBC Leo's Young Savings Account", rate: "0.01%", requirement: "Under 19",
            eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50/",
            nonBankTrans: "transaction", return1000: "",
            link: "http://www.rbcroyalbank.com/products/deposits/leo-young-savers-account.html"},
        //CIBC
        { imgsrc: "assets/images/CIBC.png", name: "CIBC Advantage for Youth", rate: "0.15%", requirement: "Under 19",
            eTransfer: "$1.50/", eTrans: "transaction", nonBankFees: "$1.50/",
            nonBankTrans: "transaction", return1000: "",
            link: "https://www.cibc.com/en/personal-banking/bank-accounts/youth-banking-offers.html"},
        //BMO
        { imgsrc: "assets/images/BMO.png", name: "BMO Smart Saver", rate: "0.40%", requirement: "Under 19",
            eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50/",
            nonBankTrans: "transaction", return1000: "",
            link: "https://www.bmo.com/main/personal/bank-accounts/smart-saver/"},
        //Scotiabank
        { imgsrc: "assets/images/Scotiabank.png", name: "Scotiabank Getting There", rate: "0.10%", requirement: "Under 19",
            eTransfer: "$1.00/", eTrans: "transaction", nonBankFees: "$1.50/",
            nonBankTrans: "transaction", return1000: "",
            link: "http://www.scotiabank.com/ca/en/0,,61,00.html"},
        //National Bank
        { imgsrc: "assets/images/NationalBank.png", name: "National Bank Strategist Account", rate: "0.02%", requirement: "18 years old",
            eTransfer: "$1.25/", eTrans: "transaction", nonBankFees: "$0.75/",
            nonBankTrans: "transaction", return1000: "",
            link: "https://www.nbc.ca/en/personal/banking/saving-accounts/strategist-account.html"},
        //PC Financial
        { imgsrc: "assets/images/PCFinancial.png", name: "PC Financial Interest Plus Savings Account", rate: "0.85%", requirement: "18 years old",
            eTransfer: "$1.50/", eTrans: "transaction", nonBankFees: "$1.50/",
            nonBankTrans: "transaction", return1000: "",
            link: "http://www.banking.pcfinancial.ca/mkt/bankaccounts/interestplussavingsaccount-en.html"},
        //Tangerine
        { imgsrc: "assets/images/Tangerine.png", name: "Tangerine Children's Savings Account", rate: "0.90%", requirement: "Under 19",
            eTransfer: "N/A", eTrans: "", nonBankFees: "N/A",
            nonBankTrans: "", return1000: "",
            link: "https://www.tangerine.ca/en/saving/savings-accounts/childrens-savings-account/index.html"},
        //ATB
        { imgsrc: "assets/images/ATB.png", name: "ATB Financial Generation Account", rate: "0.10%", requirement: "Under 19",
            eTransfer: "$1.50/", eTrans: "transaction", nonBankFees: "$1.50/",
            nonBankTrans: "transaction", return1000: "",
            link: "https://get.atb.com/Personal/Bank/Youth-Accounts/Generation-Account/p/2315"},
        //CWB
        { imgsrc: "assets/images/CWB.png", name: "Canadian Western Bank Youth Account", rate: "0.05%", requirement: "Under 19",
            eTransfer: "$1.50/", eTrans: "transaction", nonBankFees: "$1.50/",
            nonBankTrans: "transaction", return1000: "",
            link: "http://www.cwbank.com/personal-banking/bank-accounts/youth-account"}
    ];
});
