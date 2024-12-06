import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  activeTab: string = 'tab1';

  constructor(private router: Router) {}

  ngOnInit() {
    // Detecta mudanças na rota para identificar a aba ativa
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url.includes('tab1')) {
          this.activeTab = 'tab1';
        } else if (url.includes('tab2')) {
          this.activeTab = 'tab2';
        } else if (url.includes('tab3')) {
          this.activeTab = 'tab3';
        }
      }
    });
  }
}
