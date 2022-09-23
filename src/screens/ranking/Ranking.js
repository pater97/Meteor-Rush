import './ranking.css'
import { useEffect,useState } from 'react'

function Ranking() {

    const [value,setValue] = useState(false)

    let users = []

    useEffect(() => {
        users = JSON.parse(localStorage.getItem("users"))
        console.log(users)
        setValue(true)
        console.log(value)
    }, []);

    // componentDidMount(){
    //     let state = this.state
    //     state.users = JSON.parse(localStorage.getItem("users"))
    //     this.setState(state)
    //     // console.log(this.users)
    // }

    return (
        <div id="rank">
            <div>
                prova
            </div>
            <div>
                {
                    value &&
                    users.forEach(element => {
                        return (
                            console.log(element)
                            // <span>{element.name}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ranking