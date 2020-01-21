import React from 'react';
import RandomCat from './RandomCat';
import RandomCatDummy from './RandomCatDummy';


class CatList extends React.Component {

    render() {
        /*aqui pongo las constantes que no son props y no vienen de RandomCats*/
        const width = 400;
        const height = 200;
        return (
            <section className="section-cats">
                <h1>All Cats Are Beautiful</h1>
                <ul className="section-cats_list">
                    <li>
                        <RandomCat width="200" height="200" />
                        <RandomCatDummy width="100" height="100" />
                    </li>
                    <li>
                        <RandomCat width="200" height="400" />
                    </li>
                    <li>
                        <RandomCat width={width} height={height} />
                    </li>
                </ul>
            </section>
        );
    }
}


export default CatList;