// <h2 id="count">3 like(s)</h2>
// <button class="btn" onclick="addLike()">Like</button>
var count = 3
var countElement = document.querySelector('#count');
function addLike(){
    count++;
    countElement.innerText = count + ' like(s)'
    console.log(count);
}