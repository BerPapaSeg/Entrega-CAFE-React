import { useNavigate } from 'react-router-dom';

export default function Footer () {
    const navigate = useNavigate();
    
    return (
        <div className='footer'>
            <p>
                Developed by <span>~BerPapaSeg</span> 
            </p>
            <p>@ITA-Júnior - React Training Program</p>
            <a href='https://github.com/BerPapaSeg'>Meu git</a>
        </div>
    )
}