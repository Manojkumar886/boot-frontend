import { useState } from 'react';

export let OperatorTernary = () => {

    const [inputvalue, setInputvalue] = useState("");

    function setter(temp) {
        setInputvalue(temp.target.value);
    }

    const [cssstyle, setCssstyle] = useState(
        {
            backgroundColor: 'black',
            color: 'white'
        }
    )
    // ternary Operator
    function Action() {
        inputvalue == "red" ?
            setCssstyle({ backgroundColor: 'red', color: 'yellow' }) :
            inputvalue == "yellow" ?
                setCssstyle({ backgroundColor: 'yellow' }) :
                inputvalue == "seagreen" ?
                    setCssstyle({ backgroundColor: 'seagreen' }) :

                    setCssstyle({ backgroundColor: 'brown' })

        setDisplay(inputvalue);
    }


    const [display, setDisplay] = useState("");
    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-5'>
                    <input
                        onChange={setter}
                        className='form-control'
                        placeholder='enter your favoriate color'
                    />
                    <button className='btn btn-outline-warning mt-4'
                        onClick={Action}
                    >Click Me!</button>

                    <p style={cssstyle}>
                        LDB is an advanced container tracking software in India and international that provides online logistics of movement of inland shipment of goods.One tracking system to manage all shipments. Container Tracking system allows you to determine current position of containers on the World Map.
                    </p>
                </div>
            </div>
        </>
    )
}