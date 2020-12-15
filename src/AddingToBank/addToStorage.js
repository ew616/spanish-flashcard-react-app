const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");

function addToStorage(word) { 
    // Loading
    console.log("# of words: " + currentBank.length);
    currentBank.forEach(function(word, index) {
        console.log("[" + index + "]: " + word.spanishWord + ": " + word.englishWord);
    });

    currentBank.push(word);
    console.log("Added user #" + word.id);
    console.log(currentBank)
    // Saving
    localStorage.setItem("wordBank", JSON.stringify(currentBank));
};

export default addToStorage;