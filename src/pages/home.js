import { useSelector } from "react-redux"

let Home = () => {
    let { userData } = useSelector((state) => state.user)
    let { token } = useSelector((state) => state.auth)

    return(
        <div>
            <p>{userData.userName}</p>
            <p>{token}</p>
        </div>
    )
}

export { Home }