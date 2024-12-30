var index = 0

const questions = [
    {name: "HI", ingredients: ["coffee", "tea", "sugar"]},
    {name: "bye", ingredients: ["abc", "def", "ghi"]},
];

function update(idx) {
    document.getElementById('name').innerHTML = questions[idx]["name"];
    document.getElementById('ingredients').innerHTML = "";
    for (const ingredient of questions[idx]["ingredients"]) {
        document.getElementById('ingredients').innerHTML += ('<li>'+ingredient+'</li>');
    }
}

function nextRecipe() {
    index = (index + 1) % questions.length;
}

document.getElementById("next").addEventListener("click", function () {
    nextRecipe();
    update(index);
});

