import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { TOGGLE_SHOW } from "../../Store/Profile/Actions"
import { store } from '../../Store/Profile/Store'

export const Profile = () => {
    const profileStateShow = useSelector((store) => store.show)
    const dispatch = useDispatch()

    const toggleShow = () => {
        dispatch({
            type: TOGGLE_SHOW
        })
    }

    return (
        <>
        <h3>Profile</h3>
        <input type="checkbox" checked={profileStateShow} value={profileStateShow} onChange={toggleShow} />
        </>
    )
}