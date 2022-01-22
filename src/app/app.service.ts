import { HttpService, Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }

  PostCode(CodetoRun) {
    return this.httpService.post('https://codexweb.netlify.app/.netlify/functions/enforceCode', {

      code: CodetoRun.code,
      language: CodetoRun.language,
      input: CodetoRun.input

    }).pipe(
      map(response => response.data),
    );
  }
}

