import * as mutations from './mutation-types'


export default {
    [mutations.SHOW_MEMBER] (state, member) {
        state.singleView = true,
        state.active_member = member
    },
    [mutations.SHOW_MEMBERS] (state) {
        state.singleView = false,
        state.active_member = null
    },
    [mutations.ADD_MEMBER] (state) {
        // karna butuh data dari singleView
        state.singleView = true,

        state.active_member = {
            // set data ketika masuk add member
            id: Date.now(),
            name: '',
            goal: '',
            img:''
        }
        state.members.push(state.active_member) 
    },
    [mutations.REMOVE_MEMBER] (state, id) {
        state.members = state.members.filter((member) => {
            return member.id !== id
        })
    },
}