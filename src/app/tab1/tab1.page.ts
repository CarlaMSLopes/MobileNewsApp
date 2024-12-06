import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: any;
  selectedCategory: string = 'brazil'; // Categoria padrão
  activeButton: string = 'brazil'; // Botão ativo

  constructor(
    private getdata: GetdataService, private router: Router
  ) { }

  ngOnInit() {
    this.fetchData(); // Carrega os dados ao iniciar
  }


  fetchData() {
    this.getdata.doGet(this.selectedCategory).subscribe(res => {
      this.data = res.data.articles.map((article: any) => ({
        ...article,
        id: article.source.id || article.title, // Usa o ID do `source` ou o título como fallback
      }));
      localStorage.setItem('articles', JSON.stringify(this.data)); // Armazena os artigos no localStorage
      console.log(this.data);
    });
  }


  // Atualiza a categoria e faz a requisição novamente
  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.activeButton = category; // Atualiza o botão ativo
    this.fetchData();
  }
  navigateToDetails(id: string) {
    this.router.navigate(['/tabs/details', id]); // Navega para a página de detalhes
  }
}
