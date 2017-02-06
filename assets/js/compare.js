var app = angular.module("comparison", [])

app.controller("savingController", ["$scope", function($scope) {
    $scope.calcInput = 1000;
    $scope.sortType = "name";
    $scope.sortReverse = false;
    //list of banks
    $scope.banks = [
        //ATB
        { imgsrc: "assets/images/compare/ATB.png", name1: "Generation", name2: "Account", rate: 0.10, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "https://get.atb.com/Personal/Bank/Youth-Accounts/Generation-Account/p/2315"},
        //BMO
        { imgsrc: "assets/images/compare/BMO.png", name1: "Smart Saver", name2: "", rate: 0.40, requirement: "Under 19",
            eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "https://www.bmo.com/main/personal/bank-accounts/smart-saver/"},
        //CIBC
        { imgsrc: "assets/images/compare/CIBC.png", name1: "Advantage", name2: "for Youth", rate: 0.15, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "https://www.cibc.com/en/personal-banking/bank-accounts/youth-banking-offers.html"},
        //CWB
        { imgsrc: "assets/images/compare/CWB.png", name1: "Youth Account", name2: "", rate: 0.05, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "http://www.cwbank.com/personal-banking/bank-accounts/youth-account"},
        //National Bank
        { imgsrc: "assets/images/compare/NationalBank.png", name1: "Strategist", name2: "Account", rate: 0.02, requirement: "18 years old",
            eTransfer: "$1.25 per", eTrans: "transaction", nonBankFees: "$0.75 per",
            nonBankTrans: "transaction",
            link: "https://www.nbc.ca/en/personal/banking/saving-accounts/strategist-account.html"},
        //PC Financial
        { imgsrc: "assets/images/compare/PCFinancial.png", name1: "Interest Plus", name2: "Savings Account", rate: 0.85, requirement: "18 years old",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "http://www.banking.pcfinancial.ca/mkt/bankaccounts/interestplussavingsaccount-en.html"},
        //RBC
        { imgsrc: "assets/images/compare/RBC.png", name1: "Leo's Young", name2: "Savers Account", rate: 0.01, requirement: "Under 19",
          eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50 per",
          nonBankTrans: "transaction",
          link: "http://www.rbcroyalbank.com/products/deposits/leo-young-savers-account.html"},
        //Scotiabank
        { imgsrc: "assets/images/compare/Scotiabank.png", name1: "Getting There", name2: "", rate: 0.10, requirement: "Under 19",
            eTransfer: "$1.00 per", eTrans: "transaction", nonBankFees: "$1.50 per",
            nonBankTrans: "transaction",
            link: "http://www.scotiabank.com/ca/en/0,,61,00.html"},
        //Tangerine
        { imgsrc: "assets/images/compare/Tangerine.png", name1: "Children's", name2: "Savings Account", rate: 0.90, requirement: "Under 19",
            eTransfer: "N/A", eTrans: "", nonBankFees: "N/A",
            nonBankTrans: "",
            link: "https://www.tangerine.ca/en/saving/savings-accounts/childrens-savings-account/index.html"},
        //TD
        { imgsrc: "assets/images/compare/TD.png", name1: "Youth Savings", name2: "Account", rate: 0.05, requirement: "Under 19",
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$2.00 per",
            nonBankTrans: "transaction",
            link: "https://www.tdcanadatrust.com/products-services/banking/accounts/savings-accounts/youth.jsp"}
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

app.controller("cellController", ["$scope", function($scope) {

  $scope.sortType = "name1";
  $scope.sortReverse = false;
  $scope.companies = [
      //Bell
      { imgsrc: "assets/images/compare/bell.png", name1: "Bell", name2: "", plan: "Initial Device - Unlimited anytime nationwide minutes + 2 GB (Share Plan)",
          minutes: "Unlimited in Canada", texts: "Unlimited in Canada",
          data: 2, price: 80, bonuses: "call display, message center, call waiting, conference calling",
          link: "https://www.bell.ca/Business/Mobility/Rate-Plans/Share_plans"},
      //Chatr
      { imgsrc: "assets/images/compare/chatr.png", name1: "Chatr", name2: "(Formerly Mobilicity)", plan: "$45 per month Talk, Text, Data Plan",
          minutes: "Unlimited to Canada (in zone)", texts: "Unlimited (in zone)",
          data: 2, price: 45, bonuses: "voicemail, international talk saver, call display, call forwarding, group calling, unlimited incoming text",
          link: "http://www.chatrwireless.com/web/chatr.portal?_nfpb=true&_pageLabel=PlanBrowse&s_cid=base:plans:en"},
      //Fido
      { imgsrc: "assets/images/compare/fido.png", name1: "Fido", name2: "", plan: "3 GB Data, Talk and Text Plan",
          minutes: "1000 International Long Distance Minutes (to 8 selected countries) / Unlimited in Canada and USA", texts: "Unlimited in Canada and USA",
          data: 3, price: 60, bonuses: "circle calling, call display, voicemail",
          link: "https://www.fido.ca/nac/#/choose-plan"},
      //Freedom
      { imgsrc: "assets/images/compare/freedom.png", name1: "Freedom", name2: "(Formerly Wind)", plan: "Smartphone Plan 1",
          minutes: "Unlimited to Canada", texts: "Unlimited to Canada and USA",
          data: 2, price: 35, bonuses: "call control, voicemail, still use data at reduced speed after using all full-speed data, 15 cents per minute to USA (calls), 5 cents per text to other countries",
          link: "http://www.freedommobile.ca/plans-and-devices/plans/mobile-plan-details/smartphone-plan-35"},
      //Koodo
      { imgsrc: "assets/images/compare/koodo.png", name1: "Koodo", name2: "", plan: "1 GB Data + 1 GB Shock-Free Data",
          minutes: "Unlimited in Canada", texts: "Unlimited",
          data: 2, price: 55, bonuses: "call display, voicemail, call waiting, conference calling",
          link: "https://www.koodomobile.com/rate-plans"},
      //Rogers
      { imgsrc: "assets/images/compare/rogers.png", name1: "Rogers", name2: "", plan: "1 GB + 1 GB Share Everything Plan",
          minutes: "Unlimited in Canada", texts: "Unlimited",
          data: 2, price: 90, bonuses: "call display and name display, group calling, call waiting, 2500 call forwarding minutes, worry-free data management, enhanced voicemail, roam like home feature, Rogers NHL GameCenter LIVE",
          link: "http://www.rogers.com/consumer/wireless/smartphone-plans#seeFullDetailsText"},
      //Telus
      { imgsrc: "assets/images/compare/telus.png", name1: "Telus", name2: "", plan: "Elite 67",
          minutes: "500 anytime local minutes", texts: "Unlimited incoming/outgoing international SMS and MMS",
          data: 1, price: 67, bonuses: "voicemail 3, conference calling, call waiting, call display, can auto-renew each 30 days",
          link: "http://www.telus.com/en/on/mobility/prepaid/plans/?INTCMP=Beta_PlansCatalog_CardCTAPrepaidPlans"},
      //Virgin
      { imgsrc: "assets/images/compare/virgin.png", name1: "Virgin Mobile", name2: "", plan: "Unlimited minutes + 2 GB",
          minutes: "Unlimited in Canada", texts: "Unlimited from Canada",
          data: 2, price: 55, bonuses: "MyPeeps, voicemail 3, call display, Canada-Wide calling, unlimited weekends and evenings",
          link: "http://www.virginmobile.ca/en/plans/details.html?province=ON&geoResult=ON#!/postpaid/byop"}
  ];
}]);
