import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-service-group',
  templateUrl: './service-group.component.html',
  styleUrls: ['./service-group.component.css']
})
export class ServiceGroupComponent implements OnInit {
  display: boolean = false;
  title;
  form: FormGroup;
  submitted: boolean;
  phonePattern = "^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$";
  data = [
    {title: 'التأمين ضد الحريق و السطو و الاخطار الاضافية'},
    {title: 'التأمين ضد أخطار المقاولين'},
    {title: 'التأمين على أجسام السفن و الطائرات'},
    {title: 'التأمين ضد خيانة الامانة و السرقة بالاكراه'},
    {title: 'التأمين ضد فساد محتويات مخازن التبريد والثلاجات'},
    {title: 'تأمين المسئولية المدنية العامه'},
    {title: 'تأمين المنزل'},
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  //   this.form = this.fb.group({
  //     'name': new FormControl(null, Validators.required),
  //     'phone': new FormControl(null, Validators.required , ),  
  //     'companyName': new FormControl(null, Validators.required)
  // });
  this.form =  new FormGroup({
    name: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }),
    phone: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.pattern(this.phonePattern)]
    }),
    companyName: new FormControl('', {
      updateOn: 'blur',
      validators: [Validators.required]
    })
  });
  }
  showDialog(i: number) {
    this.display = !this.display;
    this.title = this.data[i].title;
  }
  closeDialog() {
    this.display = false;
  }
  onSubmit(value: string) {
    this.submitted = true;
    // this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
}

}
