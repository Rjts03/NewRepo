import React from 'react';

export default class Temp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.addressInput = React.createRef();
    }


    add = (num) => {
        this.setState({
            count: this.state.count + num
        })
    }

    placeOrder = () => {
        console.log('On click placeOrder')
        this.addressInput.current.getAddress()
    }


    render() {
        return (
            <div>
               <Temp1 ref={this.addressInput} />
                <button onClick={this.placeOrder} >Place ORder</button>
            </div>
        )
    }
}

class Temp1 extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            place: ''
        }
    }

    getAddress = () => {
        const  { place } = this.state;
        console.log(place)
        return place
    }
   
    render(){
        return(
            <div>
                <input value={this.state.place} onChange={(e)=>this.setState({place:e.target.value})} />
                Component Temp 1
            </div>
        )
    }
}

/*
 {this.state.count}
                <FunOn count={5} onAddFun={this.add} />
const FunOn = (props) => (
    <div>
        {console.log('Fun On Props', props)}
        <br />
        <br />
        Fun on Component
        <button onClick={() => props.onAddFun(props.count)} >
            Add One
        </button>
    </div>
)

*/