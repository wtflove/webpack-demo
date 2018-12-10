import { component } from './index.js';
// import './styles.css';

export function printMe() {
    // var element = thisElement;
    // var colors = ['#ff0000', '#00ff00', '#0000ff'];
    // document.getElementsByTagName("BODY").background = colors[Math.floor(Math.random() * colors.length)];
    // console.log(document.getElementsByTagName("BODY").background);
    // console.log(thisElement.innerHTML);
    // document.body.removeChild(element);
    // element = component;
    // document.body.appendChild(element);
    let element = document.getElementsByTagName('INPUT').parentNode.childNodes[0];
    // element.value = "test";
    document.body.removeChild(element);
    console.log('Updating print.js accpet');
}

export function showBox(){
	// let element = document.getElementsByTagName('DIV')[0];
	// document.body.removeChild(element);
	let element = component();
	document.body.appendChild(element);
}