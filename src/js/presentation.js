import { Card, Button, InfoSection, FormGroupInput, Checkbox, Collapse, CollapseItem, Slider } from '@/components';
import { Carousel, CarouselItem, Tooltip } from 'element-ui'
import axios from 'axios';
import Router from "vue-router";


export default {
  name: 'ecommerce-page',
  bodyClass: 'ecommerce-page',
  components: {
    Card,
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
      vagas: [],
      endereco: '',
      valor: '',
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
        axios.get('http://localhost:3000/api/Vaga')
        .then(response => {
        this.endereco = response.data.information
        this.valor = response.data.valor
        console.log(response.data);

        })
        .catch(e => {
        this.errors.push(e)
        })
        axios.get('http://localhost:3000/api/Vaga')
        .then(response => {
        this.vagas = response.data
        console.log(response.data);

        })
        .catch(e => {
        this.errors.push(e)
        })
    }, 


}