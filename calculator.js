function numberDisplay(ogoo){
	displayNumber.value += ogoo;
}
function clearValue(){
	displayNumber.value ="" ;
}
function submitValue(){
	displayNumber.value= eval(displayNumber.value);
}