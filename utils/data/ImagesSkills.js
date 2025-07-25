import html from '../../public/skills/html.svg'
import css from '../../public/skills/css.svg'
import javascript from '../../public/skills/javascript.svg'
import react from '../../public/skills/react-svgrepo-com.svg' 
import firebase from '../../public/skills/firebase.svg'
import tailwind from '../../public/skills/tailwind.svg'
import git from '../../public/skills/git.svg'
import bootstrap from '../../public/skills/bootstrap.svg'
import next from '../../public/skills/nextjs-icon-svgrepo-com.svg'  
import redux from '../../public/skills/redux-svgrepo-com.svg'
import laravel from '../..//public/skills/laravel.svg'
import php from '../../public/skills/php.svg'
export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react js':
            return react;  
            case 'laravel':
                return laravel;
            case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'tailwind':
            return tailwind;
        case 'firebase':
            return firebase;
            case 'redux':
            return redux;
        case 'next js':  
            return next;
        case 'git':
            return git;
            case 'php':
                return php;
        default:
            break;
    }
}
