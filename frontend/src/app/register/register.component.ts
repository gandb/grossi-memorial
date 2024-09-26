import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Environment  } from '../../environments/environment';
import { RegisterService } from './register.service';
import { Response } from '../commmon/response';
import { Global } from '../commmon/global';
import { MessageData } from '../ui/message';
import { GlobalMessageComponent } from '../ui/message/global-message.component';
import { MessageDataType } from '../ui/message/message-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  providers: [Global],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  {
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;


  constructor(private router: Router,private registerService:RegisterService,private global:Global) {

  }



  async onSubmit() {

    if(this.email==undefined || this.password == undefined)
      {
        alert('Todos os campos são obrigatórios.');
        return;
      }
      if (this.email !== this.confirmEmail) {
        alert('Os emails não correspondem.');
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert('As senhas não correspondem.');
        return;
      }

      const response:Response<string> = await this.registerService.register(this.email as string, this.password as string);

      let messageData:MessageData = {message:"Registrado com sucesso! Aguarde a sua conta ser validada, enviaremos um e-mail para você!",type:MessageDataType.INFO,timeoutSeconds:5};

      if(response.code!=0)
      {
        messageData.type = MessageDataType.ERROR;
        messageData.message = response.data;
      }

      if(response.code==503)
      {
        messageData.type = MessageDataType.ERROR;
        messageData.message = "Erro no servidor";
      }

      this.global.eventManager.publish({name:GlobalMessageComponent.EVENT_GLOBAL_MESSAGE,data:messageData});

      this.router.navigate(['/']);


  }
}
