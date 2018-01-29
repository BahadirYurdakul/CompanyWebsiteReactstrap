import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Button, Container, Row} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import drill from "../images/carouselImages/drill.jpg";


const data = [
    {
        id: '1',
        title: "HAKKIMIZDA",
        src: drill,
        content:
            <div>
                <p>
                    2013 yılında İzmir’de kurulan CPM Mühendislik, Çimento, Maden, Demir Çelik, Seramik, Lastik
                    , Enerji (GES-RES-HES-Termik Santraller) sektörlerinde sunmuş olduğu “Sürdürülebilir Akılcı Çözümler”
                    ve periyodik kontroller ile işletmelerin verimliliğine fayda sağlamıştır.
                    “AKIŞKAN YÖNETİMİ” projeleri ile işletmelerin bakım ve enerji maliyetlerinde avantaj sağlanmıştır.
                </p>
                <p>
                    <h3>Faaliyet Alanlarımız</h3>
                    <ul>
                        <li>Çimento , Maden ve Seramik Tesisleri</li>
                        <li>Demir Çelik Tesisleri</li>
                        <li>Enerji Üretim Tesisleri</li>
                        <li>Lastik Endüstrisi</li>
                        <li>Çevre Tesisleri</li>
                    </ul>
                </p>
            </div>
    }
];


export default class CompanyPage extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            activeIndex: 0,
            content: data[0].content,
            photoLink: data[0].src
        };
    }

    onClick(index) {
        let content = data[index].content;
        let photoLink = data[index].src;
        this.setState({content});
        this.setState({photoLink});
    }

    render() {
        return (
            <div id="pageMinWidthWrapper">
                <Container className="col-lg-auto">
                        <table style={{minHeight:"500px", padding:"5px"}}>
                            <tbody>
                            <tr>
                                <td style={{verticalAlign:"top"}}>
                                    <List data={data} onClick={this.onClick}/>
                                </td>
                                <td style={{width:"100%"}}>
                                    <CompanyInfoCard photoLink={this.state.photoLink} content={this.state.content}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                </Container>
            </div>
        );
    }
}