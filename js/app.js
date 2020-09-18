import UI from "./classes/ui.js";
import Book from "./classes/book.js";
import Store from './classes/store.js';

window.addEventListener("load",_=> UI.display_books());
document.getElementById('book-list').addEventListener('click',e => UI.remove_book(e.target));
document.getElementById("book-form").addEventListener('submit',function(e){
  
  e.preventDefault();
  const title = this.querySelector("#title");
  const author = this.querySelector("#author");
  const isbn = this.querySelector("#isbn");

  const book = new Book(title.value,author.value,isbn.value);
  if(book.is_valid_book()){
    Store.addBook(book);
    UI.add_book_to_list(book);
    UI.show_alert("Book Added Successfully","success");
    UI.clear_fields(title,author,isbn);
  }else{
    UI.show_alert(book.errors,"danger");
  }

});