// regis mutation-type
import * as mutations from './mutation-types'

export default {
    // parameter apa yang dibutuhkan
    showMember (context, member) {
        // commit untuk manggil si mutation dari mutations type
        // member -> parameter
        context.commit(mutations.SHOW_MEMBER, member)
    },

    // untuk tampilkan semua
    showMembers (context) {
        // commit untuk manggil si mutation dari mutations type
        // member -> parameter
        context.commit(mutations.SHOW_MEMBERS)
    },
    // untuk menambahkan member
    addMember (context, member) {
        // commit untuk manggil si mutation dari mutations type
        // member -> parameter
        context.commit(mutations.ADD_MEMBER)
    },
    // untuk delete member
    removeMember (context, id) {
        // commit untuk manggil si mutation dari mutations type
        // member -> parameter
        context.commit(mutations.REMOVE_MEMBER, id)
        // mau manggil metode showMembers
        // dispatch - kalo mau pake methods di action buka mutation
        context.dispatch('showMembers')

    },


}