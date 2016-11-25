import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username:string;
  private client_id:'ea03ffe8c783382534ce';
  private client_secret:'76e3ff579b4b46ea57a14086ec44c2c9b3af269d';

  constructor(private _http: Http) {
    console.log('Github Service Read!');
    this.username = 'Sreilys';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                     .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
                     .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }

}
