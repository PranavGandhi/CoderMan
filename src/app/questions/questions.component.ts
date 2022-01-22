import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  question = ""
  question_sum = ""
  samp_input = ""
  samp_output = ""
  @Input() sendquestionNo: string | undefined;

  @Output() getdata: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {



    const url = "http://localhost:3000/questions/" + this.sendquestionNo

    //   this.http.get(url).subscribe(data => {
    //     console.log(data);

    // })    

    this.http.get(url).toPromise().then((data: any) => {
      console.log(data);
      this.getdata.emit(data);
      this.question = data.question
      this.question_sum = data.question_sum
      this.samp_input = data.samp_input
      this.samp_output = data.samp_output

    })


  }




}
