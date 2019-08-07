import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate (prevProps, prevState){
      console.log('prevProps',prevProps);
      console.log('prevState',prevState);
      if (prevProps.counter.value !== this.props.counter.value){
        //Ajax call and get new data from the server
      }
    }

    componentWillUnmount(){
      console.log('Counter-Unmount');
    }
   // state= {
   //     value: this.props.counter.value,
       
        //imageUrl: 'https://s3-eu-central-1.amazonaws.com/salla-cdn/mZstc9peax41CrFwDcQodxVNp2mgHhLRDmgiPoJV.'
    //};
   
    //styles={
     //   fontSize:30,
       // fontWeight:'bold',
    //};
    //renderTags(){
     //   if (this.state.tags.length ===0 )return <p>There are no tage</p>;
        
     //   return (
      //   <ul> 
      //   {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
      //  </ul>);
    //}
  //  constructor (){
    //    super();
      //  this.handleIncrement = this.handleIncrement.bind(this);
   // }
   //handleIncrement= () => {

        //console.log("Increment Clicked",this );
        //console.log(product);  
   ///   this.setState({value: this.state.value +1 });
//};
  
    render() { 
      console.log('Counter-Rendered');
        //console.log('props',this.props);

       // console.log(this.props);
        return (
        <div>
       
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
        onClick={() => this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm"
        >increment</button>

        <button
        onClick={() => this.props.onDelete(this.props.counter.id) } 
        className="btn btn-danger btn-sm m-2"
        >Delete</button>
        </div>
        );

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
          return classes;
    }
    formatCount(){
     const {value} =this.props.counter;
     // const x =<h1>zero</h1> ;
       //return count===0?'zero': count;
       return value === 0 ? <h1>zero</h1> : value;
    }
    }

    export default Counter;

    
   
    //img src={this.state.imageUrl} alt=""
    //style= {{fontSize:30}} ===>> in span
     //badge badge-warning m-2
   // formatCount(){
       // const {count} =this.state;
        //const x =<h1>zero</h1> ;
      // return count===0?'zero': count;
        //return count === 0 ? <h1>zero</h1> : count;
   // }
//}
 
//return (
  //  <div>
     //   {this.state.tags.length === 0 && 'Please create a new tag!!!'    }
     //  {this.renderTags()}
  //  </div>);

  // <h4>{this.props.id}</h4>

  //() => this.handleIncrement({id:1})