import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentlist = []
  private studentListUrl = 'http://localhost:8080/api/student/list';


  constructor(private http: HttpClient) {
    
   }
   getStudentList() {
    return this.http.get(this.studentListUrl).subscribe((data: any[])=>{
      console.log(data);
      this.studentlist = data;
      console.log(this.studentlist)
    })  ;
  }

  onAddStudent(){
    
  }
  ngOnInit(): void {
    this.getStudentList();
  }

}
