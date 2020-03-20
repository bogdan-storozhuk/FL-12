import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../services/users.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], search: string = ''): User[] {
    if (!search.trim()) {
      return  users;
    }
    const filteredByName = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())
      || user.email.toLowerCase().includes(search.toLowerCase()));
    return filteredByName;
  }

}
