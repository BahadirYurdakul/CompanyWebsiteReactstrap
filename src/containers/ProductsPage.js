import React, { Component } from "react";
import ProductsCard from "../components/ProductsCard";
import PaginationComponent from "../components/PaginationComponent";
import {Container} from "reactstrap";
import module from "../api/ArticleAPI";
import LoadError from "../components/Error";


const products = [
    {
        src: 'http://www.gimtas.com.tr/web/fla/buyuk/10reduktor_ve_disliler/reduktor.jpg',
        name: "Product 1",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://www.germaksan.com.tr/dosyalar/images/CCM2.jpg',
        //caption: 'Slide 2',
        name: "Product 2",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://www.demirmetal.com/upload/kategori_resim/20120324_5347.jpg',
        name: "Product 3",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://i.bosscdn.com/product/eb/14/ee/ceea4ef224636406dc9e43842e.jpg',
        name: "Product 4",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://www.khd.com/tl_files/images/products/grinding-technology/grinding' +
        '/roller-presses-cement/rollerpress-enci-02.jpg',
        name: "Product 5",
        //caption: 'Slide 2',
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    },
    {
        src: 'http://tr.btcncmachiningpart.com/uploads/201714756/p201707141006304507927.jpg',
        name: "Product 6",
        info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. ' +
        'Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. '+
        'Vivamus pretium ornare est.'
    }
];


class Main extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            loadErr: false
        };
    }

    async componentDidMount() {
        //
    }

    onClick(index) {
        alert(index);
    }


    render() {
        return (
            <div>
                {this.state.loadErr ? <LoadError/> :
                <div style={{backgroundColor:"#F2F1F0", height:"100%", minWidth: "800px"}}>
                    <div>
                            <ProductsCard products={products}/>
                    </div>
                    <Container>
                             <PaginationComponent onClick={this.onClick} activeIndex={1} startingIndex={1} endIndex={3}/>
                    </Container>
                </div>}
            </div>
        );
    }
}

export default Main;