import { IObj, Roles } from './../models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
@Input() person !: IObj;
@Output() deleteUser = new EventEmitter();

deletedUser(person: IObj){
  this.deleteUser.emit(person)
}

  constructor() { }

  ngOnInit(): void {
  }

}
