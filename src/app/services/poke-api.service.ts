import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

  constructor(private http: HttpClient) { }

  get getListOfPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.getPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }


  public getPokemons(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }



  //OUTRO EXEMPLO

  // get getListOfPokemons():Observable<any>{
  //   return this.http.get<any>(this.url).pipe(
  //     tap(res => res),
  //     tap(res => {
  //       res.results.map((resPokemons: any) => {
  //         this.http.get<any>(resPokemons.url).pipe(
  //           map(
  //             res => res
  //           )
  //         ).subscribe(
  //           res => this.getPokemons.()
  //         )
  //       })
  //     })
  //   )
  // }


}
