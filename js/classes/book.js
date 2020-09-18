export default class Book{
  
  constructor(title,author,isbn){
    this.title  = title;
    this.author = author;
    this.isbn   = isbn;
    this.errors = "";
    this.validate_book();
  }

  validate_book(){
    if( this.title == "" || this.author == "" || this.isbn == "")
      this.errors = 'Please fill in all fields';
  }
  is_valid_book(){
    return this.errors.length === 0 ? true:false;
  }
}