import React, {useState} from 'react';
// import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import "../styles/_dropdowns.scss";

fontawesome.library.add(faChevronUp);
const Dropdowns = (title) => {
    // const FontAwesome = require('react-fontawesome');
    const [checked, setChecked] = useState(false)
    const content = () => {
        checked ? setChecked(false) : setChecked(true);
        let headers = document.querySelectorAll('.dropdown .header');
        headers.forEach(header => {
            if(header.querySelector('div p').innerHTML == title.title) {
                let chevron = header.querySelector('div svg');
                if(chevron.className.animVal == "svg-inline--fa fa-chevron-up animate") {
                    chevron.classList.remove('animate')
                }else {
                    chevron.classList.add('animate')
                }
            }
        })
    }

    let items;
    if(Array.isArray(title.content)) {
        let lis = [];
        for(let item of title.content) {
            lis.push(
                <li key={item}>
                    {item}
                </li>
            )
        }
        items = 
            <div>
                <ul className="content-dropdown">
                    {lis}
                </ul>
            </div>

    }else {
        items =  
            <div>
                <p className="content-dropdown">{title.content}</p>
            </div>
    }

    return (
        <div key={title.title} className="dropdown">
            <div onClick={() => content()} className="header">
                <div>
                    <p>{title.title}</p>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                </div>
            </div>
            {checked &&
                <div className="bloc-content">
                    {items}
                </div>
            }
        </div>
    )
}
export default Dropdowns
