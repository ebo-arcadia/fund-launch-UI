import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeros(): Hero[] {
    return HEROES;
  }
  constructor() { }
}
