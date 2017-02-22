var app = angular.module("comparison", [])

app.controller("savingController", ["$scope", function($scope) {
    $scope.calcInput = 1000;
    $scope.sortType = "name";
    $scope.sortReverse = false;
    //list of banks
    $scope.banks = [
        //ATB
        { imgsrc: "assets/images/compare/ATB.png", name1: "Generation", name2: "Account", rate: 0.10,
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per", atmRank: 3,
            nonBankTrans: "transaction", prep: "Over", branches: 200,
            link: "https://get.atb.com/Personal/Bank/Youth-Accounts/Generation-Account/p/2315"},
        //BMO
        { imgsrc: "assets/images/compare/BMO.png", name1: "Smart Saver", name2: "", rate: 0.40,
            eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50 per", atmRank: 4,
            nonBankTrans: "transaction", prep: "Over", branches: 960,
            link: "https://www.bmo.com/main/personal/bank-accounts/smart-saver/"},
        //CIBC
        { imgsrc: "assets/images/compare/CIBC.png", name1: "Advantage", name2: "for Youth", rate: 0.15,
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per", atmRank: 5,
            nonBankTrans: "transaction", prep: "", branches: 1108,
            link: "https://www.cibc.com/en/personal-banking/bank-accounts/youth-banking-offers.html"},
        //CWB
        { imgsrc: "assets/images/compare/CWB.png", name1: "Youth Account", name2: "", rate: 0.05,
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per", atmRank: 6,
            nonBankTrans: "transaction", prep: "Over", branches: 40,
            link: "http://www.cwbank.com/personal-banking/bank-accounts/youth-account"},
        //National Bank
        { imgsrc: "assets/images/compare/NationalBank.png", name1: "Strategist", name2: "Account", rate: 0.02,
            eTransfer: "$1.25 per", eTrans: "transaction", nonBankFees: "$0.75 per", atmRank: 2,
            nonBankTrans: "transaction", prep: "Around", branches: 450,
            link: "https://www.rbc.ca/en/personal/banking/saving-accounts/strategist-account.html"},
        //PC Financial
        { imgsrc: "assets/images/compare/PCFinancial.png", name1: "Interest Plus", name2: "Savings Account", rate: 0.85,
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$1.50 per", atmRank: 7,
            nonBankTrans: "transaction", prep: "", branches: 0,
            link: "http://www.banking.pcfinancial.ca/mkt/bankaccounts/interestplussavingsaccount-en.html"},
        //RBC
        { imgsrc: "assets/images/compare/RBC.png", name1: "Leo's Young", name2: "Savers Account", rate: 0.01,
          eTransfer: "Unlimited", eTrans: "", nonBankFees: "$1.50 per", atmRank: 8,
          nonBankTrans: "transaction", prep: "Around", branches: 1200,
          link: "http://www.rbcroyalbank.com/products/deposits/leo-young-savers-account.html"},
        //Scotiabank
        { imgsrc: "assets/images/compare/Scotiabank.png", name1: "Getting There", name2: "", rate: 0.10,
            eTransfer: "$1.00 per", eTrans: "transaction", nonBankFees: "$1.50 per", atmRank: 9,
            nonBankTrans: "transaction", prep: "", branches: 980,
            link: "http://www.scotiabank.com/ca/en/0,,61,00.html"},
        //Tangerine
        { imgsrc: "assets/images/compare/Tangerine.png", name1: "Children's", name2: "Savings Account", rate: 0.90,
            eTransfer: "N/A", eTrans: "", nonBankFees: "N/A", atmRank: 1,
            nonBankTrans: "", prep: "", branches: 0,
            link: "https://www.tangerine.ca/en/saving/savings-accounts/childrens-savings-account/index.html"},
        //TD
        { imgsrc: "assets/images/compare/TD.png", name1: "Youth Savings", name2: "Account", rate: 0.05,
            eTransfer: "$1.50 per", eTrans: "transaction", nonBankFees: "$2.00 per", atmRank: 10,
            nonBankTrans: "transaction", prep: "Over", branches: 1150,
            link: "https://www.tdcanadatrust.com/products-services/banking/accounts/savings-accounts/youth.jsp"}
    ];
}]);

