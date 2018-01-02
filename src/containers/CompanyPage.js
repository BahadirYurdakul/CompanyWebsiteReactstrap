import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Button, Container, Row} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";


const data = [
    {
        id: '1',
        title: "Hakkımızda",
        src: "http://3.bp.blogspot.com/-wdaB8coBOYs/Vi_pZE7tKiI/AAAAAAAAcYk/fZTEdlWn_sY/s1600/fabrika.jpg",
        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>" +
        "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>" +
        "<p>Proin accumsan enim nec mi euismod vestibulum. Donec ornare nisi nisi, nec pellentesque nunc consequat ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tempor felis sit amet ex rhoncus scelerisque. Nam vel laoreet risus. Praesent tortor ex, mollis eget sodales eget, convallis sit amet nisi. Aliquam egestas et felis interdum scelerisque. Donec erat enim, vehicula et mauris a, posuere tincidunt lectus. Donec risus arcu, pellentesque ac risus vel, rhoncus tempor sem.</p>"
    },
    {
        id: '2',
        src: "http://3.bp.blogspot.com/-wdaB8coBOYs/Vi_pZE7tKiI/AAAAAAAAcYk/fZTEdlWn_sY/s1600/fabrika.jpg",
        title: "Referanslar",
        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>" +
        "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>" +
        "<p>Proin accumsan enim nec mi euismod vestibulum. Donec ornare nisi nisi, nec pellentesque nunc consequat ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tempor felis sit amet ex rhoncus scelerisque. Nam vel laoreet risus. Praesent tortor ex, mollis eget sodales eget, convallis sit amet nisi. Aliquam egestas et felis interdum scelerisque. Donec erat enim, vehicula et mauris a, posuere tincidunt lectus. Donec risus arcu, pellentesque ac risus vel, rhoncus tempor sem.</p>"
    },
    {
        id: '3',
        src: "http://3.bp.blogspot.com/-wdaB8coBOYs/Vi_pZE7tKiI/AAAAAAAAcYk/fZTEdlWn_sY/s1600/fabr",
        title: "Misyon Vizyon",
        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>" +
        "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>"
    }
];


export default class CompanyPage extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            activeIndex: 0,
            content: <div dangerouslySetInnerHTML={{ __html:data[0].content}}/>,
            photoLink: data[0].src
        };
    }

    onClick(index) {
        alert(index);
        let content = <div dangerouslySetInnerHTML={{ __html:data[index].content}}/>;
        let photoLink = data[index].src;
        this.setState({content});
        this.setState({photoLink});
    }

    render() {
        return (
            <div style={{backgroundColor:"#F2F1F0", minWidth: "800px"}}>
                <Container className="col-lg">
                        <table border="2px solid black">
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