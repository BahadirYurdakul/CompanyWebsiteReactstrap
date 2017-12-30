import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Container} from "reactstrap";
import UrunlerimizBaslik from "../components/UrunlerimizBaslik";

const itemList = [
    {
        src: 'https://static.pexels.com/photos/51320/drill-milling-milling-machine-drilling-51320.jpeg',
        altText: 'Slide 1',
        info:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        src: 'http://www.inovamuhendislik.com.tr/tr/assets/style/image/makina-page-banner.jpg',
        altText: 'Slide 2',
        //caption: 'Slide 2',
        info: 'Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa...'
    },
    {
        src: 'http://www.turkseker.gov.tr/images/AnkaraMakine2.gif',
        altText: 'Slide 3',
        info: 'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam...'
    }
];

const cardList = [
    {
        src: 'http://www.mergenmakine.com.tr/images/products/pvc-extruder.jpg',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'https://makinecim.com/cp/pictures/2017/08/14/370962/i_' +
        'GIDA.URUNLERI.KAPAK.UZERI.EMNIYET.GARANTI.BANDI.AMBALAJ.MAKINESI_1_1502696089.jpg',
        //caption: 'Slide 2',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://www.demirmetal.com/upload/kategori_resim/20120324_5347.jpg',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://i.bosscdn.com/product/eb/14/ee/ceea4ef224636406dc9e43842e.jpg',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://www.khd.com/tl_files/images/products/grinding-technology/grinding' +
        '/roller-presses-cement/rollerpress-enci-02.jpg',
        //caption: 'Slide 2',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://tr.btcncmachiningpart.com/uploads/201714756/p201707141006304507927.jpg',
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
            <div style={{backgroundColor:"#F2F1F0", marginBottom:"10px"}}>
                <Container className="col-9">
                    <Carousel items={itemList}/>
                </Container>
                <UrunlerimizBaslik/>
                <CardComponent cardItems={cardList}/>
            </div>
        );
    }
}

export default Main;