app.controller("ccardController", ["$scope", function($scope) {
    $scope.banks = [
      { imgsrc: "assets/images/compare/Scotiabank.png", name: "Scotiabank Scene", fee: 0, limit: 500, features: "4000 bonus signup bonus, Sportschek discount, 1 scene point / $1 spent",
          worth: 500, link: "http://www.scotiabank.com/ca/en/0,,91,00.html" },
      { imgsrc: "assets/images/compare/TD.png", name: "TD Bank Green", fee: 0, limit: 500, features: "Basic Insurance provided (carrier insurance)",
          worth: 0, link: "https://www.tdcanadatrust.com/products-services/banking/credit-cards/view-all-cards/green-card.jsp" },
      { imgsrc: "assets/images/compare/RBC.png", name: "RBC Cashback Mastercard", fee: 0, limit: 500, features: "2% cashback on groceries, 1% on every dollar spent",
          worth: 0, link: "http://www.rbcroyalbank.com/credit-cards/cash-back-credit-cards/cash-back-mastercard/" },
      { imgsrc: "assets/images/compare/BMO.png", name: "BMO SPC Cashback", fee: 0, limit: 500, features: "SPC Card Benefits, 1% cashback on purchases, BONUS - $60 first year",
          worth: 0, link: "https://www.bmo.com/main/personal/credit-cards/spc-cashback-student-credit-cards#"},
      { imgsrc: "assets/images/compare/CIBC.png", name: "Tims Double Double Visa Card", fee: 0, limit: 500, features: "1% tims ($20 signing bonus)", worth: "",
          link: "https://www.cibc.com/en/personal-banking/credit-cards/retail-rewards-cards/tim-hortons-rewards-card.html"},
      { imgsrc: "assets/images/compare/CIBC.png", name: "Classic Visa", fee: 0, limit: 500, features: "100,000$ basic insurance", worth: 0,
          link: "https://www.cibc.com/en/personal-banking/credit-cards/everyday-cards/classic-visa.html"},
      { imgsrc: "assets/images/compare/CIBC.png", name: "Dividend Visa", fee: 0, limit: 500, features: "1% everything / 2% groceries", worth: "",
          link: "https://www.cibc.com/ca/visa/dividend-card.html"},
      { imgsrc: "assets/images/compare/CIBC.png", name: "Telus Rewards Visa", fee: 0, limit: 500, features: "1 Telus point / $1 spent", worth: 500 },
      { imgsrc: "assets/images/compare/Tangerine.png", name: "Tangerine", fee: 0, limit: "TBD", features: "2% on select purchases, 1% on everything else", worth: "" },
      { imgsrc: "assets/images/compare/mbna.png", name: "MBNA ", fee: 0, limit: 500, features: "1 MBNA point / $1 spent", worth: 500},
      { imgsrc: "assets/images/compare/NationalBank.png", name: "National Bank ", fee: 0, limit: "500+", features: "1% cash back for instore purchases, 1.5% online", worth: 0 }
    ];
}]);

