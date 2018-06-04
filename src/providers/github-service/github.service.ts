import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

import {Repository} from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';
//import { Observer } from 'rxjs/Observer';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private basUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";


  constructor(private Http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }



  getUserInformation(username: string): Observable<User>{
    return this.Http.get(`${this.basUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.errorHandler)
  }

  getRepositoryInformation(username: string): Observable<Repository[]>{
    return this.Http.get(`${this.basUrl}/${username}/${this.reposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.errorHandler)

  }

  /*
Finding the Repository from Repository_List , if equals to userame passed in.
Returning the result as an Observable.
*/

  mockGetRepositoryInformation(username: string) : Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

/*
Finding the Username from User_List , if equals to juserame passed in.
Returning the result as an Observable.
*/

  mockGetUserInformation(username: string) : Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  private errorHandler(error: Response | any){
    return Observable.throw(error.json()) || "Server Error";
  }

  private extractData(response: Response){
    return response.json();
  }

  private logData(response: Response){
    console.log(response);
  }

}
