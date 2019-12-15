export default {
  methods: {
    // 删除岗位
    deleteStation(item) {
      this.$showMsgBox({ msg: `是否删除${item.name}岗位?` }).then(() => {
        this.$http_json({
          url: `/api/job/del/${item.id}`,
          method: "post"
        }).then(() => {
          this.$successMsg("删除成功");
          this.getStationList();
        });
      });
    },
    // 显示添加岗位窗口
    showAddStation() {
      this.isAdd = true;
      this.$refs.form.dialog = true;
      this.$refs.form.resetForm();
    },
    // 显示编辑岗位窗口
    showEditStation() {
      this.isAdd = false;
      this.$refs.form.dialog = true;
    },
    // 编辑岗位
    editStationItem(item) {
      const stationForm = this.$refs.form.stationForm;
      this.$refs.form.stationId = item.id;
      stationForm.name = item.name;
      stationForm.sort = item.sort;
      stationForm.enabled = item.enabled.toString();
      stationForm.dept.id = item.dept.id;
      this.showEditStation();
    },
    // 点击搜索
    search(val) {
      this.nowPage = 1;
      this.getStationList();
    },
    // 回车搜索
    searchEnter(e) {
      this.nowPage = 1;
      e.keyCode === 13 && this.getStationList();
    },
  }
}