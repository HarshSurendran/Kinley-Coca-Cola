function showdiv(id){
    var styles= getComputedStyle(document.getElementById(id));
    var display= styles.getPropertyValue("display")
    //console.log(styles);
   // console.log(display)
   if(display=='none'){
    document.getElementById(id).style.cssText="display: block !important;"
   }else{
    document.getElementById(id).style.cssText="display: none !important;"
   }
}