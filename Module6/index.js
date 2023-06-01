
const title = document.getElementById("title")

let count = 0;


function increment() {
    count = count +1;
    title.innerHTML = count;
}


function decrement() {
    count = count -1;
    title.innerHTML = count;
}