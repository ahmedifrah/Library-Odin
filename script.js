var logBookBtn = document.getElementById('logBookBtn')
var saveBookBtn = document.getElementById('saveBookBtn')
var form = document.getElementById('saveForm')
var formModal = document.getElementById('formModal')
var titleInput = document.getElementById('title')
var authorInput = document.getElementById('author')
var pagesInput = document.getElementById('pages')
var readCheckbox = document.getElementById('read')

logBookBtn.addEventListener('click', function(){
    formModal.showModal()
});

saveBookBtn.addEventListener('click', function(e){
    e.preventDefault()
    addBookToLibrary()
    console.log(myLibrary)
    form.reset()
    formModal.close()

});


const myLibrary = [];


function addBookToLibrary (){
    var titleContent = titleInput.value;
    var authorContent = authorInput.value;
    var pagesContent = pagesInput.value;
    var readContent = readCheckbox.checked ? "Read" : "Not Read"

    const newBook = new Book(titleContent, authorContent, pagesContent, readContent);
    myLibrary.push(newBook)
}

function Book (title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}. ${this.pages}, ${read}`
    };
}
