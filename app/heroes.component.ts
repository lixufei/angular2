import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router }   from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    selectedHero: Hero;
    heroes: Hero[];

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };

    ngOnInit(): void {
        this.getHeroes();
    };

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };

    add(heroName: String): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(heroName)
            .then(hero => {
               this.heroes.push(hero)
                this.selectedHero = null;
            });
    };



}