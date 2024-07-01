import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {  
  book: Book = {
    id: 0,
    nome: '',
    autor: '',
    categoria: '',
    valor: 0,
    quantidadeEstoque: 0,
  };
  
  isNew = true;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.isNew = !this.route.snapshot.paramMap.has('id');
    if (!this.isNew) {
      const idParam = this.route.snapshot.paramMap.get('id');
      const id = idParam ? +idParam : 0;
      this.getBook(id);
    }
  }

  submitForm(): void {
    if (this.isNew) {
      this.createBook();
    } else {
      this.updateBook();
    }
  }

  createBook(): void {
    this.bookService.createBook(this.book)
      .subscribe(() => this.router.navigate(['/books']));
  }

  updateBook(): void {
    this.bookService.updateBook(this.book.id, this.book)
      .subscribe(() => this.router.navigate(['/books']));
  }

  private getBook(id: number): void {
    this.bookService.getBook(id)
      .subscribe((book: Book) => {
        this.book = book;
      });
  }
  
}
