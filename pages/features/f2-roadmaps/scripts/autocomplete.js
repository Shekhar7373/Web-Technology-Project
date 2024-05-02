let availableKeyword = [
    'HTML',
    'CSS',
    'javascript',
    'Web Development',
    'Front End',
    'Backend',
    'java',
    'python',
    'c',
    'c++'
];
const suggestionBox = document.querySelector(".sugg-box");
const inputBox = document.getElementById("input-box");

// Filter the result
inputBox.onkeyup = function () {
    let result = [];
    let input  = inputBox.value;
    if(input.length) {
        result = availableKeyword.filter((Keyword) => {
            return Keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        suggestionBox.innerHTML = '';
    }
}

// to display the result
function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectIp(this)>" + list + "</li>";
    });

    suggestionBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectIp(list) {
    inputBox.value = list.innerHTML;
    suggestionBox.style = "display:none";
}