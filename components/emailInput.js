import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from "prop-types";
import { TextField } from 'react-native-material-textfield';

class EmailInputText extends React.Component {
    getRef = (ref) => {
        if (this.props.getRef)
            this.props.getRef(ref)
    }

    render() {
        const { iconSize, iconColor, label, style } = this.props;

        return (
            <View style={style}>
                <TextField
                    {...this.props}
                    ref={this.getRef}
                    label={label} />
                <Icon style={styles.icon}
                    name={person}
                    size={iconSize}
                    color={iconColor}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 33,
        right: 0
    }
});

EmailInputText.defaultProps = {
    iconSize: 25,
    label: 'Email/Phone',
    iconColor: "#222222"
}

PasswordInputText.propTypes = {
    iconSize: PropTypes.number,
    label: PropTypes.string,
    iconColor: PropTypes.string
};

export default EmailInputText;