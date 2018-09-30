console.log('print.js');
import './test.css';
import './test2.css';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = 'hello world';
    element.classList.add('hello');
    element.classList.add('bg');
    return element;
}

document.body.appendChild(component());