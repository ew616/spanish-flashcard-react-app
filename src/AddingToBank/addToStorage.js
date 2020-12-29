const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");

function addToStorage(word) { 
    // Loading
    currentBank.push(word);

    // Saving
    localStorage.setItem("wordBank", JSON.stringify(currentBank));
};

export default addToStorage;