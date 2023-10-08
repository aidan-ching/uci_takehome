const stack = document.querySelector('#stack');

const changeColorBtn = document.querySelector('#changeColorBtn');
const genRandNumBtn = document.querySelector('#genRandNumBtn');
const sortBtn = document.querySelector('#sortBtn');

sortedNums = [];

testarr = [59,35,52];

const randColor = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0'); //function to generate string of random hex code

const randNum = () => Math.floor(Math.random() * 100 + 1); //function to generate random number between 1-100

changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = randColor();
});

genRandNumBtn.addEventListener('click', ()=>{
    let num = randNum();
    var numDiv = document.createElement('div');
    numDiv.textContent = num.toString();
    stack.appendChild(numDiv);
    insertOrdered(num, sortedNums);
});

sortBtn.addEventListener('click', () => {
    const stack = document.querySelector("#stack");
    let i = 0;

    for (const child of stack.children) {
        if (i >= 3){
            child.textContent = sortedNums[i-3];
        }
        i++;
    }
    //updateContent();
});

function insertOrdered(num, arr){
    if (arr.length == 0){ //empty arr
        arr.push(num);
    }
    else{
        arr.splice(binarySearch(0,arr.length-1,num,arr), 0, num);
    }
}

function binarySearch(l,r,num,arr){
    if ((l-r) >=1){
        return l;
    }
    else{
        mid = Math.floor((l+r)/2)
        if (num < arr[mid]){
            return binarySearch(l, mid-1, num, arr);
        }
        else if (num > arr[mid]){
            return binarySearch(mid+1, r, num, arr);
        }
        else{
            return mid;
        }
    }
}