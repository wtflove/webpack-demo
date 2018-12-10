import _ from 'lodash';
import { printMe, showBox } from './print.js';
import './styles.css';

export function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var ibox = document.createElement('input');

    element.innerHTML = _.join(['Hello', 'Webpack'], " ");

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe("Hello!");

    ibox.setAttribute("type", "text");

    element.appendChild(btn);
    element.appendChild(ibox);

    return element;
}

// document.body.appendChild(component());

var elementGlb = component(); //Store the element to re-render on print.js changes
document.body.appendChild(elementGlb);

// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(elementGlb);
//         elementGlb = component(); //Re-render the "component" to update the click handler
//         document.body.appendChild(elementGlb);
//     });
// }