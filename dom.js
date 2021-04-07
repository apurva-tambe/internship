
 const randomInt= (min,max) =>
 Math.floor(Math.random() * (max -min +1)+min);
 const randomColor= () =>
 `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt0, 255})`

document.querySelector('.heading-primary-main').addEventListener('click',function(){
    this.style.backgroundColor="randomColor()";
    console.log('heading-primary-main')
 })
 
 document.querySelector('.heading-primary').addEventListener('click',function(){
    this.style.backgroundColor="randomColor()";
    console.log('heading-primary')
 })
 
 document.querySelector('.heading-text-box').addEventListener('click',function(){
    this.style.backgroundColor="randomColor()";
    console.log('heading-text-box')
 })
 
 document.querySelector('.header').addEventListener('click',function(){
    this.style.backgroundColor="randomColor()";
    console.log('header')
 })
 
 document.querySelector('.body').addEventListener('click',function(){
    this.style.backgroundColor="randomColor()";
    console.log('body')
 })

 //common function

 function eventHandler(e){
    this.style.backgroundColor="randomColor()";
    console.log(e.currentTarget)
    console.log(e.target)
 }
document.addEventListener('heading-primary-main').addEventListener('click',function(e){
    console.log(e.currentTarget)
    console.log(e.target)
})


 //document.querySelector('.heading-primary-main').addEventListener('click',eventHandler)
 document.querySelector('.heading-primary').addEventListener('click',eventHandler)
 document.querySelector('.header-text-box').addEventListener('click',eventHandler)
 document.querySelector('.header').addEventListener('click',eventHandler)
 document.querySelector('.body').addEventListener('click',eventHandler)

// Propogation
function eventHandler(e){
    e.stopPropagation()
    //this.style.backgroundColor="randomColor()";
    console.log(e.currentTarget)
    console.log(e.target)
 }

 //01-04-2021
 //Event Delegation:-we have to change only parent class element not child
// console.log(document.querySelectorAll('.spanHeading'));
//  document.querySelectorAll('.spanHeading').forEach(el=>{
  
//    el.addEventListener('click',e=>{
//        e.target.style.backgroundColor=e.target.getAttribute('col')
//     })
//  })

//OR
document.querySelector('heading-primary').addEventListener('click',
e=>{ if(e.target.classList.contains('spanHeading')) e.target.style.backgroundColor=e.target.getAttribute('col')
console.log(e.target)
})




//####### Regular Expretion ########
//  /j/ <= in this we can search NY word or letter in our statement but only first match is on our o/p  
//  /i/g  <= g is global i.e., all matches are in o/p its work like continoue search the letter 
// /i/i   <= i  is insenitive that means in upper case its only show the letter or word that we can assign , if we want to access upper case then use i
// \d    <= for accesing all digit/number in our sentense
// \D   <= access non digit 
// \w  <= 0-9 a-z A-Z 
 //console.log('internship class for js'.match(/class/))       //1]
 //console.log('internship class for js on monday In 7oclock'.match(/i/gi))  
 //console.log('internship class for js on monday 12/04/2021 In 7oclock'.match(/\d/gi))
 //console.log('101tresha102mukta'.match(/\D/gi)) 
// console.log('75 out 100'.match(/\s\d/gi))     // o/p=1
 //console.log('75 out 100'.match(/\s\D\D/gi))    // ou         
//  let str="+7(907)-123-23-45";
//  let str1='12,223,000'
//  console.log(str.match(/\d/g))    // all numb
// console.log(str.match(/\d/g).join(''))    // only no print karaych special charactre sodun
//console.log(str1.match(/\d/g).join('')) 
// another way to access only number withot special character
// console.log(str.replace(/\D/g,''))
// let regexp = /CS.\d/;
// console.log( "CS 4".match(regexp) );
// let regexp = /CS.4/;
// console.log( "CSS4".match(regexp) );
// let regexp = /CS..4/;
// console.log( "CSas4".match(regexp) );
// let regexp = /CS..4/;
// console.log( "CS  4".match(regexp) );
// let regexp = /CS...4/;
// console.log( "CSs 04".match(regexp) );
// let str3='test123'
// console.log(str3.match(/\d$/g));
// let str3=`1name1:sandy1,
//             2name:sandesh`;
// console.log(str3.match(/\^s\d$/gm));

