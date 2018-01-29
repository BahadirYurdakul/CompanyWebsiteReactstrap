import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
//Carousel Fotoğrafları
import drill from "../images/carouselImages/drill.jpg";
import drillMilling from "../images/carouselImages/drillMilling.jpg";
import CarouselPhoto2 from "../images/carouselImages/HPIM1893.JPG";
import CarouselPhoto3 from "../images/carouselImages/IMG_8359.JPG";
import CarouselPhoto4 from "../images/carouselImages/IMG_0524.JPG";
import CarouselPhoto5 from "../images/carouselImages/HPIM1468.JPG";
//Makine Fotoğrafları
import acikDisli from "../images/makineFotoğrafları/Açık dişli.png";
import degirmen from "../images/makineFotoğrafları/Değirmen.jpg";
import donerFirin from "../images/makineFotoğrafları/Döner Fırın.png";
import reduktorDisli from "../images/makineFotoğrafları/redüktör-dişli kutusu.png";
import rollerPress from "../images/makineFotoğrafları/roller press.png";
import surekliDokum from "../images/makineFotoğrafları/sürekli döküm.png";

import {Container} from "reactstrap";
import ProductsHrCaption from "../components/ProductsHrCaption";

const itemList = [
    {
        src: drill,
        altText: 'Slide 1',
        info:  '2013 yılında İzmir’de kurulan CPM Mühendislik; Çimento, Maden, Demir Çelik, Seramik, Lastik' +
        ', Enerji (GES-RES-HES-Termik Santraller) sektörlerinde sunmuş olduğu “Sürdürülebilir Akılcı Çözümler” ' +
        've periyodik kontroller ile işletmelerin verimliliğine fayda sağlamıştır. ' +
        '“AKIŞKAN YÖNETİMİ” projeleri ile işletmelerin bakım ve enerji maliyetlerinde avantaj sağlanmıştır.'
    },
    {
        src: CarouselPhoto2,
        altText: 'Slide 2',
        //caption: 'Slide 2',
        info: 'Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa...'
    },
    {
        src: CarouselPhoto3,
        altText: 'Slide 3',
        //caption: 'Slide 3',
        info: 'Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa...'
    },
    {
        src: CarouselPhoto4,
        altText: 'Slide 4',
        //caption: 'Slide 4',
        info: 'Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa...'
    },
    {
        src: CarouselPhoto5,
        altText: 'Slide 5',
        info:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        src: drillMilling,
        altText: 'Slide 6',
        info: 'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam...'
    }
];

const cardList = [
    {
        src: acikDisli,
        title: "Açık Dişli",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: degirmen,
        title: "Değirmen",
        //caption: 'Slide 2',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: donerFirin,
        title: "Döner Fırın",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: reduktorDisli,
        title: "Redüktör Dişli",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: rollerPress,
        title: "Roller-Press",
        //caption: 'Slide 2',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: surekliDokum,
        title: "Sürekli Döküm",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    }
];


class Main extends Component {
    render() {
        return (
            <div id="pageMinWidthWrapper">
                <Container className="col-9">
                    <Carousel items={itemList}/>
                </Container>
                <ProductsHrCaption caption="Hizmetlerimiz"/>
                <CardComponent cardItems={cardList}/>
            </div>
        );
    }
}

export default Main;