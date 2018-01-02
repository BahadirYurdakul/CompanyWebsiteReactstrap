import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Container} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import PaginationComponent from "../components/PaginationComponent";
import AuthorAndDateInfo from "../components/AuthorAndDateInfo";
import module from '../api/ArticleAPI';

class ArticlesPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dateAndAuthor: []
        };
    }

    async componentDidMount() {
        let data = await module.getArticles(0);
        let date = data[0].date;
        let author = data[0].author;
        let photoLink = data[0].photoLink;
        let htmlContent = data[0].content;
        let content = <div dangerouslySetInnerHTML={{ __html:htmlContent}}/>;
        this.setState({ data });
        this.setState({ date });
        this.setState({ author });
        this.setState({ photoLink });
        this.setState({content});
    }

    render() {
        let link = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Cate_Blanchett_2011.jpg';
        return (
            <div style={{backgroundColor:"#F2F1F0",minWidth:"800px"}}>
                <Container className="col-lg">
                    <div style={{border:"2px solid black", marginBottom:"10px"}}>
                    <table border="0px">
                        <tbody>
                        <tr>
                            <td style={{verticalAlign:"top", borderRight:"2px solid black"}}>
                                <List data={this.state.data}/>
                            </td>
                            <td style={{width:"100%", minWidth:"300px"}}>
                                <CompanyInfoCard photoLink={this.state.photoLink} content={this.state.content}/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{borderTop:"2px solid black", borderRight:"2px solid black"}}><PaginationComponent/></td>
                            <td>
                                <AuthorAndDateInfo date={this.state.date} author={this.state.author}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ArticlesPage;