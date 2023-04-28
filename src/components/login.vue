<template>
    <v-container class="Registerform">
      <!-- <h1>RegisterForm</h1> -->
      <v-row>
        <v-col cols="4">
          <img src="../assets/images/back.png" />
        </v-col>
        <v-col cols="6">
          <v-form @submit.prevent>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  v-model="form.email"
                  :rules="rules.emailrules"
                  label="Email"
                  variant="solo"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  v-model="form.password"
                  :rules="rules.passwordrules"
                  label="Password"
                  variant="solo"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  v-model="form.cpassword"
                  :rules="rules.cpasswordrules"
                  label="Confirmpassword"
                  variant="solo"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-btn type="submit" block class="mt-2">Login</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
  import { reactive } from "vue";
  export default {
    setup() {
      const form = reactive({
        email: "",
        password: "",
        cpassword: "",
      });
  
      const rules = reactive({
        emailrules: [
          (value) => {
            console.log(value);
            if (
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/.test(
                value
              )
            )
              return true;
  
            return "Email Not Valid..";
          },
        ],
        passwordrules: [
          (value) => {
            if (
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
                value
              )
            )
              return true;
  
            return "Password Not Valid..";
          },
        ],
        cpasswordrules: [
          (value) => {
            if (value !== form.password) return "Password not matched";
            return "";
          },
        ],
      });
  
      return {
        form,
        rules,
      };
    },
  };
  </script>
  <style src="../assets/css/style.css"></style>
  