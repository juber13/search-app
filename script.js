const accessKey  = "-OIs6964caZdH3SxlARdGnTw2Qy6XRop6y8De1N5uVc";
let page =  1;
let defaultText = "cat";

function fetchApi(inputData){
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    fetch(url).then(res => res.json()).then(data => displayImage(data.results))
}


function displayImage(results){
    let html = results.map((image) => {
        return `<div class="image">
                <img src=${image.urls.regular} alt="">
                <div class="des">
                    <p>${image.description == null ? image.description : "Lorem Iposum doller sit amet"}</p>
                 </div>
               </div>`
    }).join("")
   
    document.getElementsByClassName('images')[0].innerHTML = html;
}


fetchApi(defaultText);

document.getElementsByClassName('form')[0].addEventListener('submit' , (e) => {
    e.preventDefault();
    const inputData = e.target.children[0].value;
    fetchApi(inputData);
})



document.getElementsByClassName('show-more')[0].addEventListener('click'  , () => {
    // console.log('first')

    page++;
    fetchApi(defaultText);
})