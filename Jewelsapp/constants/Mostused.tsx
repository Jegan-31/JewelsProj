import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface CommonStyles {
    container: ViewStyle;
    text: TextStyle;
  }

  const commonStyles = StyleSheet.create<CommonStyles>({
    container: {
      padding: 20,
      backgroundColor: '#fcfcfc',
    },
    text: {
      fontSize: 16,
      color: '#182843',
    },
  });
  