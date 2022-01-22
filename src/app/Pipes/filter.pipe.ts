import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string) {

    if(value.length===0 || filterString===''){

      return value;

    }

    const questions=[];
    for (const question of value){
      if(question.question===filterString){

        questions.push(question);
      }
    }
    return questions
    
  }

}
