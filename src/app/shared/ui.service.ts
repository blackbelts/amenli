import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';
@Injectable()
export class UIService {
    constructor(public messageService: MessageService) {}

    addSingle(type, message, detail) {
        this.messageService.add({severity:type, summary:message, detail:detail});
    }
}