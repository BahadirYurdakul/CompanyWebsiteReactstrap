import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Container} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import PaginationComponent from "../components/PaginationComponent";
import AuthorAndDateInfo from "../components/AuthorAndDateInfo";
import module from '../api/ArticleAPI';
import LoadError from "../components/Error";

class ArticlesPage extends Component {

    constructor(props) {
        super(props);
        this.articleListOnClick = this.articleListOnClick.bind(this);
        this.pageOnCLick = this.pageOnCLick.bind(this);
        this.setStatesByIndex = this.setStatesByIndex.bind(this);
        this.fetchAndSetArticles = this.fetchAndSetArticles.bind(this);

        this.state = {
            data: [],
            activePage: 1,
            articleIndex: 0,
            loadErr: false
        };
    }

    async componentDidMount() {
        this.fetchAndSetArticles(0, this.state.activePage);
    }

    setStatesByIndex(data, index, page){
        if(page < 1)
            page = 1;
        if(index < 0)
            index = 0;

        let htmlContent = data[index].content;
        let content = <div dangerouslySetInnerHTML={{ __html:htmlContent}}/>;
        this.setState(
            {
                date: data[index].date,
                author:  data[index].author,
                photoLink: data[index].photoLink,
                content: content,
                activePage: page,
                articleIndex: index,
            }
        );
    }

    articleListOnClick(index) {
        this.setStatesByIndex(this.state.data, index, this.state.activePage);
    }

    pageOnCLick(index) {
        if(this.state.activePage === index)
            return;
        this.fetchAndSetArticles(0, index);
    }

    async fetchAndSetArticles(articleIndex, page){
        let data = await module.getArticles(page - 1);
        if(data === undefined)
        {
            this.setState({loadErr:true});
            return;
        }

        if(data.length === 0)
            return;

        this.setState({data: data});
        this.setStatesByIndex(data, articleIndex, page);
    }

    render() {
        return (
            <div>
                {this.state.loadErr ? <LoadError/> :
                    <div id="pageMinWidthWrapper">
                        <Container className="col-lg-auto">
                            <div style={{border:"2px solid black", marginBottom:"10px"}}>
                                <table border="0px">
                                    <tbody>
                                    <tr>
                                        <td style={{verticalAlign:"top", borderRight:"2px solid black"}}>
                                            <List data={this.state.data} onClick={this.articleListOnClick}/>
                                        </td>
                                        <td style={{width:"100%", verticalAlign:"top", align:"center"}}>
                                            <CompanyInfoCard photoLink={this.state.photoLink} content={this.state.content}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{borderTop:"2px solid black", borderRight:"2px solid black"}}>
                                            <PaginationComponent onClick={this.pageOnCLick}
                                                                 activeIndex={this.state.activePage}
                                                                 startingIndex={1} endIndex={3}/>
                                        </td>
                                        <td>
                                            <AuthorAndDateInfo date={this.state.date} author={this.state.author}/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Container>
                    </div>
                }
             </div>
        );
    }
}

export default ArticlesPage;