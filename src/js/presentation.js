import { Card, Button, InfoSection, FormGroupInput, Checkbox, Collapse, CollapseItem, Slider, Modal } from '@/components';
import { Carousel, CarouselItem, Tooltip } from 'element-ui'
import axios from 'axios';
import Router from "vue-router";


export default {
  name: 'ecommerce-page',
  bodyClass: 'ecommerce-page',
  components: {
    Card,
    Modal,
    InfoSection,
    Collapse,
    CollapseItem,
    Slider,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Tooltip.name]: Tooltip,
  },
  data() {
    return {
      
      modals: {
        login: false, 
        reserva: false, 
        cadastro_vaga: false,
        cadastro_user: false
      },
      form: {
        user_id: '',
        password: ''
      },
      cadastro: {
        id: '',
        nome: '',
        saldo: ''
      },
      cadastro_vaga: {
        id: '',
        endereco: '',
        valor: '',
      
      },
      dados_vaga: [],
      dados: [],
      motorista: [],
      vagas: [],
      errors: [],
      filters: {
        priceRange: [2, 10],
        
      },
      products: [
        {
          image: 'img/vaga1.jpg',
        },
        {
          image: 'img/vaga2.jpg',
        },
        {
          image: 'img/vaga3.jpg',
        },
        {
          image: 'img/vaga4.jpg',
        },
        {
          image: 'img/vaga5.jpg',
        },
        {
          image: 'img/vaga6.jpeg',
        }]
    }
  },
  created() {
      // axios.get('http://localhost:3000/api/org.spotale.model.Motorista')
      // .then(response => {
      // this.motoristas = response.data
      // this.valor = response.data.valor
      // console.log(response.data);

      // })
      // .catch(e => {
      // this.errors.push(e)
      // })
      axios.get('http://localhost:3000/api/org.spotale.model.Vaga')
      .then(response => {
      this.vagas = response.data
      // console.log(response.data);

      })
      .catch(e => {
      this.errors.push(e)
      })
    }, 
    methods: {
      entrar: function(event){
        var form = { 
          user_id: this.form.user_id,
          password: this.form.vaga_id
        }
        console.log(form);
        axios.get('http://localhost:3000/api/org.spotale.model.Motorista/'+form.user_id)
        .then(response => {
        this.motorista = response.data
        console.log(response.data);
        this.id_motorista = response.data.motoristaId
        })
        .catch(e => {
        this.errors.push(e)
        })
        axios.get('http://localhost:3000/api/org.spotale.model.Vaga/'+form.password)
        .then(response => {
        this.dados_vaga = response.data
        console.log(response.data);
        this.id_vaga = response.data.vagaId
        })
        .catch(e => {
        this.errors.push(e)
        })
      }, 
      cadastrar: function (event) {
        axios.post('http://localhost:3000/api/org.spotale.model.Motorista', {
          motoristaId: this.cadastro.id,
          nome: this.cadastro.nome, 
          saldo: this.cadastro.saldo
        })
      },
      cadastrar_vaga: function (event) {
        axios.post('http://localhost:3000/api/org.spotale.model.Vaga', {
          vagaId: this.cadastro_vaga.id,
          locatario: 'org.spotale.model.Motorista#admin', 
          endereco: this.cadastro_vaga.endereco,
          valor: this.cadastro_vaga.valor,
          disponivel: 'true',
          paraAluguel: 'true'
        })
      }, 
      realizar_reserva: function (event) {
        axios.post('http://localhost:3000/api/org.spotale.model.CheckIn', {
          motorista: 'org.spotale.model.Motorista#'+this.id_motorista,
          vaga: 'org.spotale.model.Vaga#'+this.id_vaga,
          timestamp: Date.now(),
          transactionId: ''
        })
      }

  }


}
