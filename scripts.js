//Javascript
const section = document.querySelector('section');

function createBook(title, author, length, read) {

    const article = document.createElement('article');
    section.appendChild(article);

    const div = document.createElement("div");
    article.appendChild(div);
    
    for (let i = 0; i < 6; i++) {
        const p = document.createElement('p');
        div.appendChild(p);
        switch (i) {
            case 0:  
            p.innerText = "Title:";
            break;

            case 1:
            p.innerText = '"' + title + '"';
            break;
            
            case 2:
            p.innerText = "Author:";
            break;

            case 3:
            p.innerText = author;
            break;

            case 4:
            p.innerText = "Length:";
            break;

            case 5:
            p.innerText = length + " pages";

        }
    }

    secondDiv = document.createElement('div');
    article.appendChild(secondDiv);

    const p = document.createElement('p');
    secondDiv.appendChild(p);

    console.log(p);

    const readImage = document.createElement('img');
    secondDiv.appendChild(readImage);

    if (read == true) {
        p.innerText = "Read";
        readImage.src = "images/check-mark-clip-art-8.jpg";
    } else if (read == false) {
        p.innerText = "Not Read";
        readImage.src = "images/23-233787_red-x-mark-transparent-background.png";
    }

}

for (i = 0; i < 8; i++) {
    createBook("title", "author", "1000", false);
}