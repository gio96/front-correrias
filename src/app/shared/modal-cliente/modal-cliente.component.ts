import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit {
  public breakpoint: number;
  public fname: string = `Ramesh`;
  //public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  firstname:string
  wasFormChanged = false;

  //public fname: string = "";
  //public lname: string = "";

  constructor( public dialogRef: MatDialogRef<ModalClienteComponent>, private fb: FormBuilder){}

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      firstname: [this.firstname, []]
      //,
      //lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      //email: [null, [Validators.required, Validators.email]],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  /*public onaddCus(): void {
    this.markAsDirty(this.addCusForm);
  }*/


  close() {
    this.dialogRef.close();
  }

  enviar(){
    //alert(this.fname)
    //alert(this.addCusForm.)
    this.dialogRef.close(this.addCusForm.value)
    alert(this.firstname)
    //alert(this.fname)
    //this.dialogRef.afterClosed().subscribe(value => {
    //  alert(`Dialog sent: ${value}`)
    //  console.log(`Dialog sent: ${value}`);
    //});
  }


  /*public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }*/

}
