import React from 'react';

class Phone extends React.Component {
    
    render() {
        const { phoneNumber } = this.props;
        return (
            <h4>The phone number is: {phoneNumber}</h4>
        )
    }
}

export default Phone;