import React from 'react';
import {Button, Container} from "reactstrap";

const AccountInfoTable = ({userInfo, username}) => (
    <div style={{margin:"10px", borderTop:"2px groove", borderBottom:""}}>
        <table class="table">
            <tbody>
                <tr>
                    <td>Ad Soyad</td>
                    <td>{userInfo.name}</td>
                </tr>
                <tr>
                    <td>Kullanıcı Adı</td>
                    <td>{username}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{userInfo.email}</td>
                </tr>
                <tr>
                    <td>Telefon</td>
                    <td>{userInfo.telephone}</td>
                </tr>
                <tr>
                    <td>Şirket Adı</td>
                    <td>{userInfo.companyName}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{userInfo.address}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default AccountInfoTable;
