const inputElement = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container")
const titleEle = document.getElementById("title");
const definitionEle = document.getElementById("definition");



function fetchAPI(word) {
    try {
        infoTextEl.style.display = "block";

        infoTextEl.innerText = `Searching the meaning of ${word}`;
        const APIURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = fetch(APIURL).then((res) => res.json());
       
        infoTextEl.style.display = "none";
        meaningContainer.style.display = "block";
        titleEle.innerText = result[0].word;
        meaningContainer.innerText = result[0].meaning[0].definitions[0];
    } catch (error) {
        console.log(error);
    }
}

inputElement.addEventListener("keyup", (e)=> {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
} )