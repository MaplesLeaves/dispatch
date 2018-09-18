const mutations = {
  NEWMESSAGE: (state, data) =>{
    state.message = data
  },
  SHOWMESSAGE: (state,data)=>{
    state.showMessage = data
  },
  CALLNOW: (state,data)=>{
    state.callNow = data
  },
  ISSERCH: (state,data)=>{
    state.isSerch = data
  },
  CLOSEUSER: (state,data)=>{
    state.closeUser = data
  },
  
}
export default mutations