<template>

  <v-layout align-center justify-center row fill-height>
    <v-flex xs10 sm6 md4>
      <v-card>

        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Se connecter
          </v-toolbar-title>
        </v-toolbar>
    
        <v-container>

          <v-form
            ref="form"
            lazy-validation
            @submit.prevent="loginSubmit"
          >
      
            <v-text-field
              v-model="email"
              label="E-mail"
              required
              prepend-icon="mdi-account"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :type="show ? 'text' : 'password'"
              label="Mot de passe"
              prepend-icon="mdi-lock"
            ></v-text-field>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn
                color="success"
                type="submit"
              >
                Connexion
              </v-btn>
            </v-card-actions>
              
          
          </v-form>
        </v-container>
      </v-card>

      <router-link to="/signup">
        <v-btn color="warning">S'inscrire</v-btn>
      </router-link>

    </v-flex>
  </v-layout>
  
</template>

<script>

import { mapState, mapActions } from 'vuex';
import router from '../router'

export default {
  data () {
    return{
      show:'',
      email:'',
      password:''
    }
  },
  computed: {
    ...mapState([
      'loggingIn',
      'loginError'
    ])
  },
  methods: {
    ...mapActions([
      'doLogin'
    ]),
    loginSubmit() {
      this.doLogin({
        'email': this.email,
        'password': this.password
      });
    },
    sign(){
      router.push("signup") 
    }
  },
}
</script>

<style>

</style>