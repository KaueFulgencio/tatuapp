import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ChatScreen = ({ navigation }) => {
  const handleProfilePress = () => {
    // Navegar para a página de visualização do perfil
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversas</Text>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="message" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleProfilePress}>
          <MaterialIcons name="person" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default ChatScreen;
