import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

import './external.css'
// functional components

export function Orderlist() {

    let mycss = {
        backgroundColor: 'yellow'
    }
    return (
        <>
            <ol style={{
                backgroundColor: 'red',
                color: 'white'
            }}>
                Web Techologies
                <li>Html</li>
                <li style={mycss}>Css</li>
                <li>Bootstrap</li>
            </ol>
        </>
    )
}

export let Table = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>serial no</th>
                        <th>Name</th>
                        <th className="text-primary">Age</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

// Class Components



export class MyfirstClass extends React.Component {
    render() {
        return (
            <>
                <h1>Thank you(using class components)</h1>
            </>
        )
    }
}





// export {Orderlist ,Table};