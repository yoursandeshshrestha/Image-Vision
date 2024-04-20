const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("Search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const searchBtn = document.getElementById("search-btn")
const card = document.getElementsByClassName("card");
const images = document.getElementsByClassName("images");
const message = document.getElementById("message"); 
const test = document.getElementById("test"); 

let keyword = "";
let page = 1;
const accessKey = "t8s-RhBW42buXsJj6tqIxR7bj5g1Pqvua_ujkRrD42o";

function searchImages(){
    keyword = searchBox.value;
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`)
    .then((response)=>{return response.json()})
    .then((data)=>{const results = data.results
    
        const myul = document.createElement("ul")
        results.forEach((result) => {
                myul.className = "images";
                const listItem = document.createElement('li');
                listItem.className = 'card';
                const imgTag = document.createElement("img");
                imgTag.src = result.urls.small;
                listItem.appendChild(imgTag);
                myul.appendChild(listItem)
                searchResult.appendChild(myul);
            });
    })
    .catch((error) => {console.error("Error:", error)})
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    searchImages(); // Call searchImages function without any arguments
    if(page === 1){
        searchResult.innerHTML = "";
    }
    showMoreBtn.style.display = "block";
    searchBox.value = "";
    message.style.display = "none";

});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages()
})

