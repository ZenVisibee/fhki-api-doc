const emailType = {
  type: String,
  format: "email",
};
const googleType = {
  type: String,
  format: "[google-recaptcha]",
};
const cookieType = {
  "[cookie-in-headers]":
    "personalization=<token>; Path=<path>(optional); Expires=<date>(optional); etc...",
};

const req_post_account = {
  form: {
    contactid: {
      type: String,
      default: "uuid.v1"
    },
    coreloy_salutation1: {
      type: Number,
    },
    coreloy_chinesesalutation: {
      type: Number,
    },
    coreloy_consent: {
      type: Boolean,
    },
    emailaddress1: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    jobtitle: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    new_firstnamechinese: {
      type: String,
    },
    new_lastnamechinese: {
      type: String,
    },
    new_positionchinese: {
      type: String,
    },
    new_websiteaccountcreationdate: {
      type: Date,
      default: "Date.now",
    },
    new_websiteaccountstatus: {
      type: Number,
      default: 100000001,
    },
    new_websitecompanyname: {
      type: String,
      required: true,
    },
    new_websitecompanynamechinese: {
      type: String,
    },
    new_websitepassword: {
      type: String,
      required: true,
    },
    telephone1: {
      type: String,
      required: true,
    },
    statecode: {
      type: Number,
      default: 0,
    },
    address1_line1: {
      type: String
    },
    address1_line2: {
      type: String
    },
    new_districtlookup: {
      type: String,
    },
    new_arealookup: {
      type: String,
    },
    coreloy_company1: {
      type: String,
    }
  },
  google: googleType,
};
const req_post_account_activate = {
  token: {
    type: String,
  },
};

const req_post_account_session = {
  form: {
    username: emailType,
    password: {
      type: String,
    },
    consent: {
      type: Boolean,
    },
  },
  google: googleType,
};

const req_delete_account_session = cookieType;

const req_post_reset_password_send_email = {
  email: emailType,
  google: googleType,
};

const req_post_reset_password_confirm = {
  token: {
    type: String,
  },
  password: {
    type: String,
  },
  reEnterPassword: {
    type: String,
  },
};

const req_get_accout_my = cookieType;
const req_patch_accout_my = {
  form: {
    isFhkiMember: {
      type: Boolean,
    },
    membershipNo: {
      type: String,
    },
    companyName: {
      en: {
        type: String,
      },
      tc: {
        type: String,
      },
    },
    name: {
      en: {
        familyName: {
          type: String,
        },
        givenName: {
          type: String,
        },
        title: {
          type: String,
        },
      },
      tc: {
        familyName: {
          type: String,
        },
        givenName: {
          type: String,
        },
        title: {
          type: String,
        },
      },
    },
    address: {
      en: [
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
      ],
    },
    jobTitle: {
      en: {
        type: String,
      },
      tc: {
        type: String,
      },
    },
    tel: {
      type: String,
    },
    consent: {
      type: Boolean,
    },
  },
  google: googleType,
};

const req_get_account_my_enrolment_form = cookieType;
const req_get_account_my_attendance = cookieType;

const { ref } = Vue;

new Vue({
  el: "#app",
  data: {
    resources: [
      "POST - /account",
      "POST - /account/activate",
      "POST - /account/session",
      "DELETE - /account/session",
      "POST - /account/reset-password/send-email",
      "POST - /account/reset-password/confirm",
      "GET - /account/my",
      "PATCH - /account/my",
      "GET - /accout/my/enrolment-form",
      "GET - /account/my/attendance"
    ],
    schemas: [
      req_post_account,
      req_post_account_activate,
      req_post_account_session,
      req_delete_account_session,
      req_post_reset_password_send_email,
      req_post_reset_password_confirm,
      req_get_accout_my,
      req_patch_accout_my,
      req_get_account_my_enrolment_form,
      req_get_account_my_attendance
    ],
    currentIndex: 0,
    sectionMaxWidth: 0,
  },
  methods: {
    handleClick(index) {
      // Handle the click event here
      this.currentIndex = index;
    },
    handleSectionMaxWidth() {
      const aside = this.$refs.aside;
      this.sectionMaxWidth = window.innerWidth - aside.getBoundingClientRect().width;
    }
  },
  mounted() {
    this.handleSectionMaxWidth();
    window.addEventListener('resize', this.handleSectionMaxWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleSectionMaxWidth);
  }
});
