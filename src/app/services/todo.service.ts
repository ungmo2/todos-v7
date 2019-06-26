import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../types/todo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private appUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Todo[]>(this.appUrl);
  }

  create(payload: Todo) {
    return this.http.post<Todo[]>(this.appUrl, payload);
  }

  updateAll(completed: boolean) {
    return this.http.patch<Todo[]>(this.appUrl, { completed });
  }

  updateById(payload: {id: number, completed: boolean}) {
    const { id, completed } = payload;
    return this.http.patch<Todo[]>(`${this.appUrl}/${id}`, { completed });
  }

  removeByCompleted() {
    return this.http.delete<Todo[]>(`${this.appUrl}/completed`);
  }

  removeById(id: number) {
    return this.http.delete<Todo[]>(`${this.appUrl}/${id}`);
  }

}
