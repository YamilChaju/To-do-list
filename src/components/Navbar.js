import { Component } from "react";
import Logo from './Logo';

const styles = {
    navbar: {
        backgroundColor: '#EEE',
        height: '80px',
        position: 'fixed',
        padding: '0',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
        textAlign: 'center',
        top: '0',
        left: '0',
        width: '100%',
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <Logo content='To do list' />
            </nav>
        )
    }
}

export default Navbar;