app.controller("cellController", ["$scope", function($scope) {

  $scope.sortType = "name1";
  $scope.sortReverse = false;
  $scope.companies = [
      //Bell
      { imgsrc: "assets/images/compare/bell.png", name1: "Bell", name2: "", plan: "Initial Device - Unlimited anytime nationwide minutes + 2 GB (Share Plan)",
          minutes: "Unlimited in Canada", texts: "Unlimited in Canada", callRank: 4, textRank: 3,
          data: 2, price: 80, bonuses: "call display, message center, call waiting, conference calling",
          link: "https://www.bell.ca/Business/Mobility/Rate-Plans/Share_plans"},
      //Chatr
      { imgsrc: "assets/images/compare/chatr.png", name1: "Chatr", name2: "(Formerly Mobilicity)", plan: "$45 per month Talk, Text, Data Plan",
          minutes: "Unlimited to Canada (in zone)", texts: "Unlimited (in zone)", callRank: 2, textRank: 1,
          data: 2, price: 45, bonuses: "voicemail, international talk saver, call display, call forwarding, group calling, unlimited incoming text",
          link: "http://www.chatrwireless.com/web/chatr.portal?_nfpb=true&_pageLabel=PlanBrowse&s_cid=base:plans:en"},
      //Fido
      { imgsrc: "assets/images/compare/fido.png", name1: "Fido", name2: "", plan: "3 GB Data, Talk and Text Plan",
          minutes: "1000 International Long Distance Minutes (to 8 selected countries) / Unlimited in Canada and USA", texts: "Unlimited in Canada and USA",
          callRank: 8, textRank: 5, data: 3, price: 60, bonuses: "circle calling, call display, voicemail",
          link: "https://www.fido.ca/nac/#/choose-plan"},
      //Freedom
      { imgsrc: "assets/images/compare/freedom.png", name1: "Freedom", name2: "(Formerly Wind)", plan: "Smartphone Plan 1",
          minutes: "Unlimited to Canada", texts: "Unlimited to Canada and USA", callRank: 3, textRank: 4,
          data: 2, price: 35, bonuses: "call control, voicemail, still use data at reduced speed after using all full-speed data, 15 cents per minute to USA (calls), 5 cents per text to other countries",
          link: "http://www.freedommobile.ca/plans-and-devices/plans/mobile-plan-details/smartphone-plan-35"},
      //Koodo
      { imgsrc: "assets/images/compare/koodo.png", name1: "Koodo", name2: "", plan: "1 GB Data + 1 GB Shock-Free Data",
          minutes: "Unlimited in Canada", texts: "Unlimited", callRank: 5, textRank: 6,
          data: 2, price: 55, bonuses: "call display, voicemail, call waiting, conference calling",
          link: "https://www.koodomobile.com/rate-plans"},
      //Rogers
      { imgsrc: "assets/images/compare/rogers.png", name1: "Rogers", name2: "", plan: "1 GB + 1 GB Share Everything Plan",
          minutes: "Unlimited in Canada", texts: "Unlimited", callRank: 6, textRank: 7,
          data: 2, price: 90, bonuses: "call display and name display, group calling, call waiting, 2500 call forwarding minutes, worry-free data management, enhanced voicemail, roam like home feature, Rogers NHL GameCenter LIVE",
          link: "http://www.rogers.com/consumer/wireless/smartphone-plans#seeFullDetailsText"},
      //Telus
      { imgsrc: "assets/images/compare/telus.png", name1: "Telus", name2: "", plan: "Elite 67",
          minutes: "500 anytime local minutes", texts: "Unlimited incoming/outgoing international SMS and MMS", callRank: 1, textRank: 8,
          data: 1, price: 67, bonuses: "voicemail 3, conference calling, call waiting, call display, can auto-renew each 30 days",
          link: "http://www.telus.com/en/on/mobility/prepaid/plans/?INTCMP=Beta_PlansCatalog_CardCTAPrepaidPlans"},
      //Virgin
      { imgsrc: "assets/images/compare/virgin.png", name1: "Virgin Mobile", name2: "", plan: "Unlimited minutes + 2 GB",
          minutes: "Unlimited in Canada", texts: "Unlimited from Canada", callRank: 7, textRank: 2,
          data: 2, price: 55, bonuses: "MyPeeps, voicemail 3, call display, Canada-Wide calling, unlimited weekends and evenings",
          link: "http://www.virginmobile.ca/en/plans/details.html?province=ON&geoResult=ON#!/postpaid/byop"}
  ];
}]);

app.controller("foodController", ["$scope", function($scope) {
    $scope.companies = [
      { name: "UberEats", access: "Mobile App and Website Available", charge: "$5.00", drinks: "Bubble tea, Juice and smoothies", food: "#NAME?", range: "Toronto, Mississauga, Edmonton, Ottawa", link: "https://www.ubereats.com", },
      { name: "JustEat", access: "Mobile App and Website Available", charge: "Typically $3.00",  drinks: "N/A", food: "#NAME?", range: "Most Major Cities in Canada", link: "https://www.just-eat.ca", },
      { name: "Foodora", access: "Mobile App and Website Available", charge: "$5.50 plus $2 per kilometer from pick-up point to destination",  drinks: "Bubble tea, Juices and Smoothies", food: "#NAME?", range: "Dupont to Lake Ontario, Keele to the DVP", link: "https://www.foodora.ca/", },
      { name: "So Hungry", access: "Website Only", charge: "$0.00",  drinks: "N/A", food: "#NAME?", range: "Toronto", link: "http://www.sohungry.com/order-food.html", },
      { name: "Feast Bank", access: "Mobile App and Website Available", charge: "N/A",  drinks: "N/A", food: "#NAME?", range: "Toronto", link: "https://www.eatfeast.com/guiding-principles", },
      { name: "Door Dash", access: "Mobile app and website available", charge: "Between $3.99 and $4.99",  drinks: "Smoothies", food: "#NAME?", range: "Toronto, Vancouver, Etobicoke", link: "https://www.doordash.com/" }
    ];
}]);
