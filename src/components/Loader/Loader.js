import { FallingLines } from "react-loader-spinner";
import { ModalWrapper } from "./Loader.styled";
export const Loader =()=>{
    return(
        <ModalWrapper>
            <FallingLines
            visible='true'
            height="80"
            width="80"
            ariaLabel="blocks-loading"  
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </ModalWrapper>
    );    
}