//################## 27-03  #######################
// $$$$$$$$$ \d boundry  this is specified by boundry of any word $$$$$$$$$$$
// console.log("hello ,java!".match(/\bhello\b/));      // hello
// console.log("pphello ,java!".match(/\bhello\b/)) ;    // null
//console.log("hello ,java+".match(/\bjava\b/));       //yat jari word chya shevati speciaal char asel tri to access krto 
//console.log("hello ,javascript!".match(/\bjava\b/)); // but connect word madan jar 1ch word hava asel tr to ghet nahi 
// console.log("1 23 144 45".match(/\b23\b/));           // 23
//console.log("1 23 144 45".match(/\b\d\b/g)) ;              // 1
// console.log("1 23 144 45".match(/\b\d\d\b/g));          // 23 45
//console.log("kaddy 23 144 45".match(/\b\D\D\D\D\D\b/g));     // kaddy

//$$$$$$$$$$$$$$ escap character $$$$$$$$$$$$$$$$
      // if we want to print special char in o/p we can assign \^,$,*,@,+,.
//console.log("1 ^23 144 34".match(/\^\d\d/g));             //^23
//console.log("1 23 144 34$".match(/\d\d\$/g));             //34$
//console.log("1 23@ 14*4 34$".match(/\d\d\*/g));           //14*
//console.log("1 23@ 14*4 34$".match(/\d\d\@/g));            //23@
//console.log("1 23@ 14*4 34$".match(/\d\d[\@ \$ \*]/g)); // 23@ 14* 34$=>[]in this we can assign grp i.e., if we want to access all elt in at a time we can [\@ \$ \*] this 
//console.log("1 23@ 14*4 34$2 34.7".match(/\d\d[\@ \$ \* \.]\d/g));   // 14*4 34$2 34.7
//console.log("1sandy2.0 122.23".match(/\dsandy\d\./g));    //1sandy2.

//$$$$$$$$$$$$ Range $$$$$$$$$$$
   //we can specify the range like[0-9]  this is helpful for set range for email password  
//  console.log("2a3 223 asc".match(/[0-9][a-z][0-9]/));    // 2a3
//  console.log("2a3 223 asc 1w5%".match(/[0-9][a-z][0-9][.^$*%]/));   // 1w5%
// console.log("2a3 223 asc 1W5%".match(/[0-9][a-z][0-9][.^$*%]/));     //null bcz capital W
// console.log("2a3 223 asc 1W5%".match(/[0-9][a-z][0-9][.^$*%]/i));    //1W5%    bcz we can declare i-incensitive condition
// console.log("2a3 223 asc 1W5%".match(/[0-9][A-Z][0-9][.^$*%]/));      //1W5%   bcz we can apply condition [A-Z]
// console.log("rat mat".match(/[mr]at/g));   //rat mat    bcz we can apply condition[mr]at i.e m or t ya paiki koni asel tr chalel n end la at pahije  
// console.log("sandy candy".match(/[sc]andy/g));  // sandy candy
// console.log("sandy cndy".match(/[sc]ndy/g));  //cndy
// console.log("Exception 0xAF".match(/x[0-9A-Z][0-9A-Z]/g));   //xAF
// console.log("Exception 0x4F".match(/x[0-9A-Z][0-9A-Z]/g));  //x4F
// console.log("Exception 0xAFp".match(/0[0-9a-z][0-9A-Z][0-9a-zA-Z]/g));  //0xAF
// console.log("Exception 0xAFp".match(/[0-9a-z][0-9A-Z][0-9A-Z][0-9a-zA-Z]/g));  //xAFp
// varchya ex madhe aplyala tya condition khupada ghyavya lagtat so tya sathi apan { }ya madhe devu shakato ki kiti time aplyala havay te 
 //console.log("Exception 0xAFp".match(/[0-9a-zA-Z]{4}/g));  //Exce ptio 0xAF
// console.log("we are 100 times better and Powerful".match(/[a-z0-9]{8}/gi)); //Powerful
 //console.log("we are 4 100 times better and Powerful".match(/[a-z0-9]{1,3}\s/gi));   //we are 100 mes ter and 
