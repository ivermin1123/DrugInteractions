import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  imagesPRO = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  currentUser: any;

  constructor(private token: TokenStorageService, config: NgbCarouselConfig) {
    config.interval = 1000;
    config.showNavigationIndicators = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.imagesPRO);
  }

}
