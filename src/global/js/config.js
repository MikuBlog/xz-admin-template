import { isMobile, isIpad } from '@/utils/agent'
// 布尔类型的值改为false则表示不允许设置
export default {
  // 登录标题
  loginHeader: "XZ-Admin",
  // 自定义登录界面按钮
  loginSetting: true,
  // 合作网站账号登录框
  otherLoginMethods: true,
  // 自动登录框
  isAutoLogin: true,
  // 菜单颜色
  menuStyle: {
    light: {
      textColor: '#444',
      backgroundColor: '#fefefe',
      subMenuItemBackgroundColor: '#f7f7f7'
    },
    dark: {
      textColor: '#becad8',
      backgroundColor: '#2f4055',
      subMenuItemBackgroundColor: '#1e2c3c'
    }
  },
  // 系统样式设置
  diy: {
    /* 系统布局模块 */
    layout: true,
    // 系统布局大小
    layoutSize: true,
    // 面包屑
    breadcrumb: true,
    // 标签栏
    tagViews: true,
    // LOGO
    logo: true,
    // 页脚
    footer: true
  },
  // 全屏icon
  fullScreen: true,
  // 分页组件
  paginationLayout: `${
    // 是否为ipad
    isIpad()
      ? 'total, sizes, prev, pager, next'
      // 是否为移动设备
      : isMobile()
        ? 'prev, pager, next'
        // pc设备
        : 'total, sizes, prev, pager, next, jumper'
    }`,
  // 分页大小
  paginationSize: isMobile() && !isIpad(),
  // 图片预览尺寸
  previewImageSize: `${
    isMobile() && !isIpad()
      ? '90%'
      : '500px'
    }`
}