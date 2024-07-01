// book-list.component.ts

import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = []; 

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => console.error('Erro ao obter livros:', error)
      );
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id)
      .subscribe(
        () => {
          this.books = this.books.filter(book => book.id !== id);
          console.log('Livro excluído com sucesso!');
        },
        error => console.error('Erro ao excluir livro:', error)
      );
  }
}
