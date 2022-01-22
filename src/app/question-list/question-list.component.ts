import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  question: any;
  question_sum: any;
  Question_list: any;
  i = 0;
  filteredString=''

  constructor(private http: HttpClient, private router: Router) { }



  ngOnInit(): void {

    const url = "http://localhost:3000/questions/all"

    //   this.http.get(url).subscribe(data => {
    //     console.log(data);

    // })    

    this.http.get(url).toPromise().then((data: any) => {

      this.Question_list = data;
      console.log(this.Question_list);
      // this.question=data.question;
      // console.log(this.question);
      // this.question_sum=data.question_sum;
      // console.log(this.question_sum);


    })


  }
  onClick(index: any) {
    this.router.navigate(['/compiler', index + 1]);

  }


}
