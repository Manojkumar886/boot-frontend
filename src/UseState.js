import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export const Firsthook = () => {

    let [choconame, setChoconame] = useState("");

    function setter(temp) {
        setChoconame(temp.target.value)
    }

    function getter() {
        alert(" your favoriate chocolate name is :" + choconame)
    }
    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-5'>
                    <input
                        onChange={setter}
                        className='form-control'
                        placeholder='enter your favoriate choco name'
                    />
                    <button className='btn btn-outline-warning mt-4'
                        onClick={getter}>Click Me!</button>
                </div>
            </div>
        </>
    );
}