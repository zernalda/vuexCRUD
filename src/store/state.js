// export default untuk nantinya dipanggil oleh kelas lain
export default{
    // sumber data
    members : [
        {
            id: 1,
            name: 'Ryan Giggs',
            goal: 10,
            img: 'giggs.jpg'
        },
        {
            id: 2,
            name: 'David Beckham',
            goal: 8,
            img: 'becks.png'
        },
        {
            id: 3,
            name: 'Van Nistelrooy',
            goal: 20,
            img: 'rudje.jpg'
        },
        {
            id: 4,
            name: 'Scholes',
            goal: 12,
            img: 'scholes.jpg'
        },
        {
            id: 5,
            name: 'Roy Keane',
            goal: 3,
            img: 'keane.jpg'
        },
    ],
    // state baru
    singleView: false,

    //nilai awal null
    active_member: null,
}