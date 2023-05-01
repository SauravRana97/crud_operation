<template>
  <v-container class="Registerform">
    <v-row>
      <v-col cols="4" class="Registerformcol1">
        <img src="../../assets/images/back.png" class="responsive" />
      </v-col>
      <v-col cols="4" class="Registerformcol2">
        <v-form @submit.prevent>
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
            color="primary"
            variant="solo"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            :rules="rules.passwordrules"
            label="Password"
            color="primary"
            variant="solo"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.cpassword"
            :rules="rules.cpasswordrules"
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

          <v-btn type="submit" block class="mt-2">Submit</v-btn>
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
          if (/^[A-Za-z]+$/.test(value)) return true;
          return "Invalid FirstName";
        },
      ],
      lastname: [
        (value) => {
          if (/^[A-Za-z]+$/.test(value)) return true;
          return "Invalid lastname";
        },
      ],
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
      phonenumberrules: [
        (value) => {
          if (/^[0-9]{10}$/.test(value)) return true;
          return "Phone Number Invalid";
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
<style src="../../assets/css/css/register.css"></style>
