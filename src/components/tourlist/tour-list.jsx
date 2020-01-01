import React, { Component } from 'react';
import Tour from '../tour/tour';
import './tour-list.scss';
import { tourData } from '../../data/tourData';

class TourList extends Component {
    state = {
        tours: tourData,
    }
    removeTour = id => {
        console.log(id);
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours,
        })
    }
    render() {
        //console.log(this.state.tours);

        const { tours } = this.state; //Data destructuring and pass to Tour component as tour={tour}
        //removeTour function is passsed as props to child component Tour in order to manipulate tours

        return (
            <section className="tourlist">
                {
                    tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>)
                }
            </section>
        );
    }
}

export default TourList;