// console.log("we are 100 times better and Powerful".match(/\s[a-z0-9]{1,3}\s/gi)); //are and
// console.log(" a We are 100 times better and Powerful".match(/\s[a-zA-Z0-9]{1,}\s/gi)); //a  are  times and 
//console.log("kashamir kulu manali 102sector".match(/\s[a-zA-Z0-9]{7,}/gi));  //102sector
//console.log('sandy01@gmil.com'.match(/[a-z0-9@.]{0,}/))  //sandy01@gmil.com
   //let regexp=/[-.*^()/+$@]/g;
//console.log('2^2 + 4 *3'.match(regexp))    // ^ + *
// console.log('(2^2) + (4 * 3)'.match(regexp))   //( ^ ) + ( * )
//console.log('(4-1*12/2)@answer is 2'.match(regexp)) //-*( ) /@

//console.log('I am not 100 years but 1234 years old'.match(/\d{3,}/g))  //100 1234
//console.log('I am not 100 years but 1234 years old'.match(/\w{3,}/g)) //not 100 years but 1234  years old 
//let str='+7(903)-123-45-67';
//let number=str.match(/\d{1,}/g);
//console.log(number);   //7 903 123 45 67
  // let number=str.match(/\d{3,}/g);
  // console.log(number);     //903 123
  
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // apan { }ya madhe range det hoto tr tyala opetion special character use karun pan ahe ..
        //1]   {1,}= +
        //2]   {0,}= *
        //3]   {0,1}= ?
// eg
// console.log('Lion is the national animal of India'.match(/\w*/g));   // Lion  is  the  national  animal  of  India   // ya madhe 0 la space include hoto 
// console.log('Lion is the national animal of India'.match(/\w+/g));   // Lion is the national animal of India
//console.log('   Lion is the national animal of India'.match(/\s\w?/g));  // L i t n a o I
//console.log('divya has 1 daugther'.match(/\s\d?\s/g));    //1
//let str='+7(903)-123-45-67';
//let number=str.match(/\d?/g);     //"", "7", "", "9", "0", "3", "", "", "1", "2", "3", "", "4", "5", "", "6", "7", ""   yat space n special character la pan to count karto as a 0 position
//let number=str.match(/\d\d?/g);     //"7", "90", "3", "12", "3", "45", "67"
//console.log(number); 
//let str = "Should I write color or colour?";
//console.log(str.match(/colou?r/g));     // "color", "colour"   yacha meaning asa hoto ki u mala 0time pahije kivha 1 mhnje nasala tri chalel kivha asla tari chalel
    //let str = "Should I write colour or colooooour?";
   //console.log(str.match(/colo+ur/g));   // "colour", "colooooour"
   //let str = "Should I write colou or colour?";
   //console.log(str.match(/colour*/g));    //"colou", "colour"
   // console.log('10000 1000 100 10 1  '.match(/\d+/g));  //"10000", "1000", "100", "10", "1"
   // console.log('10000 1000 100 10 1'.match(/\d*/g));   //"10000", "", "1000", "", "100", "", "10", "", "1", ""
   // console.log('10000 1000 100 10 1'.match(/\d?/g));  //"1", "0", "0", "0", "0", "", "1", "0", "0", "0", "", "1", "0", "0", "", "1", "0", "", "1", ""
// console.log('0 1 12.345 7890'.match(/\d+\.\d+/g));     // "12.345"
// console.log('0 1 12.345 7890'.match(/\d+\d+/g));       // "12", "345", "7890"
// console.log('0 16.6.6556.46666 12.345'.match(/\d+\.\d+\.\d?/g));    //"16.6.6"
// console.log('0 16.6.6556.46666 12.345'.match(/\d+\.\d+\.\d+/g));    //"16.6.6556"
// console.log('0 16.6.6556.46666 12.345'.match(/\d+\.\d+\.\d*\.\d/g));    //"16.6.6556.4"
// console.log('<h1>Hi!</h1>'.match(/<[/0-9a-z]*>/gi));    // "hi"  
//console.log('<h1>Hi!</h1>'.match(/<[/0-9a-z]*>/gi));          //"<h1>", "</h1>"
//console.log('<h1>Hi!</h1>'.match(/<[a-z][0-9a-z]*>/gi));

//$$$$$$$$$$$$$$$$$$$$$ Captiring group $$$$$$$$$$$$$$$$$$$$$$$$$$$
// console.log('Gogogo now'.match(/(go)*/gi));     //"Gogogo"
// console.log('Gogogo now'.match(/(go)*/gi));     //"Gogogo", "", "", "", "", ""

