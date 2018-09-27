import * as mutations from './mutation-types'


export default {
    [mutations.SHOW_MEMBER] (state, member) {
        state.singleView = true,
        state.active_member = member
    }
}