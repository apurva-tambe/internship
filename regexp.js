// ####### Regular Expretion ########
//  /j/ <= in this we can search NY word or letter in our statement but only first match is on our o/p  
//  /i/g  <= g is global i.e., all matches are in o/p its work like continoue search the letter 
// /i/i   <= i  is insenitive that means in upper case its only show the letter or word that we can assign , if we want to access upper case then use i
// \d    <= for accesing all digit/number in our sentense
// \D   <= access non digit 
// \w  <= 0-9 a-z A-Z 
// \s
console.log('internship class for js'.match(/class/))       //1]
// console.log('internship class for js on monday In 7oclock'.match(/i/gi))  
// console.log('internship class for js on monday 12/04/2021 In 7oclock'.match(/\d/gi))
// console.log('101tresha102mukta'.match(/\D/gi)) 
// console.log('75 out 100'.match(/\s\d/gi))     // o/p=1
// console.log('75 out 100'.match(/\s\D\D/gi))    // ou         
// let str="+7(907)-123-23-45";
// let str1='12,223,000'
// console.log(str.match(/\d/g))    // all numb
// console.log(str.match(/\d/g).join(''))    // only no print karaych special charactre sodun
// console.log(str1.match(/\d/g).join('')) 
//                                              //another way to access only number withot special character
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
//            2name:sandesh`;
// console.log(str3.match(/\^s\d$/gm));

// //27-03-21

// //Word boundary :\b

// console.log("Hello, Java!".match(/\b Java\b/));
// console.log("Hello, Javascript".match(/\b Java\b/));


// console.log("Hello, Java!".match(/\bHello\b/));
// console.log("Hello, Java!".match(/\b Java\b/));

// console.log("Hello, Java!".match(/\b Hell\b/));
// console.log("Hello, Java!".match(/\b Java!\b/));

// /        //first
// // const firstData =data.substr(0,data.indexOf('+'))
// // console.log(firstData)

// // //second
// //  data=data.replace(firstData,'')
// //  data=data.slice(1)
// //  //console.log(mData);
// //  const seondData =data.substr(0,data.indexOf('+'))
// // console.log(seondData)

// // //third
// // data=data.replace(seondData,'')
// //  data=data.slice(1)
// //  const thirdData =data.substr(0,data.indexOf('+'))
// // console.log(thirdData)


// // //fourth
// // data=data.replace(thirdData,'')
// //  data=data.slice(1)
// //  const fourthData =data.substr(0,data.indexOf('+'))
// // console.log(data)
// // console.log('Internship class for database'.match(/database/))
// // let str = "+7(903)-123-45-67"
// // console.log(str.match(/\d/g))
// // console.log(str.match(/\d/g).join(''))
// // console.log(str.replace(/\D/g,''))

// // let goodInp = "12:23";
// // let badInp = "12:23PM";

// // let regexp =/^\d\d:\d\d$/;
// // console.log(goodInp.match(regexp))
// // console.log(badInp.match(regexp))

// // console.log(regexp.test(goodInp)); //true
// // console.log(regexp.test(badInp)); //false

// // let strMult =`1st place:Winnie
// //             2nd place:Piglet
// //             3rd place:Eeyore`

// //             console.log(strMult.match(/\d/gm))
// //             console.log(strMult.match(/\d/g))


           
// // console.log( "Hello, Java!".match(/\b Java\b/));
// // console.log( "Hello, Javascript".match(/\b Java\b/));


// // console.log( "Hello, Java!".match(/\bHello\b/));
// // console.log( "Hello, Java!".match(/\b Java\b/));

// // console.log( "Hello, Java!".match(/\b Hell\b/));
// // console.log( "Hello, Java!".match(/\b Java!\b/));
