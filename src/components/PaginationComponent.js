import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class PaginationComponent extends React.Component {
    render() {
        const { link } = this.props;
        return (
            <div style={{margin:"5px"}}>
                <Pagination className="justify-content-center" size="lg">
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href={link + '1'}>
                                1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href={link + '2'}>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href={link + '3'}>
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next/>
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}