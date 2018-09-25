// perantara untuk mengambil data dari state
// boleh juga untuk memberikan fungsi

export default {
    // parameter 'state'
    members: state => {
    //     return state.members

    // contoh sorting berdasarkan jumlah goal
        return state.members.sort((a,b) => {
            return a['goal'] < b['goal']
        })
    }
}