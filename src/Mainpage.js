import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Form } from './MyForm';
import { Listall } from './Tempvalues'

export let Mainpage = () => {

    const [createpage, setCreatepage] = useState(false);

    const [tempvalues, setTempvalues] = useState([]);

    useEffect(() => {
        // alert("WELCOME")
        setTempvalues(Listall);
    })

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
                                    {
                                        tempvalues.map(
                                            (element, index) =>
                                                <>
                                                    <tr>
                                                        <td>{element.studentname}</td>
                                                        <td>{element.studentage}</td>
                                                        <td>{element.studentplace}</td>
                                                        <td>{element.studentemail}</td>
                                                        <td>{element.pinnumber}</td>
                                                    </tr>
                                                </>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>

            }
        </>
    )
}