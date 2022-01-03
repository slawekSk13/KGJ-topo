import { ButtonsGroup } from "../components/ButtonsGroup/ButtonsGroup"
import { AddNewBoulder } from "../components/AddNewBoulder/AddNewBoulder"
import { buttonsArray } from "../utilities/constants"

export const Home = () => {
    return (<>
        <ButtonsGroup buttonsArray={buttonsArray} />
        <AddNewBoulder/>
        </>)
}