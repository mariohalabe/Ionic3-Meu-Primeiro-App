import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = IntroPage;

  constructor() {

  }
}
