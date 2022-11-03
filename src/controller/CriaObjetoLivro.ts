import GuiaFrontEnd from '../../assets/img/Guia Front-end.png'
import ApacheKafka from '../../assets/img/ApacheKafka.png'
import javascript from '../../assets/img/Javascript.png'
import Lideranca from '../../assets/img/Liderança.png'

export interface livro {
    titulo: string,
    src:string,
    descricao: string
}
const Livro: Array<livro>=[
    {titulo: 'Guia Front End',
        src: GuiaFrontEnd,
        descricao: 'O melhor e mais completo guia de font-end do mercado do zero ao pro.'
    },
    {titulo: 'ApacheKafka',
        src: ApacheKafka,
        descricao: 'O melhor e mais completo guia de ApacheKafka do mercado do zero ao pro.'
    },
    {titulo: 'javascript',
        src: javascript,
        descricao: 'O melhor e mais completo guia de javascript do mercado do zero ao pro.'
    },
    {titulo: 'Lideranca',
        src: Lideranca,
        descricao: 'O melhor e mais completo guia de Lideranca do mercado do zero ao pro.'
    }
]
