// beginning of equal code

  
function equal() {
        u.innerHTML = u.innerHTML + '\n\n' + eval(u.innerHTML);
    if (u.scrollHeight > 82) {
        u.scrollTop = u.scrollHeight;
    }   
}
//end of equal code



// code for squared

function c() {
    u.innerHTML += '**2';
}  

// code for clear

function wip() {
    u.innerHTML = '';
} 


//beginning of delete code

function a() {
    var arr = [];
    arr += u.innerHTML;
    let x = 0;
    var brr = [];
    for (; x < arr.length - 1; x++) {
        brr += arr[x];
    }
    u.innerHTML = brr;
}
// end of delete code


// beginning of bracket code
var fg = 1;

function btwo() {
   fg++;
} 

function b() {
    btwo();
    for (;fg < 1000;) {
        if (fg%2 == 0) {
        u.innerHTML += '(';
    }
        else {
        u.innerHTML += ')';
    }
    return fg;
    break;
  }
}   

// end of bracket code
  
  
//beginning of main function for numbers

function show(Id) {
    if (u.scrollHeight/82 >= 1) {
        var a = 0;
        var b = u.innerHTML;
        var c = u.innerHTML.length;
        for (; a < 15; a++) {
            if (b[c-a] == '*' || b[c-a] == '/' || b[c-a] == '-' || b[c-a] == '+' || b[c-a] == '\n') {
                break;
        }
    }
       if (b[c-a] == '-' || b[c-a] == '+' || b[c-a] == '/' || b[c-a] == '*') {
        let x = document.getElementsByTagName('button');
            for (let y = 0; y < x.length; y++) {
                var z = x[y].innerHTML;
                if (Id.innerHTML == z) {
                    break;
                }
            }
            u.innerHTML += z;
        }
        return u.innerHTML;
    }    
   else {
        let x = document.getElementsByTagName('button');
        for (let y = 0; y < x.length; y++) {
            var z = x[y].innerHTML;
            if (Id.innerHTML == z) {
                break;
        }
    }
        u.innerHTML += z;
  }
  
}
//end of main function for numbers

// beginning of function for operators
function showOperator(Id){
        let f = document.getElementsByTagName('button');
        for (let g = 0; g < f.length; g++) {
            var h = f[g].innerHTML;
            if (Id.innerHTML == h) {
                break;
        }
    }
        u.innerHTML += h;
  }


//end of function for operators
