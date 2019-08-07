import React, { Component } from 'react';
import Counter from '../Componant/Counter';


class  Counters extends Component  {

    render() { 
        console.log('Counters-Rendered')
        const {onReset, counter,onDelete,onIncrement}= this.props;
        return ( <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">
            Reset</button>

            { this.props.counters.map(counter => 
            <Counter 
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}>
            </Counter>)}
        </div> );
    }
}
 
export default Counters;


//value={counter.value}
     //        id={counter.id}>