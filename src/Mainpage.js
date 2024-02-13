import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Form } from './MyForm';
import { Fetchexact, Listall, Remove1 } from './Tempvalues'
import { Readpage } from './ReadPage';
import { Updatepage } from './Updatepage';

export let Mainpage = () => {

    const [createpage, setCreatepage] = useState(false);

    const [tempvalues, setTempvalues] = useState([]);

    const [readpage, setReadpage] = useState(false);

    const [position, setPosition] = useState(0)

    const [updatepage, setUpdatepage] = useState(false);

    const [obj, setObj] = useState([])

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
                    (readpage) ?
                        <>
                            <Readpage who={position} />
                            <button
                                className='btn btn-outline-secondary'
                                onClick={
                                    () => {
                                        setReadpage(false)
                                    }
                                }>
                                BACK
                            </button>
                        </>
                        :
                        (updatepage) ?
                            <>
                                <Updatepage who={position} mention={obj} />
                                <button onClick={() => {
                                    setUpdatepage(false);
                                }}>
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
                                                <th>ACTIONS</th>
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
                                                                <td>
                                                                    <button
                                                                        onClick={() => {
                                                                            setReadpage(true);
                                                                            // position 
                                                                            setPosition(index)
                                                                        }}>READ</button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setUpdatepage(true);
                                                                            setPosition(index);
                                                                            setObj(Fetchexact(element.studentname))
                                                                        }}>UPDATE</button>
                                                                    <button
                                                                        onClick={
                                                                            () => {

                                                                                setTempvalues(Remove1(index));
                                                                            }
                                                                        }
                                                                    > DELETE</button>
                                                                </td>
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