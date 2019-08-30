<template>

  <v-layout align-center justify-center row fill-height>
      <v-flex xs10 sm6 md4>
        <v-card>

          <v-toolbar dark color="secondary">
            <v-toolbar-title>
              S'inscrire
            </v-toolbar-title>
          </v-toolbar>
    
          <v-container>

            <v-form
                ref="form"
                lazy-validation
                @submit.prevent="sign"
            >
      
              <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                  prepend-icon="mdi-account"
              ></v-text-field>

              <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Mot de passe"
                
                  @click:append="show = !show"
                  prepend-icon="mdi-lock"
              ></v-text-field>

              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn
                  color="success"
                  type="submit"
                  >
                    S'inscrire
                  </v-btn>
              </v-card-actions>
          
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>

import { mapActions } from 'vuex';

export default {

  data: () => {

    return{
      show : false,
      email:'',
      password:''
    }
  },

  methods: {
    ...mapActions([
            'signUp',
    ]),
    sign(){
     const signUpdata = {'email': this.email,'password': this.password};
     this.signUp(signUpdata);
    }
    
  }
}
  
  
</script>

<style>

</style>