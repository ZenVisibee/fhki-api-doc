new Vue({
  el: '#app',
  data: {
    resources: [
      "POST - /account",
    ],
    schemas: [
      {
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
      },
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