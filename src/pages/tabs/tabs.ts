import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NoticiasPage } from '../noticias/noticias';
import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = NoticiasPage;
  tab5Root = Pagina2Page;
  
  

  constructor() {

  }
}
