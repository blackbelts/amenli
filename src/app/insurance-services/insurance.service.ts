import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from './insurance.model';

@Injectable()
export class InsuranceService {
    private _text = ` <h4>ما هو لوريم ايبسوم  Lorem ipsum</h4>
    لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
    
    وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.
    
    وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب "حول أقاصي الخير والشر"
    
     
    
     نموذج لوريم ايبسوم عربي -  فرانكوا اراب 
     
    
    "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
    
    أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
    
    أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
    
    أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
    
    نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
    
    كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
    
    "سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم
    
    دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري فيرأتاتيس ايت
    
    كياسي أرشيتيكتو بيتاي فيتاي ديكاتا سيونت أكسبليكابو. نيمو أنيم أبسام فوليوباتاتيم كيواي`;

    private _service: Insurance[] = [
        {
            image: 'assets/images/insurance-images/general-accident.jpg',
            title: 'تأمين الحوادث العامة',
            tag: 'general-accidents',
            text : this._text
        },
        {
            image: 'assets/images/insurance-images/medical-insurance.jpg',
            title: "التأمين الصحى",
            tag: 'medical-insurance',
            text : this._text
        },
        {
            image: 'assets/images/insurance-images/traveler-insurance.jpg',
            title: 'تأمين السفر',
            tag: 'travel-insurance',
            text : this._text
        },
        {
            image: 'assets/images/insurance-images/marien-insurance.jpg',
            title: 'تأمين بحرى',
            tag: 'marine-insurance',
            text : this._text
        },
        {
            image: 'assets/images/insurance-images/motor-insurance.png',
            title: 'تأمين السيارة',
            tag: 'motor-insurance',
            text : this._text
        },
        {
            image: 'assets/images/insurance-images/engineering-insurance.jpg',
            title: 'تأمين المهندسين',
            tag: 'engineering-insurance',
            text : this._text
        },
        {
            image: 'assets/images/insurance-images/property-insurance.jpg',
            title: 'تأمين المنزل',
            tag: 'property-insurance',
            text : this._text
        }
    ];
    page: string;
    result;
    constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute, private router: Router) {

    }

    get service() {return [...this._service]};

    getServiceByTag(tag) {
        if(this._service) 
            return { ...this._service.find(ele => ele.tag === tag) };
    }
}