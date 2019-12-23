export default {
  created() {
    document.title = "登录";
    this.isAutoLogin();
    this.getCode()
  },
  mounted() {
    this.getBoxVal();
  },
  methods: {
    getCode() {
      this.$http({
        url: `${baseUrl}/auth/vCode`,
        method: "get"
      }).then(result => {
        const data = JSON.parse(result.request.response)
        this.codeUrl = `data:image/jpeg;base64,${data.img}`
      })
    }
  }
}