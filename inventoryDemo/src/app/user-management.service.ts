import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { UserSettingsModel } from './user-settings-model';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserManagementService {
  //---
  //Variables and constructors
  
  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  //---
  //GET functions
  
  /** GET users from the server */
  getUsers (): Observable<UserSettingsModel[]> {
    return this.http.get<UserSettingsModel[]>(this.usersUrl)
      .pipe(
        tap(user => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<UserSettingsModel> {
    const url = `${this.usersUrl}/${id}`;
    this.log(`${url}`);

    return this.http.get<UserSettingsModel>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<UserSettingsModel>(`getUser id=${id}`))
    );
  }

  //---
  //PUT functions

  /** PUT: update the user on the server */
  updateUser (user: UserSettingsModel): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  //---
  //Auxillary functions

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message} and ${error.status}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserManagementService: ' + message);
  }
}