import React from 'react';
import {Button} from "reactstrap";

export default class OrderTable extends React.Component {
    constructor(props) {
        super(props);
        this.cancelOrderClicked = this.cancelOrderClicked.bind(this);

    }

    cancelOrderClicked() {
        this.forceUpdate();
    }


    render() {
        const { orderList } = this.props;
        let cancelOrderButton;
        const orders = orderList.map((item) => {
            if(item.cancelOrder === "true")
            {
                cancelOrderButton = (<Button className="danger" disabled="true">Kaldır</Button>);
            }else {
                cancelOrderButton = (<Button className="success" disabled="true">Bu sipariş silinemez.</Button>);
            }

            return (
                    <tr>
                        <td>{item.orderNo}</td>
                        <td>{item.productName}</td>
                        <td>{item.status}</td>
                        <td>{cancelOrderButton}</td>
                    </tr>
            );
        });
        return (
            <div style={{marginTop:"5%", marginBottom:"5%"}}>
                <table class="table" border="2px">
                        <tr style={{border:"2px solid black"}}>
                            <th>Sipariş Numarası</th>
                            <th>Ürün Adı</th>
                            <th>Durum</th>
                            <th>İptal Et</th>
                        </tr>
                        {orders}
                </table>
            </div>
        );
    }
}
