const mutations = {
  NEWMESSAGE: (state, data) =>{
    state.message = data
  },
  SHOWMESSAGE: (state,data)=>{
    state.showMessage = data
  },
  CALLNOW: (state,data)=>{
    state.callNow = data
  }
}
export default mutations