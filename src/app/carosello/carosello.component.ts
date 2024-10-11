import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

interface Products{
  id:number;
  title:string;
  img:string;
  descrizione:string;
  type: "massa" | "recupero" | "salute" | "performance";

}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-carosello',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.css'
})
export class CarouselCircularDemo implements OnInit{
  products: Products[]= [];

  responsiveOptions: any[] | undefined;

  constructor(private activatedRoute: ActivatedRoute,private deviceService: DeviceDetectorService){}

  isMobile(): boolean {
    return this.deviceService.isMobile();
  }
  ngOnInit() {
      this.products = [
        {
          "id": 1,
          "title": "Proteine del Siero",
          "img": "../../../assets/foto/001proteineinpolvere.jpg",
          "descrizione": "Aumenta la sintesi proteica per lo sviluppo muscolare.",
          "type": "massa"
        },
        {
          "id": 2,
          "title": "BCAA",
          "img": "../../../assets/foto/002bcaa.jpg",
          "descrizione": "Favorisce il recupero muscolare post-allenamento.",
          "type": "recupero"
        },
        {
          "id": 3,
          "title": "Creatina Monoidrato",
          "img": "../../../assets/foto/003creatina.jpg",
          "descrizione": "Migliora la forza e la performance durante l'allenamento.",
          "type": "performance"
        },
        {
          "id": 4,
          "title": "Omega 3",
          "img": "../../../assets/foto/004omega3.jpg",
          "descrizione": "Supporta la salute cardiovascolare e riduce le infiammazioni.",
          "type": "salute"
        },
        {
          "id": 5,
          "title": "Glutammina",
          "img": "../../../assets/foto/005glutamina.jpg",
          "descrizione": "Aiuta il recupero muscolare e riduce l'affaticamento.",
          "type": "recupero"
        },
        {
          "id": 6,
          "title": "Gainer",
          "img": "../../../assets/foto/006massgainer.jpg",
          "descrizione": "Aumenta l'apporto calorico per favorire la crescita muscolare.",
          "type": "massa"
        },
        {
          "id": 7,
          "title": "L-Carnitina",
          "img": "../../../assets/foto/007carnitina.jpg",
          "descrizione": "Favorisce l'utilizzo dei grassi come fonte di energia.",
          "type": "performance"
        },
        {
          "id": 8,
          "title": "Multivitaminico",
          "img": "../../../assets/foto/008multivitaminico.jpg",
          "descrizione": "Supporta il benessere generale e migliora le difese immunitarie.",
          "type": "salute"
        },
        {
          "id": 9,
          "title": "Caffeina Anidra",
          "img": "../../../assets/foto/009caffeina.jpg",
          "descrizione": "Aumenta la vigilanza e la resistenza durante gli allenamenti.",
          "type": "performance"
        },
        {
          "id": 10,
          "title": "ZMA",
          "img": "../../../assets/foto/010zma.jpg",
          "descrizione": "Supporta il recupero notturno e migliora la qualità del sonno.",
          "type": "recupero"
        },
        {
          "id": 11,
          "title": "Vitamina D3",
          "img": "../../../assets/foto/011vitaminad3.jpg",
          "descrizione": "Aiuta a rafforzare le ossa e il sistema immunitario.",
          "type": "salute"
        },
        {
          "id": 12,
          "title": "Arginina",
          "img": "../../../assets/foto/012arginina.jpg",
          "descrizione": "Migliora la circolazione sanguigna e la vasodilatazione.",
          "type": "performance"
        }
      ],
      this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1,
        }
    ];
    }
  }
