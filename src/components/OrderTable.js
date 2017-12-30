import React from 'react';
import {Container, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default class OrderTable extends React.Component {
    constructor(props) {
        super(props);
        this.cancelOrderClicked = this.cancelOrderClicked.bind(this);

    }

    cancelOrderClicked() {
        this.loginModal.toggle();
        window.sessionStorage.setItem("username", "BAHADIR");
        this.forceUpdate();
    }


    render() {
        const { orderList } = this.props;

        const orders = orderList.map((item) => {
            return (
                <tr>
                    <td>Order No</td>
                    <td>{item.orderNo}</td>
                </tr>
            );
        });
        return (
            <div style={{margin:"10px", borderTop:"2px groove", borderBottom:""}}>
                <table class="table">
                    <tbody>
                        {orders}
                    </tbody>
                </table>
            </div>
        );
    }
}
