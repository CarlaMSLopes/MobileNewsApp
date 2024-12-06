import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { saveArticleService } from "../save-article.service"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  savedArticles: any[] = [];

  constructor(private router: Router, private saveArticleService: saveArticleService) { }

  ngOnInit() {
    // Assina a lista de artigos salvos
    this.saveArticleService.savedArticles$.subscribe(articles => {
      this.savedArticles = articles;
    });
  }

  navigateToDetails(id: string) {
    this.router.navigate(['/tabs/details', id]); // Navega para a página de detalhes do artigo
  }

  // Método para remover um artigo da lista de salvos
  removeArticle(articleId: string) {
    this.saveArticleService.removeArticle(articleId); // Chama o serviço para remover o artigo
  }
}
