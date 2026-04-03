import {Link} from 'react-router-dom';
import "./head.css";

function Head(){
    return(
        <div className="head">
            <Link to="/" className="news">Новости</Link>&nbsp;
            <Link to="/contacts" className="contacts">Контакты</Link> &nbsp;
            <Link to="/about" className="about">О проекте</Link>
        </div>
    );
}
export default Head;