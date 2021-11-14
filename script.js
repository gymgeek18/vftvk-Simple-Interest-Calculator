    
    function interestCalc(){

    
        var amount = document.calc.numGrab.value; // PRINCIPAL
        // value from the numGrab input, from the calc form, from the page document
        
    
        if(amount <= 0){                       // if the value entered into 'amount' input element is less than or equal to 0
          alert("Enter a positive number")    // an 'alert box' will appear telling you to enter a positive number
          document.getElementById("amount").focus = True; // focus will then return to the 'amount' input element
        }
        
    
        var interest = document.calc.perc.value;   // INTEREST
        
        
        var selectElement = document.querySelector('#select1');
        selectVal = selectElement.options[selectElement.selectedIndex].value; // YEARS
        // selectElement.options = options of selectElement
        // [selectElement.selectedIndex].value = value of the selectedIndex from selectElement
        
        
        var getback = 0;
        
        // Switch statement - each individual value from the range slider is connected to each individual case in the switch statement.
        // The value from the range slider is visibly updated on each movement of the slider. The value is selected from the array values 
        // and stored in the 'arr variable'. The value is then retrieved via the 'term variable'. The 'term variable' value then becomes a 
        // parameter of the 'switch statement'. The choosen case value is then assigned to the 'getback variable'. The 'getback variable'
        // value will then be added to the equation to be calculated
      
        switch(interest){
    
            
            case '1': getback = 1; break; case '2': getback = 1.1; break; case '3': getback = 1.2; break; case '4': getback = 1.3; break; case '5': getback = 1.4; break; case '6': getback = 1.5; break;case '7': getback = 1.6; break; case '8': getback = 1.7; break; case '9': getback = 1.8; break; case '10': getback = 1.9; break; case '11': getback = 2; break;
    
            case '12': getback = 2.1; break; case '13': getback = 2.2; break; case '14': getback = 2.3; break; case '15': getback = 2.4; break; case '16': getback = 2.5; break; case '17': getback = 2.6; break; case '18': getback = 2.7; break; case '19': getback = 2.8; break; case '20': getback = 2.9; break; case '21': getback = 3; break;
    
            case '22': getback = 3.1; break;  case '23': getback = 3.2; break; case '24': getback = 3.3; break; case '25': getback = 3.4; break; case '26': getback = 3.5; break;  case '27': getback = 3.6; break; case '28': getback = 3.7; break; case '29': getback = 3.8; break; case '30': getback = 3.9; break; case '31': getback = 4; break; 
    
            case '32': getback = 4.1; break;  case '33': getback = 4.2; break; case '34': getback = 4.3; break; case '35': getback = 4.4; break; case '36': getback = 4.5; break;  case '37': getback = 4.6; break; case '38': getback = 4.7; break; case '39': getback = 4.8; break; case '40': getback = 4.9; break; case '41': getback = 5; break;
    
            case '42': getback = 5.1; break; case '43': getback = 5.2; break; case '44': getback = 5.3; break; case '45': getback = 5.4; break; case '46': getback = 5.5; break;  case '47': getback = 5.6; break; case '48': getback = 5.7; break; case '49': getback = 5.8; break; case '50': getback = 5.9; break; case '51': getback = 6; break; 
    
            case '52': getback = 6.1; break;  case '53': getback = 6.2; break; case '54': getback = 6.3; break; case '55': getback = 6.4; break; case '56': getback = 6.5; break;  case '57': getback = 6.6; break; case '58': getback = 6.7; break; case '59': getback = 6.8; break; case '60': getback = 6.9; break; case '61': getback = 7; break;
    
            case '62': getback = 7.1; break; case '63': getback = 7.2; break; case '64': getback = 7.3; break; case '65': getback = 7.4; break; case '66': getback = 7.5; break;case '67': getback = 7.6; break; case '68': getback = 7.7; break; case '69': getback = 7.8; break; case '70': getback = 7.9; break; case '71': getback = 8; break; 
    
            case '72': getback = 8.1; break; case '73': getback = 8.2; break; case '74': getback = 8.3; break; case '75': getback = 8.4; break; case '76': getback = 8.5; break; case '77': getback = 8.6; break; case '78': getback = 8.7; break; case '79': getback = 8.8; break; case '80': getback = 8.9; break; case '81': getback = 9; break;
    
            case '82': getback = 9.1; break;  case '83': getback = 9.2; break; case '84': getback = 9.3; break; case '85': getback = 9.4; break; case '86': getback = 9.5; break; case '87': getback = 9.6; break; case '88': getback = 9.7; break; case '89': getback = 9.8; break; case '90': getback = 9.9; break; case '91': getback = 10; break;
    
            case '92': getback = 10.1; break;  case '93': getback = 10.2; break; case '94': getback = 10.3; break; case '95': getback = 10.4; break; case '96': getback = 10.5; break; case '97': getback = 10.6; break; case '98': getback = 10.7; break; case '99': getback = 10.8; break; case '100': getback = 10.9; break; case '101': getback = 11; break;
    
            case '102': getback = 11.1; break;  case '103': getback = 11.2; break; case '104': getback = 11.3; break; case '105': getback = 11.4; break; case '106': getback = 11.5; break;  case '107': getback = 11.6; break; case '108': getback = 11.7; break; case '109': getback = 11.8; break; case '110': getback = 11.9; break; case '111': getback = 12; break; 
    
            case '112': getback = 12.1; break;  case '113': getback = 12.2; break; case '114': getback = 12.3; break; case '115': getback = 12.4; break; case '116': getback = 12.5; break;  case '117': getback = 12.6; break; case '118': getback = 12.7; break; case '119': getback = 12.8; break; case '120': getback = 12.9; break; case '121': getback = 13; break;
    
            case '122': getback = 13.1; break; case '123': getback = 13.2; break; case '124': getback = 13.3; break; case '125': getback = 13.4; break; case '126': getback = 13.5; break; case '127': getback = 13.6; break; case '128': getback = 13.7; break; case '129': getback = 13.8; break; case '130': getback = 13.9; break; case '131': getback = 14; break;
    
            case '132': getback = 14.1; break;  case '133': getback = 14.2; break; case '134': getback = 14.3; break; case '135': getback = 14.4; break; case '136': getback = 14.5; break;  case '137': getback = 14.6; break; case '138': getback = 14.7; break; case '139': getback = 14.8; break; case '140': getback = 14.9; break; case '141': getback = 15; break; 
    
            case '142': getback = 15.1; break;  case '143': getback = 15.2; break; case '144': getback = 15.3; break; case '145': getback = 15.4; break; case '146': getback = 15.5; break;  case '147': getback = 15.6; break; case '148': getback = 15.7; break; case '149': getback = 15.8; break; case '150': getback = 15.9; break; case '151': getback = 16; break;
    
            case '152': getback = 16.1; break; case '153': getback = 16.2; break; case '154': getback = 16.3; break; case '155': getback = 16.4; break; case '156': getback = 16.5; break; case '157': getback = 16.6; break; case '158': getback = 16.7; break; case '159': getback = 16.8; break; case '160': getback = 16.9; break; case '161': getback = 17; break; 
    
            case '162': getback = 17.1; break; case '163': getback = 17.2; break; case '164': getback = 17.3; break; case '165': getback = 17.4; break; case '166': getback = 17.5; break; case '167': getback = 17.6; break; case '168': getback = 17.7; break; case '169': getback = 17.8; break; case '170': getback = 17.9; break; case '171': getback = 18; break;
    
            case '172': getback = 18.1; break;  case '173': getback = 18.2; break; case '174': getback = 18.3; break; case '175': getback = 18.4; break; case '176': getback = 18.5; break;  case '177': getback = 18.6; break; case '178': getback = 18.7; break; case '179': getback = 18.8; break; case '180': getback = 18.9; break; case '181': getback = 19; break; 
    
            case '182': getback = 19.1; break;  case '183': getback = 19.2; break; case '184': getback = 19.3; break; case '185': getback = 19.4; break; case '186': getback = 19.5; break;  case '187': getback = 19.6; break; case '188': getback = 19.7; break; case '189': getback = 19.8; break; case '190': getback = 19.9; break; case '191': getback = 20; break;
    
            // case '192': getback = 20.1; 
    
           
        
            }
    
           
           
       
       var formula = (getback/100) * selectVal * amount; // (rate / 100) * years  * principal 
       var formula1 = formula.toFixed(); // Convert a number, rounding to nearest integer (no decimals)
       var cal = selectVal;       // cal assigns selectVal, which is years
       var year = 2020;           // year assigns 2020
       var future = parseInt(cal) + parseInt(year); // parseInt = Turns a variable into an addable integer
       
    
      
       document.getElementById('look').innerHTML =
       "If you deposit " + "<span id='col'>" + amount + "</span> " + "<br/>" +
       "at an interest rate of " + "<span id='col1'>" + getback + "%." + "</span>" + "<br/>" +
       "you will receive an amount of " + "<span id='col2'>" + formula1 + "," + "</span>" + "<br/>" +
       "in the year " + "<span id='col3'>" + future + "</span>";
       // span tag with id in double quotes with a variable inside, the span tag assigns a css value 
        
    
     }
    
    
    
     // output.innerHTML = rS.value; - the value of rs gets placed inside the HTML of the output element               
     // rSlide id assigns the range slider to the 'rS variable'
     // demo id assigns the span tag to the 'output variable'
     // rs oninput assigns an anonymous function
     
     var result = document.getElementById('show'), input = document.getElementById('rSlide'); 
    
     var arr = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, //29 /
    
               3.9, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, //28 /
    
               6.7, 6.8, 6.9, 7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9, 9.1, 9.2, 9.3, //27 /
    
               9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, //28 /
    
               12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, //24 /
    
               14.6, 14.7, 14.8, 14.9, 15, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8, 15.9, 16, 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7, 16.8, 16.9, 17, 17.1,//26 /
    
               17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8, 17.9, 18, 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7, 18.8, 18.9, 19, 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7, 19.8, 19.9, 20, ];//30 /
               // 191 values
              
    
     input.oninput = function(){ result.innerHTML = arr[this.value-1] + "%"} //  -1 because arrays start from 0, so 0 to 20 is 21 and we want 20
     input.oninput();
    
    
        
    
    