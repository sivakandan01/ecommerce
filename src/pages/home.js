import { useSelector } from "react-redux"

let Home = () => {
    let { userData } = useSelector((state) => state.user)
    return(
        <div>
            <p>{userData.userName}</p>
        </div>
    )
}

export { Home }