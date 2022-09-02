import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '100%',
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;