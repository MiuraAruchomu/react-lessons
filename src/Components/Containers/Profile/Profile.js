import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useInput } from "../../../CustomHooks/useInput"
import { SET_NAME } from "../../../Store/Profile/actionTypes"
import { selectName } from "../../../Store/Profile/selectors"

export const Profile = () => {
    const name = useSelector(selectName)
    const dispatch = useDispatch()
    const { value, handleChange, reset } = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: SET_NAME,
            payload: value
        })
        reset()
    }

    return (
        <>
            <h3>Profile of {name}</h3>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange} />
                <button onClick={handleSubmit}>Save name</button>
            </form>
        </>
    )
}