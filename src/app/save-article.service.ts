import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class saveArticleService {
  private savedArticlesSubject = new BehaviorSubject<any[]>(this.getSavedArticles());
  savedArticles$ = this.savedArticlesSubject.asObservable();

  // Recupera artigos salvos
  getSavedArticles(): any[] {
    return JSON.parse(localStorage.getItem('savedArticles') || '[]');
  }

  // Adiciona artigo salvo
  saveArticle(article: any): void {
    let savedArticles = this.getSavedArticles();
    if (!savedArticles.some((saved: any) => saved.id === article.id)) {
      savedArticles.push(article);
      localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
      this.savedArticlesSubject.next(savedArticles); // Atualiza a lista observada
    }
  }
  removeArticle(articleId: string): void {
    let savedArticles = this.getSavedArticles();
    savedArticles = savedArticles.filter((article: any) => article.id !== articleId);
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
    this.savedArticlesSubject.next(savedArticles); // Atualiza a lista observada
  }
}
