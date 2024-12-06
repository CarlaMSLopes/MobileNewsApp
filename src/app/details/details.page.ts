import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { saveArticleService } from '../save-article.service'; // Importar o serviço

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  article: any;
  isSaved: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private saveArticleService: saveArticleService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtém o ID da rota
    this.loadArticle(id);
  }

  loadArticle(id: string | null) {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]');
    this.article = articles.find((article: any) => article.id === id);

    if (this.article) {
      // Verifica se o artigo já está salvo
      const savedArticles = this.saveArticleService.getSavedArticles();
      this.isSaved = savedArticles.some((saved: any) => saved.id === this.article.id);
    } else {
      console.error('Artigo não encontrado para o ID:', id);
    }
  }
  navigateToHome() {
    this.router.navigate(['/tabs/tab1']); // Navega para a página de detalhes
  }
  saveArticle(article: any) {
    this.saveArticleService.saveArticle(article); // Chama o serviço para salvar o artigo
    this.isSaved = true; // Atualiza o estado de "salvo"
    alert('Artigo salvo nos favoritos!');
  }
  
}