//$$$$$$$$$$$$$$$$$ Alteration OR|$$$$$$$$$$$$$$$$$$
//let regexp = /html|php|css|java(script)?/gi;
// // let str="first HTML appeared then CSS , then JavaScript";
// // console.log(str.match(regexp));      //"HTML", "CSS", "JavaScript"
// let regexp = /html|php|css|java(script)?/gi;
//  let str="first HTML appeared, then CSS , then JavaScript and JAVA";
//  console.log(str.match(regexp));        //"HTML", "CSS", "JavaScript","JAVA"

// let condition = /(\w+\.)+\w+/g;
// console.log("site.com my.site.com".match(condition));    //"site.com", "my.site.com"
// let condition = /(\w+\.)+\w+\.+/g;
// console.log("site.com my.site.com".match(condition));    // my.site.

// let condition= /[-.\w]+@([\w-]+\.)+[\w-]+/g;
// console.log('my@gmail.com @ his@gmail.com.uk'.match(condition));     //"my@gmail.com", "his@gmail.com.uk"

// let condition= /[-.\w]*@([\w-]+\.)+[\w-]+/g;
// console.log('my@g-mail.c-om @ his@gmail.com.uk'.match(condition));   //"my@g-mail.c-om", "his@gmail.com.uk"

//######################### DOM ###################################
//---------------Identification of Node and Element------------------
// console.log(document.documentElement); 
// console.log(document.head);
// console.log(document.body);

//----------------- Document -----------------------------
//1] querySelector()
// const test=document.querySelector('.header');
// console.log(test);
        // OR
  //console.log(document.querySelector('.header'));       //return single node
  
  //2] queySelectorAll()
//console.log(document.querySelectorAll('.paras'));     //return node list

//3] getElementById()
//console.log(document.getElementById("method"));          //return id node       

//4]getElementByClassName()
//console.log(document.getElementsByClassName('paras')); 

//5]getElementByTagName()
//console.log(document.getElementsByTagName('input'));

//--------------- run time change in Document -------------------- Error ahe Change nahi hot //
//2] queySelectorAll()
//console.log(document.querySelectorAll('.paras')); 
//5]getElementByTagName()
//console.log(document.getElementsByTagName('input'));

   
//------------Creating and Insert Element----------------------
// let newDiv = document.createElement('div');
// newDiv.classList.add('cookie-newElement');
// newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
//document.querySelector('header').append(newDiv);              //end chya Adhi
//document.querySelector('header').prepend(newDiv);             //Start jhalya jhalya
//document.querySelector('header').after(newDiv);               // header chya nantar
//document.querySelector('header').before(newDiv);              // header chya adhi
//document.querySelector('header').append(newDiv.cloneNode(true));    //make copy if elt all ready exist tari pn to copy karato 
//document.querySelector('header').append(newDiv.cloneNode(false));   //make copy if not exist


//------------ Delete Element ---------------------
//   let newDiv = document.createElement('div');
//  newDiv.classList.add('cookie-newElement');
//   newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
//  document.querySelector('header').prepend(newDiv); 

// document.querySelector('btn--close-cookie');
// document.addEventListener('click',function(){
// newDiv.parentElement.removeChild(newDiv);
//          //or method
      //newdiv.remove() ;  
//});


//-----------Styles and Attribute and  Classes---------------
//1] Style
// newDiv.style.backgroundColor='skyblue';                  //globaly clr deto ani ha clr html madhe mnhje browser vr element mhje html la pn disato
// newDiv.style.width='110%';
// newDiv.style.fontSize='35px'
// newDiv.style.paddingBottom='20px'

// console.log(getComputedStyle(newDiv).backgroundColor);             //console vr color disato   o/p=>rgb(135, 206, 235)
//  console.log(getComputedStyle(newDiv).width);                       //o/p=>1671.11px
// console.log(getComputedStyle(newDiv).fontSize);                    //o/p=>35px
// console.log(getComputedStyle(newDiv).paddingBottom);               //o/p=>20px

//suppose we want to increase or decrease hight or width at run time we can.. this clr shown in browser elt in html code
// let newDiv = document.createElement('div');
// newDiv.classList.add('cookie-newElement');
// newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
// document.querySelector('header').prepend(newDiv); 
// console.log(getComputedStyle(newDiv).height);
// console.log(getComputedStyle(newDiv).width);
// newDiv.style.width=Number.parseFloat(getComputedStyle(newDiv).width,10) + 30 + 'px';  // here 10 for decimal number mnje aplyla kashyat convert karayach tya sathi ahe te
// newDiv.style.height=Number.parseFloat(getComputedStyle(newDiv).height,10) + 40 + 'px';

