import Store from './store.js';
export default class UI{

  static display_books(){
    const books = Store.getBooks();
    books.forEach(book => UI.add_book_to_list(book));
  }
  static add_book_to_list(book){
    const list = document.getElementById("book-list");
    const tr = document.createElement('tr');
    let td;
    for(let property in book){
      if(property !== "errors"){
        td =  document.createElement('td');
        td.appendChild(document.createTextNode(book[property]));
        tr.appendChild(td);
      }
    }
    td =  document.createElement('td');
    const a = document.createElement('a');
    a.href="#";
    a.className = "btn btn-danger delete";
    a.appendChild(document.createTextNode('X'));
    td.appendChild(a);
    tr.appendChild(td);
    list.appendChild(tr);
  }

  static clear_fields(...fields){
    fields.forEach(field => field.value = "");
  }
  static remove_book(node){
    if(node.classList.contains('delete')){
      Store.remove_book(node.parentElement.previousElementSibling.textContent);
      node.parentElement.parentElement.remove();
      this.show_alert("Book Removed Successfully","success");
    }
  }
  static show_alert(message,classname){
    const div = document.createElement("div");
    div.className = `alert alert-${classname} animate-alert`;
    div.appendChild(document.createTextNode(message));
    document.querySelector('.container').insertBefore(div,document.getElementById("book-form"));
    setTimeout(_ => div.remove(),3000);
  }
}