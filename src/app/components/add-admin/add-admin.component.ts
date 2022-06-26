import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  user : any={};
  addAdminForm : FormGroup;
  constructor(private formBuilder : FormBuilder , private userService :UserService) { }

  ngOnInit() {
    this.addAdminForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      tel : ['']
    })
  }
  addAdmin(){
    console.log(this.user);
    this.user.role = "admin";
    this.userService.createUser(this.user).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
  }
}
