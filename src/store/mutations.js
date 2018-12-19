const CHANGE_SIDEBAR = 'CHANGE_SIDEBAR'
export default {
  [CHANGE_SIDEBAR] (state) {
    state.showSideBar = !state.showSideBar
  }
}
