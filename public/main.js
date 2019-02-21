function computeLoan () {

      //get user Loan Amount

      var loanAmount = document.getElementById('loanAmount').value;

      //get user Down Payment

      var downPayment = document.getElementById('downPayment').value;

      // calculate principal

      var principalAmount =  loanAmount - downPayment;

      // get years of the loan program

      var numberOfYears = document.getElementById('numberOfYears').value;

      // get interest rate

      var annualInterestRate = document.getElementById('annualInterestRate').value;
      // calculate the monthly interest rate

      var monthlyInterestRate = annualInterestRate / 1200;

      // calculate monthly payment

      var monthlyPayment = principalAmount * monthlyInterestRate / (1 - 1 / Math.pow(1 + monthlyInterestRate, numberOfYears * 12));

      // calculate total payment

      var totalPayment = monthlyPayment * numberOfYears * 12;

      // print monthlyPayment

      document.getElementById('monthlyPayment').innerHTML =  "Monthly Payment = $"+Math.floor(monthlyPayment);

      // print total payment

      document.getElementById('totalPayment').innerHTML = "Total Payment = $"+Math.floor(totalPayment);




  };






const context = {
  /**Latest Homes in index.html*/
  imgBox: [
    {
      image: './img/house1.jpg',
      price: '$589,000' ,
      bed: '2bd' ,
      bathrooms: '1ba' ,
      address: '2964 MATHERS AVE' ,
      city: 'West Vancouver,',
      postal: 'BC, Z8V 1H9'
    },

    {
      image: './img/house2.jpg',
      price: '$324,000' ,
      bed: '3bd',
      bathroom: '2ba',
      address: '1150 Lakeshore Rd E,' ,
      city: 'Oakville, Ontario,',
      postal: 'L6L 1L2 Canada'
    },

    {
      image: './img/house3.jpg',
      price: '$620,000',
      bed: '4bd',
      bathroom: '2ba',
      address: 'Central West,' ,
      city: 'Ville-Marie, Quebec,',
      postal: 'H3G1B3 Canada'
    },
  ],

  /**Homes in the area in buy.html*/
  location2: 'Houses in your area',
  homesForSale2: '10',
  buyImage: [
    {
      image: './img/saleHouse1.jpg',
      price: '170,000$' ,
      bed:  '2bd',
      bathroom:  '1ba',
      address:  '603 3 Avenue SW,',
      city: ' Calgary,',
      postal: ' AB T2P 0G4, Canada',
    },

    {
      image: './img/saleHouse2.jpg',
      price: '$200,000' ,
      bed:  '2bd',
      bathroom:  '1ba',
      address:  'West 43rd Avenue,',
      city: 'Vancouver, British Columbia',
      postal: ' V6M, Canada',
    },

    {
      image: './img/saleHouse3.jpg',
      price: '$70,000' ,
      bed:  '1bd',
      bathroom:  '1ba',
      address:  '933 Twelfth Street,',
      city: 'New Westminster, Columbia Británica ',
      postal: 'V3M 4K4, Canada',
    },

    {
      image: './img/saleHouse4.jpg',
      price: '$500,000' ,
      bed:  '3bd',
      bathroom:  '2ba',
      address:  '3639 137 Avenue NW,',
      city: 'Edmonton,',
      postal: 'AB T5A 5G8, Canada',
    },

    {
      image: './img/saleHouse5.jpg',
      price: '$890,000' ,
      bed:  '4bd',
      bathroom:  '2ba',
      address:  '9823 101A Avenue NW,',
      city: 'Edmonton,',
      postal: ' AB T5J 4E6, Canada',
    },

    {
      image: './img/saleHouse6.jpg',
      price: '$720,000' ,
      bed:  '4bd',
      bathroom:  '2ba',
      address:  '1st Street East,',
      city: 'Saskatoon,',
      postal: 'SK S7H 2R2, Canada',
    },

    {
      image: './img/saleHouse7.jpg',
      price: '$430,000' ,
      bed:  '3bd',
      bathroom:  '1ba',
      address:  '600 Rue Richelieu,',
      city: 'La Cité-Limoilou,',
      postal: 'QC G1R 1J6, Canada',
    },

    {
      image: './img/house1.jpg',
      price: '$589,000' ,
      bed: '2bd' ,
      bathroom: '1ba' ,
      address: '2964 MATHERS AVE' ,
      city: 'West Vancouver,',
      postal: 'BC, Z8V 1H9'
    },

    {
      image: './img/house2.jpg',
      price: '$324,000' ,
      bed: '3bd',
      bathroom: '2ba',
      address: '1150 Lakeshore Rd E,' ,
      city: 'Oakville, Ontario,',
      postal: 'L6L 1L2 Canada'
    },

    {
      image: './img/house3.jpg',
      price: '$620,000',
      bed: '4bd',
      bathroom: '2ba',
      address: 'Central West,' ,
      city: 'Ville-Marie, Quebec,',
      postal: 'H3G1B3 Canada'
    },
  ],

  /**Homes in the area in rent.html*/
  location: 'House for rent in your area',
  homesForSale: '10',
  rentImage: [
    {
      image: './img/rentHouse1.jpg',
      price: '700$/mo',
      bed:  '2bd',
      bathroom: '1ba',
      address:  'High Park, 152 Street NW,',
      city: 'Edmonton,',
      postal: 'AB T5P 1P1, Canada',
    },

    {
      image: './img/rentHouse2.jpg',
      price: '900$/mo',
      bed: '3bd',
      bathroom: '2ba',
      address:  'Kilkenny, 75 Street NW,',
      city: 'Edmonton,',
      postal: ' AB T5C 2R8, Canada',
    },

    {
      image: './img/rentHouse3.jpg',
      price: '1,700$/mo',
      bed: '4bd',
      bathroom: '2ba',
      address:  'West 1st Avenue,',
      city: ' Vancouver, British Columbia',
      postal: 'V6K, Canada',
    },

    {
      image: './img/rentHouse4.jpg',
      price: '500$/mo',
      bed:  '1bd',
      bathroom:  '1ba',
      address:  'El Ross Apartments, 1620 Haro Street,',
      city: 'Vancouver, British Columbia',
      postal: ' V6G, Canada',
    },

    {
      image: './img/rentHouse5.jpg',
      price: '2,000$/mo',
      bed:  '5bd',
      bathroom:  '2ba',
      address:  'The Beasley, 888 Homer Street,',
      city: 'Vancouver, British Columbia',
      postal: 'V6B, Canada',
    },

    {
      image: './img/rentHouse6.jpg',
      price: '1,200$/mo',
      bed:  '3bd',
      bathroom:  '2ba',
      address:  '1210 Rue Drummond,',
      city: 'Montreal,',
      postal: 'QC H3B 4W8, Canada',
    },

    {
      image: './img/rentHouse7.jpg',
      price: '800$/mo' ,
      bed:  '2bd',
      bathroom:  '1ba',
      address:  '276 Rue Dagenais,',
      city: ' Repentigny, ',
      postal: 'QC J5Z 4K3, Canada',
    },

    {
      image: './img/rentHouse8.jpg',
      price: '3,200$/mo' ,
      bed:  '5bd',
      bathroom:  '3ba',
      address:  '135 Kingsdale Avenue,',
      city: 'Toronto,',
      postal: 'ON M2N 6W1, Canada',
    },

    {
      image: './img/rentHouse9.jpg',
      price: '600$/mo' ,
      bed:  '2bd',
      bathroom:  '1ba',
      address:  '411 Champagne Drive,',
      city: ' Toronto,',
      postal: 'ON M3J 2C6, Canada',
    },

    {
      image: './img/rentHouse10.jpg',
      price: '1,400$/mo' ,
      bed:  '2bd',
      bathroom:  '1ba',
      address:  '1516 Lee Grayson Court,',
      city: 'Regina,',
      postal: 'SK S4R 7M2, Canadá',
    },

  ],

};




const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context)

document.getElementById('information').innerHTML = compiledHtml;
