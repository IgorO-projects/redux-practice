import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

const AppBar = () => {
    return(
        <header className={styles.appbar__header}>
            <ul className={styles.appbar__list}>
                <li>
                    <NavLink 
                    exact 
                    to="/" 
                    className={styles.appbar__link} 
                    activeClassName={styles.appbar__link_active}>
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/counter" 
                    className={styles.appbar__link}
                    activeClassName={styles.appbar__link_active}>
                        Counter
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default AppBar;