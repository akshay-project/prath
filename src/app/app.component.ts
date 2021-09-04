import { Component } from '@angular/core';
import { AkService } from './ak.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pr';
  fname:string;
  lname:any;
  email:string;



  id={
    _id: '',
    firstName: '',
    lastName: '',
    email: ''
  };




  checkAdd=false;
  checkEdit=false;
  userObj={
    firstName: '',
    lastName: '',
    email: ''
  };
  crud:any;
  constructor(private user:AkService){
    this.user.getData().subscribe(data=>{
      console.log(data);
      this.crud=data;
    })
  }


  addNewelement(){
    this.checkAdd=true;
  }

  add(){
   console.log(this.fname);
   this.userObj.firstName=this.fname
   this.userObj.lastName=this.lname
   this.userObj.email=this.email
    // console.log(this.userObj);

  this.user.createData(this.userObj).subscribe(data=>{
    console.log(data);
    // this.crud=data;
  })
  location.reload();
  }

  edit(item){

    console.log(item);
    
    this.checkEdit=true;
    this.id._id=item._id;
    this.id.firstName=item.firstName;
    this.id.lastName=item.lastName;
    this.id.email=item.email;
  }

  update(){
    console.log(this.id)
    this.user.updateData(this.id).subscribe(data=>{
      console.log(data);
    });
    location.reload();
  }

  delete(id){
    console.log(id);
    this.user.deleteData(id).subscribe(data=>{
      console.log(data);
      location.reload();
    })
  }
}
