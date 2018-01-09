import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class PaginationComponent extends React.Component {
    render() {
        const { onClick, activeIndex, startingIndex, endIndex } = this.props;
        let PaginationItemGroup = [];

        if(startingIndex > 0)
        {
            PaginationItemGroup.push (
                <PaginationItem>
                    <a onClick={() => onClick(startingIndex - 1)}>
                        <PaginationLink previous/>
                    </a>
                </PaginationItem>
            );
        }

        for (let i = startingIndex; i <= endIndex; i++) {
            let isActive = (activeIndex === i);
            PaginationItemGroup.push(
                <PaginationItem active={isActive}>
                    <a key={i} onClick={() => onClick(i)}>
                        <PaginationLink>{i}</PaginationLink>
                    </a>
                </PaginationItem>
            );
        }

        PaginationItemGroup.push (
            <PaginationItem>
                <a onClick={() => onClick(activeIndex + 1)}>
                    <PaginationLink next/>
                </a>
            </PaginationItem>
        );


        return (
            <div style={{margin:"5px"}}>
                <Pagination className="justify-content-center" size="lg">
                    {PaginationItemGroup}
                </Pagination>
            </div>
        );
    }
}