//same things we can change the clr n all ... in this we can change the clr
// let newDiv = document.createElement('div');
// newDiv.classList.add('cookie-newElement');
// newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
// document.querySelector('header').prepend(newDiv);
// newDiv.style.backgroundColor='skyblue'; 
// // not woking
// console.log(document.documentElement.style.getPropertyValue('skyblue'));
// document.documentElement.style.setProperty('skyblue','red')


//---------------- Attribute -----------------   change alt name 
// const changeLogo=document.querySelector('.header_logo');
// console.log(changeLogo.alt);            // yat console vr print karatoy ki tya alt la name kay dil ahe
// console.log(changeLogo.className);      // yat tya alt chya class ch name display karato 
// changeLogo.alt='beautiful mini logo';   // change the name of alt 

         // change button type dynamicaly
// const btnTypeChange=document.querySelector('.btn-1');
// console.log(btnTypeChange.type);  
//  console.log(btnTypeChange.className);
//  btnTypeChange.type='Its a button'; 

//-------------------- Non-Standard -------------------------
//1]
// const changeName=document.querySelector('.header_logo');
// console.log(changeName.getAttribute('designer'));   
// changeName.setAttribute('designer','test')
// console.log(changeName.getAttribute('designer'));

// 2]
// const getPath=document.querySelector('.header_logo');
// console.log(getPath.getAttribute('src'));
// console.log(getPath.src);

// 3]
// const link=document.querySelector('class_name');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//------------------- Classes -----------------------------
// const changeName=document.querySelector('header');
// changeName.classList.add('test');           // class name add hot ... je tyala assign kel tyachya sobatach add hot
//changeName.classList.remove('test');           // jr remove() method madhe name aslel html madhe asel tr remove hot  // yat adhi html madhe test add karaych
// changeName.classList.toggle('test');        // jr name all ready exist asel tr delete karat n nasel tr add karato
// changeName.classList.contains('test');      // no idea what happend exactly



//31-03-2021  ------------ Event --------------
//1] Bubbling
//below statement madhe kay hot ki jevha mi india vr click karato tevha click 1 event fire krt te mhje change the backgroundColor red
// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor="red";
// })

//ata apan purn hierarchi vr event fire kela tr kay honar,ki jri apan last child vr click kel tari tya child chya adhicha child vr pn event occure honar then tyachya parent var n mg body var
// for eg====yat bubbling hot mnhje child kadan parent kade event through chi hirarchi jate like bottom to up
// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor="red";
//    console.log('.heading-primary--main');
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor="yellow";
//    console.log('.header_text-box');
// })
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor="green";
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor="lightgray";
//    console.log('body');
// })
// jari apan only header chya section vr click kel tr only header ani tyacha jo parent ahes mnhje body tyacha parent ahe so te 2ghech occure honar 



// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })

// OR
// yat only to target dakhvnar mhje apan jya vr click kel to ani jar tyala parent asel tr to pn but yat bubble phase madhe work hot adhi child ani mg parent
// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('.heading-primary--main');

// })
// document.querySelector('.header_text-box').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('.header_text-box');
// })
// document.querySelector('.header').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('body');
// })

//1] Bubble Pase      => bottom to top
//mhje adhi chid vr event fire hoto ani mg parent vr

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
// })
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
// })


//2] Capture Pase      =>top to bottom
//ya method madhe aplyala thir caption add karav lagat te mnhje " TRUE " jr true dil trch to event fire honar

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
// },true)
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
// },true)
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
// },true)
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
// },true)

// 2] suppose 1dya element vr mala event fire nahi karayacha tr mi tyala true denar nahi but jr tyachya ntr cha mhnje tyachya Child la jr event TRUE asel tr to fire honar

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
   
// },true)
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
// },true)

// 3] jr aplyala te propagation stop karaych asel tr tyasathi .stopPropagation() method use karayachi

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
//    e.stopPropagation();
// })
// document.querySelector('.header_text-box').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
   
// },true)
// document.querySelector('.header').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
//    e.stopPropagation();
// })
// document.querySelector('body').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
//    e.stopPropagation();
// })
