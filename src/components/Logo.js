import { Component } from "react";

const styles = {
    logo: {
        color: '#777',
        fontWeight: '600',
        fontSize: '3rem',
        fontStyle: 'oblique',
        lineHeight: '1.5',
        wordSpacing: '5px',
        textShadow: '2px 1px 2px rgba(0, 0, 0, 0.3)',
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                {this.props.content}
            </div>
        )
    }
}

export default Logo;