import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokemons: Array<any> = [];
  //public habilities: Array<string> = [];
  //public name: string = "";

  constructor(private pokeService: PokeApiService) { }

  ngOnInit() {
    this.pokeService.getListOfPokemons.subscribe(
      res => {
        console.log(res)
        this.pokemons = res.results;
        //this.habilities = res.results.status.habilities;
      }
    )
  }

}
