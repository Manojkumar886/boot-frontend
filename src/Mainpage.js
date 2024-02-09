import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Form } from './MyForm';


export let Mainpage = () => {

    const [createpage, setCreatepage] = useState(false);

    const [tempvalue, setTempvalues] = useState({});


    return (
        <>
            {
                (createpage) ?
                    <>
                        <Form />
                        <button
                            className='btn btn-outline-secondary'
                            onClick={
                                () => {
                                    setCreatepage(false)
                                }
                            }>
                            BACK
                        </button>
                    </>
                    :
                    <>
                        <button
                            className='btn btn-outline-success mt-5 ms-5'
                            onClick={
                                () => {
                                    setCreatepage(true)
                                }
                            }>
                            REGISTER
                        </button>
                        <div className='container mt-5'>
                            <table className='table table-striped table-bordered'>
                                <thead>
                                    <tr>
                                        <th>StudentNAME</th>
                                        <th>StudentAGE</th>
                                        <th>StudentPLACE</th>
                                        <th>StudentMAILID</th>
                                        <th>PIN CODE</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </>

            }
        </>
    )
}