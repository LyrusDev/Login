import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, Image, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {
  const mensaje = () => {
    Alert.alert('Mensaje', 'Bienvenido al sistema!');
  }

  return (
    <ImageBackground style={styles.container} source={require('./assets/img/fondo.jpg')}>

      <Text style={styles.txtTitulo}>Log In</Text>

      <View style={styles.containerForm}>
        <View style={styles.containerForms}>
          <Text style={styles.txtForm}>Correo:</Text>
          <TextInput style={styles.inpForm}
            placeholder='Ingrese su correo'
            placeholderTextColor={'#fff'}
            textContentType='emailAddress'
          />
        </View>

        <View style={styles.containerForms}>
          <Text style={styles.txtForm}>Contraseña:</Text>
          <TextInput style={styles.inpForm}
            placeholder='Ingrese su contraseña'
            placeholderTextColor={'#fff'}
            textContentType='newPassword'
          />
        </View>

        <View style={styles.containerForms}>
          <TouchableOpacity style={styles.btn} onPress={mensaje}>
            <Text style={styles.txtBtn}>Ingresar</Text>
            <Image
              source={require('./assets/img/send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  txtTitulo: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 25
  },

  containerForm: {
    flexDirection: 'column',
    gap: 20
  },

  containerForms: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtForm: {
    color: '#fff',
    width: '20%',
    marginRight: 10
  },

  inpForm: {
    borderColor: '#04fef5',
    borderWidth: 1,
    borderRadius: 7,
    color: '#fff',
    height: 36,
    width: '56%',
    paddingLeft: 10
  },

  btn: {
    backgroundColor: '#04fef5',
    borderRadius: 7,
    height: 44,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5
  },

  txtBtn: {
    fontSize: 16
  }

});
