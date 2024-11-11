let palabra= `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quidem 
debitis incidunt placeat ullam! Optio praesentium debitis in deleniti error, cum et dolorum 
impedit harum aut enim! Hic repellat harum sed quos autem eligendi soluta voluptates reprehenderit,
 quasi cum a facilis culpa, eveniet at, obcaecati adipisci. Quisquam possimus animi est?`;
// let exprecion =/at/gi;
// let exprecion =/at{1,2}/gi;
// let exprecion =/[\d]/gi;
let exprecion =/[\D]/gi;
// let exprecion =/[a-zA-Z]/gi;
// let exprecion =/[0,9]/gi;

console.log(exprecion.test(palabra));

console.clear();


let correo ="jose_lpaezñ@soy.sena.edu.co";
let exp=/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+(\.[a-zA-Z]{2,4}){1,2}/;
console.log(exprecion.test(correo));
//expreciones regulares

let show =function(){ };

(function(){ })(
    console.log("anonima")
    
);
(function(d,w,c){
    console.log(d);

})(document,window,console);