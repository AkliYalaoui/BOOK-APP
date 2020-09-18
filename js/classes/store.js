export default class Store{

  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }

  static remove_book(isbn){
    const books = Store.getBooks();
    const books_ = books.filter(e => e.isbn !== isbn);
    localStorage.setItem('books',JSON.stringify(books_));
  }
}