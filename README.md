# Express-Booklist
​
heroku deploy : https://booklist-express.herokuapp.com/
​
get All Books - https://booklist-express.herokuapp.com/book
​
createBook - https://booklist-express.herokuapp.com/book/create/
​
updateBook - https://booklist-express.herokuapp.com/book/3 <-- book id to update
​
deleteBook - https://booklist-express.herokuapp.com/book/2 <-- book id to delete
​
Book By Title - https://booklist-express.herokuapp.com/book/bytitle/The Odyddey <-- title of the book
​
Book by Author - https://booklist-express.herokuapp.com/book/byauthor/Homer <-- author of the book
​
Book By Id - https://booklist-express.herokuapp.com/book/1 <-- id book to retrieve


if testing in insomnia
POST book     http://localhost:3001/book/create/   <------create few books 
GET booklist  http://localhost:3001/booklist     
PUT toupdate   http://localhost:3001/book/2   <----id number .Update the isREAD status to true by just entering the tiltle in the json .
DELETE book.    http://localhost:3001/book/3  <-----delete by id
GET bookbytitle.  http://localhost:3001/book/bytitle/planet earth  <-----title copied exactly as created 
GET bookbyid.     http://localhost:3001/book/1  
GET bookbyauthor  http://localhost:3001/book/byauthor/Sir David    <-------author name copied exactly as created
