var app = angular.module("comparison", [])


app.controller("savingController", ["$scope", function($scope) {
    $scope.calcInput = 1000;
    $scope.sortType = "";
    $scope.sortReverse = false;
    $scope.returnCompare = function(v1, v2) {
        if(v1.charAt(0) == "$" && v2.charAt(0) == "$") {
            var num1 = v1.substring(1, v1.length);
            var num2 = v2.substring(1, v2.length);
            return (num1 < num2) ? -1 : 1;
        }
        return v1.value.localeCompare(v2.value);
    };
    //list of banks
    $scope.banks = [
        //TD
        { imgsrc: "assets/images/TD.png", name1: "Youth Savings", name2: "Account", rate: 0.05, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$2.00 per",
            nonBankTrans: "transaction",
            link: "https://www.tdcanadatrust.com/products-services/banking/accounts/savings-accounts/youth.jsp"},
        //RBC
        { imgsrc: "assets/images/RBC.png", name1: "Leo's Young", name2: "Savers Account", rate: 0.01, requirement: "Under 19",
            eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "http://www.rbcroyalbank.com/products/deposits/leo-young-savers-account.html"},
        //CIBC
        { imgsrc: "assets/images/CIBC.png", name1: "Advantage", name2: "for Youth", rate: 0.15, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "https://www.cibc.com/en/personal-banking/bank-accounts/youth-banking-offers.html"},
        //BMO
        { imgsrc: "assets/images/BMO.png", name1: "Smart Saver", name2: "", rate: 0.40, requirement: "Under 19",
            eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "https://www.bmo.com/main/personal/bank-accounts/smart-saver/"},
        //Scotiabank
        { imgsrc: "assets/images/Scotiabank.png", name1: "Getting There", name2: "", rate: 0.10, requirement: "Under 19",
            eTransfer: "$1.00 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "http://www.scotiabank.com/ca/en/0,,61,00.html"},
        //National Bank
        { imgsrc: "assets/images/NationalBank.png", name1: "Strategist", name2: "Account", rate: 0.02, requirement: "18 years old",
            eTransfer: "$1.25 per", eTrans: "transaction", nonBankFees: "$0.75 per",
            nonBankTrans: "transaction",
            link: "https://www.nbc.ca/en/personal/banking/saving-accounts/strategist-account.html"},
        //PC Financial
        { imgsrc: "assets/images/PCFinancial.png", name1: "Interest Plus", name2: "Savings Account", rate: 0.85, requirement: "18 years old",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "http://www.banking.pcfinancial.ca/mkt/bankaccounts/interestplussavingsaccount-en.html"},
        //Tangerine
        { imgsrc: "assets/images/Tangerine.png", name1: "Children's", name2: "Savings Account", rate: 0.90, requirement: "Under 19",
            eTransfer: "N/A", eTrans: "", nonBankFees: "N/A",
            nonBankTrans: "",
            link: "https://www.tangerine.ca/en/saving/savings-accounts/childrens-savings-account/index.html"},
        //ATB
        { imgsrc: "assets/images/ATB.png", name1: "Generation", name2: "Account", rate: 0.10, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "https://get.atb.com/Personal/Bank/Youth-Accounts/Generation-Account/p/2315"},
        //CWB
        { imgsrc: "assets/images/CWB.png", name1: "Youth Account", name2: "", rate: 0.05, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "http://www.cwbank.com/personal-banking/bank-accounts/youth-account"}
    ];
}]);

app.controller("chequingController", ["$scope", function($scope) {
  $scope.banks = [
      //TD
      { imgsrc: "assets/images/TD.png", name1: "Youth Savings", name2: "Account", requirement: "12+",
          bankTrans: "25 free", nonBankFees: "$2.00 per",
          nonBankTrans: "transaction", numATMS: 73,
          link: "http://www.tdcanadatrust.com/products-services/banking/accounts/chequing-accounts/everyday.jsp"},
      //RBC
      { imgsrc: "assets/images/RBC.png", name1: "Leo's Young", name2: "Savers Account", requirement: "13+",
          bankTrans: "25 free", nonBankFees: "$1.50 per",
          nonBankTrans: "transaction", numATMS: 49,
          link: "http://www.rbcroyalbank.com/products/deposits/student-banking.html"},
      //CIBC
      { imgsrc: "assets/images/CIBC.png", name1: "Advantage", name2: "for Youth", requirement: "18+",
          bankTrans: "None", nonBankFees: "$1.50 per",
          nonBankTrans: "transaction", numATMS: "61 + PC Financial ATMs",
          link: "https://www.cibc.com/en/personal-banking/ways-to-bank/ways-to-pay/advantage-debit-card.html"},
      //Scotiabank
      { imgsrc: "assets/images/Scotiabank.png", name1: "Getting There", name2: "", requirement: "18+",
          bankTrans: "None", nonBankFees: "$1.50 per",
          nonBankTrans: "transaction", numATMS: "37",
          link: "http://www.scotiabank.com/ca/en/0,,60,00.html"},
      //National Bank
      { imgsrc: "assets/images/NationalBank.png", name1: "Strategist Account", name2: "", requirement: "7-12",
          bankTrans: "Unlimited", nonBankFees: "N/A",
          nonBankTrans: "", numATMS: 15,
          link: "https://www.nbc.ca/en/personal/banking/accounts-and-packages/youth-chequing-account/coolcash.html"},
      //PC Financial
      { imgsrc: "assets/images/PCFinancial.png", name1: "Interest Plus", name2: "Savings Account", requirement: "18+",
          bankTrans: "Unlimited", nonBankFees: "$1.50 per",
          nonBankTrans: "transaction", numATMS: "14 + CIBC ATMs",
          link: "http://www.banking.pcfinancial.ca/mkt/bankaccounts/nofeebankaccount-en.html"},
      //Tangerine
      { imgsrc: "assets/images/Tangerine.png", name1: "Children's", name2: "Savings Account", requirement: "16+",
          bankTrans: "Unlimited", nonBankFees: "$1.00 per",
          nonBankTrans: "transaction", numATMS: "Scotiabank ATMS",
          link: "https://www.tangerine.ca/en/spending/chequing-account/index.html"},
      //ATB
      { imgsrc: "assets/images/ATB.png", name1: "Generation Account", requirement: "University Students",
          bankTrans: "Unlimited", nonBankFees: "$1.50 per",
          nonBankTrans: "transaction", numATMS: 0,
          link: "https://get.atb.com/Personal/Bank/Student-Accounts/Students-First-Account/p/2307"}
  ];
}]);
