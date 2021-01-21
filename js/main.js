
var app = new Vue({
  el: '#root',
  data: {
    message: '',
    messages: [],
    users: [
      {
        img:'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
        nome: 'Carolina B',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }, {
        img: 'https://i.picsum.photos/id/129/4910/3252.jpg?hmac=g1KzJMIp75lG_scR48R1baC6TjhVmkEyygSyngKYRsg',
        nome: 'Valeria',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      },{
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Cristina',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }, {
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Antonio',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }, {
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Marco',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      },
      {
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Larisa',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }, {
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Jona',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }, {
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Jona',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }, {
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Jona',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }, {
        img: 'https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        nome: 'Jona',
        msg: 'Non poteva essere altrimenti',
        last: '18:36'
      }
    ]
  },
  methods: {
    sendMessage() {
      const message = this.message
      this.messages.push({
        text: message,
        author: 'client'
      })
      this.message = ''
      this.$axios.get(`https://www.cleverbot.com/getreply?key=CC8uqcCcSO3VsRFvp5-uW5Nxvow&input=${message}`)
        .then(res => {
          this.messages.push({
            text: res.data.output,
            author: 'server'
          })
        })
    }

    
  }
})