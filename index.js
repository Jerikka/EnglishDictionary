const inputElement = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container")
const titleEle = document.getElementById("title");
const definitionEle = document.getElementById("definition");
const audioEl = document.getElementById("audio");


async function fetchAPI(word) {
    try {
        infoTextEl.style.display = "block";

        infoTextEl.innerText = `Searching the meaning of ${word}`;
        const APIURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(APIURL).then((res) => res.json());
       
        if(result.title){
            meaningContainer.style.display = "block";
            infoTextEl.style.display = "none";
            titleEle.innerText = word;
            definitionEle.innerText = "N/A";
            audioEl.style.display = "none";
        } else {
            infoTextEl.style.display = "none";
            meaningContainer.style.display = "block";
            audioEl.style.display = "inline-flex";
            titleEle.innerText = result[0].word;
            definitionEle.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }
        
    } catch (error) {
        console.log(error);
        infoTextEl.innerText = `an error happened, try again later`
    }
}

inputElement.addEventListener("keyup", (e)=> {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
} )