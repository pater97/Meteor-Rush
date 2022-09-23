import './ranking.css'
import { useEffect, useState } from 'react'

function Ranking() {

    const [value, setValue] = useState(false)
    const [users, setUsers] = useState([])

    // let users = []

    useEffect(() => {
        let users = JSON.parse(localStorage.getItem("users"))
        setUsers(users)
        setValue(true)
    }, []);

    return (
        <div id="rank">
            <h1>Ranking</h1>
            <div className='container-ranking'>
                <div className='title'>
                    <span>USER</span>
                    <span>SCORE</span>
                </div>
                <div className='score'>
                    {
                        // value &&
                        users.map(element => {
                            return (
                                <div className='scoreMap'>
                                    <span>{element.name}</span>
                                    <span>{element.score}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Ranking