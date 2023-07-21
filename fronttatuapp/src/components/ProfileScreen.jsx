import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      {/* Informações do perfil */}
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Foto: </Text>
        {/* Incluir a exibição da foto do usuário aqui */}

        <Text style={styles.label}>Nome: </Text>
        <Text>Nome do Usuário</Text>

        <Text style={styles.label}>Email: </Text>
        <Text>email@example.com</Text>

        <Text style={styles.label}>Hora de Acesso: </Text>
        <Text>00:00:00</Text>
      </View>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
          <MaterialIcons name="message" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
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
  profileInfo: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
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

export default ProfileScreen;
