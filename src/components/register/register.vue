<template>
  <v-container class="Registerform">
    <v-row>
      <v-col cols="4" class="Registerformcol1">
        <img src="../../assets/images/back.png" class="responsive" />
      </v-col>
      <v-col cols="4" class="Registerformcol2">
        <v-form @submit.prevent >
          <div class="Registerformtext">Signup</div>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="form.firstname"
                :rules="rules.firstname"
                label="Firstname"
                color="primary"
                variant="solo"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.lastname"
                :rules="rules.lastname"
                label="Lastname"
                variant="solo"
                color="primary"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            v-model="form.email"
            :rules="rules.emailrules"
            label="Email"
            placeholder="johndoe@gmail.com"
            color="primary"
            variant="solo"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            :rules="rules.passwordrules"
            :append-inner-icon="showpswd ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showpswd = !showpswd"
            :type="showpswd ? 'text' : 'password'"
            label="Password"
            color="primary"
            variant="solo"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.cpassword"
            :rules="rules.cpasswordrules"
            :append-inner-icon="showpswd1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showpswd1 = !showpswd1"
            :type="showpswd1 ? 'text' : 'password'"
            label="Confirmpassword"
            variant="solo"
            color="primary"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.phonenumber"
            :rules="rules.phonenumberrules"
            label="Phonenumber"
            variant="solo"
            color="primary"
            required
          ></v-text-field>

          <v-btn type="submit" class="submitbtn" @click="submit">
            Signup
          </v-btn>
          <p style="margin: 5% 0 0 0">
            Already have an account? <router-link to="/">SignIn</router-link>
          </p>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { reactive, ref } from "vue";
import { regex } from "../../regularExps/regex";
export default {
  setup() {
    let showpswd = ref(false);
    let showpswd1 = ref(false);
    const form = reactive({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
      phonenumber: "",
    });

    const rules = reactive({
      firstname: [
        (value) => {
          if (regex.name.test(value)) return true;
          return "Required";
        },
      ],
      lastname: [
        (value) => {
          if (regex.name.test(value)) return true;
          return "Required";
        },
      ],
      emailrules: [
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
      passwordrules: [
        (value) => {
          if (
            regex.password.test(
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
      phonenumberrules: [
        (value) => {
          if (regex.phonenumber.test(value)) return true;
          return "Phone Number Invalid";
        },
      ],
    });
    let initialState = reactive({...form})
    function submit(){
      Object.assign(form,initialState);
      alert("submited")
    }

    return {
      form,
      rules,
      showpswd,
      showpswd1,
      submit,
    };
  },
};
</script>
<style src="../../assets/css/css/register.css"></style>
