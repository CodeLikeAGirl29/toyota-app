import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TOYOTA</Text>
      <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
    </View>
  );
};

export default Header;
