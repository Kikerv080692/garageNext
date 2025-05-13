import { useState } from "react"
import PhoneForm from "../PhoneForm/PhoneForm"
import * as SC from './ButtonPhone.styled'
import Modal from "src@/components/Modal/Modal"


export default function ButtonPhone() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <>
        <SC.WrapperButton type="button" onClick={toggleModal}>
            АА
        </SC.WrapperButton>

        {isOpenModal && <Modal closeModal={toggleModal}><PhoneForm /></Modal>  }
        </>
        
    )
}