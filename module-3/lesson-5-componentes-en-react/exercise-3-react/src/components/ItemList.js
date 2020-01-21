// Bootstrap classes: badge, badge-info, text-muted
import React from 'react';
import Item from './Item';
import '../stylesheets/ItemList.css';



class ItemList extends React.Component {
    render() {
        const items = this.props.items;
        return (
            <ul className="item-list">{
                items
                    .filter(item => item.price < 10)
                    .map((item) =>
                        <li>
                            <Item
                                name={item.name}
                                description={item.description}
                                quantity={item.quantity}
                                category={item.category}
                                price={item.price}
                            />
                        </li>
                    )}</ul>
        );
    }
}




export default ItemList;
