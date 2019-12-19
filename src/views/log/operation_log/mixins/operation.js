export default {
  methods: {
    // 点击搜索
    search() {
      this.selectType
        ? this.$refs.pagination.toFirstPage()
        : this.$warnMsg("请选择搜索类型");
    },
    // 回车搜索
    searchEnter(e) {
      e.keyCode === 13 &&
        (this.selectType
          ? this.$refs.pagination.toFirstPage()
          : this.$warnMsg("请选择搜索类型"));
    }
  }
}