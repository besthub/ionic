import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, Storage, LocalStorage, SqlStorage } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class E2EApp {
  local: Storage;
  sql: Storage;

  constructor() {
    this.local = new Storage(LocalStorage);
    this.sql = new Storage(SqlStorage);
  }

  getLocal() {
    this.local.get('name').then(value => {
      alert('Your name is: ' + value);
    });
  }

  setLocal() {
    let name = prompt('Your name?');

    this.local.set('name', name);
  }

  removeLocal() {
    this.local.remove('name');
  }

  getSql() {
    this.sql.get('name').then(value => {
      alert('Your name is: ' + value);
    }, (errResult) => {
      console.error('Unable to get item from SQL db:', errResult);
    });
  }

  setSql() {
    let name = prompt('Your name?');

    this.sql.set('name', name);
  }

  removeSql() {
    this.sql.remove('name');
  }
}

@NgModule({
  declarations: [
    E2EApp
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
