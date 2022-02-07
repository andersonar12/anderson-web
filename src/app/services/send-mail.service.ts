import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

export interface BodyMessage {
  name: string,
  email: string,
  message: string
};

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  public url = environment['apiUrlMailer']

  constructor(private http: HttpClient) { }

  sendMail(data: BodyMessage) {

    const { name, email, message } = data

    const body = {
      name,
      email,
      message: `${name} (${email}) - ${message}`
    }
    return this.http.post<any>(this.url + '/mail/send-mail', body)
  }
}
