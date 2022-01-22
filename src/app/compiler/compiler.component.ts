import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,private token:AppComponent) { }
  questionNo = '';

  ngOnInit(): void {

    this.questionNo = String(parseInt(this.route.snapshot.paramMap.get('id') as string))!;
    let res=this.token.token();
    
    
    if(res){this.islogin=true}
    else{this.islogin=false}

  }
  
  output = ''
  Language: string = 'py';
  question_answers = ''
  testcasePassed = 0
  waitingforSubmit=false
  waitingforRun=false

  islogin=false

  

  selectChangeHandler(event: any) {

    this.Language = event.target.value;
  }


  postRunData(textcode: string, input: string) {

    this.waitingforRun=true

    const url = "http://localhost:3000/code/run"

    this.http.post(url, {

      code: textcode,
      language: this.Language,
      input: input

    }).toPromise().then((data: any) => {
      console.log(data);
      this.waitingforRun=false
      this.output = data.output

    })


  }


  getdata(question_answers: any) {

    this.question_answers = question_answers;

  }

  postSubmitData(textcode: string) {
    this.waitingforSubmit=true
    const url = "http://localhost:3000/code/submit"

    this.http.post(url, {

      code: textcode,
      language: this.Language,
      question_answers: this.question_answers

    }).toPromise().then((data: any) => {
      console.log(data);
      this.waitingforSubmit=false;
      this.testcasePassed = data;

    })



  }



}
