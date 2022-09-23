import './ranking.css'
import { useEffect, useState } from 'react'

function Ranking() {

    const [value, setValue] = useState(false)
    const [users, setUsers] = useState([])

    let name = []
    let score = []

    useEffect(() => {
        let users = JSON.parse(localStorage.getItem("users"))
        setUsers(users)
        setValue(true)

        for (let i = 0; i < users.length; i++) {
            score.push(users[i]["score"])
            name.push(users[i]["name"])
        }

        for (let i = 0; i < score.length; i++) {
            for (let j = 0; j < (score.length - i - 1); j++) {

                if (score[j] > score[j + 1]) {

                    let temp = score[j]
                    score[j] = score[j + 1]
                    score[j + 1] = temp
                    temp = name[j]
                    name[j] = name[j + 1]
                    name[j + 1] = temp

                }
            }
        }

        name = name.reverse()
        score = score.reverse()

        for (let i = 0; i < users.length; i++){
            users[i] = {
                "name": name[i], "score": score[i]
            }
        }

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