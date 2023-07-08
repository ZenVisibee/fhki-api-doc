const emailType = {
  type: String,
  format: "email"
}
const googleType = {
  type: String,
  format: "[google-recaptcha]"
}

const req_post_account = {
  coreloy_salutation1: {
    type: Number,
  },
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  coreloy_chinesesalutation: {
    type: Number,
  },
  new_lastnamechinese: {
    type: String,
  },
  new_firstnamechinese: {
    type: String,
  },
  telephone1: {
    type: String,
    required: true,
  },
  emailaddress1: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  new_positionchinese: {
    type: String,
  },
  new_websitecompanyname: {
    type: String,
    required: true,
  },
  new_websitecompanynamechinese: {
    type: String,
  },
  new_websiteaccountstatus: {
    type: Number,
    default: 100000001,
  },
  new_websitepassword: {
    type: String,
    required: true,
  },
  new_websiteaccountcreationdate: {
    type: Date,
    default: Date.now,
  },
  coreloy_consent: {
    type: Boolean,
  },
};

const req_post_account_activate = {
  token: {
    type: String,
    required: true
  }
}

const req_post_account_session = {
  form: {
    username: emailType,
    password: {
      type: String
    },
    consent: {
      type: Boolean
    }
  },
  google: googleType
}

const req_delete_account_session = {
  "[cookie-in-headers]": {
    personalization: "[cookie value]"
  }
}

const req_post_reset_password_send_email = {
  email: emailType,
  google: googleType
}

const req_post_reset_password_confirm = {
  token: {
    type: String
  },
  password: {
    type: String
  },
  reEnterPassword: {
    type: String
  }
}

new Vue({
  el: '#app',
  data: {
    resources: [
      "POST - /account",
      "POST - /account/activate",
      "POST - /account/session",
      "DELETE - /account/session",
      "POST - /account/reset-password/send-email",
      "POST - /account/reset-password/confirm"
    ],
    schemas: [
      req_post_account,
      req_post_account_activate,
      req_post_account_session,
      req_delete_account_session,
      req_post_reset_password_send_email,
      req_post_reset_password_confirm
    ],
    currentIndex: 0
  },
  methods: {
    handleClick(index) {
      // Handle the click event here
      this.currentIndex = index;
    }
  }
});