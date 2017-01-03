angular.module("chequingTable",[])

.controller("mainController", function($scope) {
  $scope.banks = [
      //TD
      { imgsrc: "assets/images/TD.png", name: "TD Everyday Chequing Account", requirement: "12+",
          bankTrans: "25 free", nonBankFees: "$2.00/",
          nonBankTrans: "transaction", numATMS: 73,
          link: "http://www.tdcanadatrust.com/products-services/banking/accounts/chequing-accounts/everyday.jsp"},
      //RBC
      { imgsrc: "assets/images/RBC.png", name: "RBC Student Banking", requirement: "13+",
          bankTrans: "25 free", nonBankFees: "$1.50/",
          nonBankTrans: "transaction", numATMS: 49,
          link: "http://www.rbcroyalbank.com/products/deposits/student-banking.html"},
      //CIBC
      { imgsrc: "assets/images/CIBC.png", name: "CIBC Advantage Debit Card", requirement: "18+",
          bankTrans: "None", nonBankFees: "$1.50/",
          nonBankTrans: "transaction", numATMS: "61 + PC Financial ATMs",
          link: "https://www.cibc.com/en/personal-banking/ways-to-bank/ways-to-pay/advantage-debit-card.html"},
      //Scotiabank
      { imgsrc: "assets/images/Scotiabank.png", name: "Scotiabank Student Banking Advantage Plan", requirement: "18+",
          bankTrans: "None", nonBankFees: "$1.50/",
          nonBankTrans: "transaction", numATMS: "37",
          link: "http://www.scotiabank.com/ca/en/0,,60,00.html"},
      //ATB
      { imgsrc: "assets/images/ATB.png", name: "ATB Students First Account", requirement: "University Students",
          bankTrans: "Unlimited", nonBankFees: "$1.50/",
          nonBankTrans: "transaction", numATMS: 0,
          link: "https://get.atb.com/Personal/Bank/Student-Accounts/Students-First-Account/p/2307"},
      //National Bank
      { imgsrc: "assets/images/NationalBank.png", name: "National Bank CoolCash", requirement: "7-12",
          bankTrans: "Unlimited", nonBankFees: "N/A",
          nonBankTrans: "", numATMS: 15,
          link: "https://www.nbc.ca/en/personal/banking/accounts-and-packages/youth-chequing-account/coolcash.html"},
      //PC Financial
      { imgsrc: "assets/images/PCFinancial.png", name: "PC Financial No Fee Bank Account", requirement: "18+",
          bankTrans: "Unlimited", nonBankFees: "$1.50/",
          nonBankTrans: "transaction", numATMS: "14 + CIBC ATMs",
          link: "http://www.banking.pcfinancial.ca/mkt/bankaccounts/nofeebankaccount-en.html"},
      //Tangerine
      { imgsrc: "assets/images/Tangerine.png", name: "Tangerine Daily Chequing", requirement: "16+",
          bankTrans: "Unlimited", nonBankFees: "$1.00/",
          nonBankTrans: "transaction", numATMS: "Scotiabank ATMS",
          link: "https://www.tangerine.ca/en/spending/chequing-account/index.html"}
  ];
});
