<template>
  <v-container>
    <v-form @submit.prevent>
      <v-row class="loginform">
        <v-col cols="5" class="logincol1" >
          <div class="ma-4">
            <img src="../../assets/images/loginbg.jpg" class="responsive" />
          </div>
        </v-col>
        <v-col cols="3" class="logincol2">
          <div class="loginformtext">Sign In</div>
          <v-text-field
            v-model="form.email"
            :rules="rules.email"
            label="Email"
            type="email"
            :color="color"
            variant="solo"
            placeholder="johndoe@gmail.com"
            hint="Enter your Email"
            prepend-inner-icon="mdi-email"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            :rules="rules.password"
            :append-inner-icon="showpswd ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showpswd ? 'text' : 'password'"
            @click:append-inner="showpswd = !showpswd"
            label="Password"
            prepend-inner-icon="mdi-lock"
            :color="color"
            variant="solo"
            hint="Enter your password "
            required
          ></v-text-field>
          <v-btn type="submit" class="submitbtn"  @click="submit">
            Login
          </v-btn>
          <p style="margin: 10% 0 0 0;">
            Do not have an account? <router-link to="/register">SignUP</router-link>
          </p>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { reactive, ref } from "vue";
import { regex } from "../../regularExps/regex"
export default {
  name: "log-in",
  setup() {
    const botright_vite = new URL(
      "../../assets/images/back.png",
      import.meta.url
    ).href;
    let showpswd = ref(false);
    let color = ref("primary");
    let form = reactive({
      email: "",
      password: "",
    });
    let rules = reactive({
      email: [
        (value) => {
          console.log(value);
          if (
            regex.email.test(
              value
            )
          )
            return true;
          return "Email Not Valid..";
        },
      ],
      password: [
        (value) => {
          if (
            regex.password.test(
              value
            )
          )
            return true;
          else {
            return "Password Not Valid..";
          }
        },
      ],
    });

    return {
      form,
      rules,
      color,
      showpswd,
      botright_vite,
    };
  },
};
</script>
<style src="../../assets/css/css/login.css"></style>
