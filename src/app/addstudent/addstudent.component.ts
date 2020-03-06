import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  studentData;
  checkoutForm;
  subjectlist =new Array();
  submitUrl = "http://localhost:8080/api/student/student-data";

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      studentName:['', Validators.required],
      level:['', Validators.required],
      subjects:[]
    });
    console.log(this.checkoutForm.value);
   }

  ngOnInit(): void {
  }

  onSubmit(studentData){

    if (this.checkoutForm.invalid) {
      
      return;
    }
    console.log(studentData);    
    studentData.subjects = this.subjectlist;
    console.log(studentData);    
    console.log(this.submitUrl);
    this.http.post(this.submitUrl, studentData).subscribe(data => {
      console.log(data);
    },
   err => {
        console.log('Error: ' + err.error);
    });
    this.checkoutForm.reset();
    return;
  }

  onCheckboxChange( event) {
    console.log(event);
    console.log(event.target);
    if(event.target.checked) {
      this.subjectlist.push(event.target.value);
    } else {
      for(var i=0 ; i < this.subjectlist.length; i++) {
        if(this.subjectlist[i] === event.target.value) {
          this.subjectlist.splice(i,1);
        }
      }
    }
    console.log("after change"+this.subjectlist);
  }

}
