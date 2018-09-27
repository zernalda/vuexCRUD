// regis mutation-type
import * as mutations from './mutation-types'

export default {
    showMember (context, member) {
        // commit untuk manggil si mutation dari mutations type
        // member -> parameter
        context.commit(mutations.SHOW_MEMBER, member)
    }
}