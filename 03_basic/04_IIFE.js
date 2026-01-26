//IIFE++++++++Immediate Invoke Function Expression++++++++++
//global scope ko pollution bata problem hunxa kailey kai,
// tyo global scope ko variable ko pollution lai hatauna ko lagi
//IIFE use garinxa

(function user(){
    console.log(`yo function vitra ko print hudeixa`);
    
})();//semi-colon to end this code

//simply ()() use garne

//same IIFE aarko next code ma pani use gareko xa vanney tyo mathi ko
//bata terminate vayera aauna ko lagi code ko last ma semi-colon (;) dinu parxa

(function wesite(){
    console.log(`yo tallo function vitra ko print vairako xa`);
    
})();

//now using with arrow
((name)=>{
    console.log(`my name is ${name}.`);
    
})('Arati')