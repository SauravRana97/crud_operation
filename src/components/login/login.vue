<template>
  <v-container>
    <v-form @submit.prevent>
      <v-row class="loginform">
        <v-col cols="4" class="logincol1" >
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
            hint="Enter your Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            :rules="rules.password"
            :append-inner-icon="showpswd ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showpswd ? 'text' : 'password'"
            @click:append-inner="showpswd = !showpswd"
            label="Password"
            :color="color"
            variant="solo"
            hint="Enter your password "
            required
          ></v-text-field>
          <v-btn type="submit" class="submitbtn" color="red" variant="outlined" @click="submit">
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { reactive, ref } from "vue";
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
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/.test(
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
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
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
