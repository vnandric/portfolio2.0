import type { NextPage } from "next/types";
import { type Dispatch, type SetStateAction, useEffect } from "react";

type props = {
    showAlert: boolean;
    setShowAlert: Dispatch<SetStateAction<boolean>>;
    message: string;

}
const Alert:NextPage<props> = (props) => {

    useEffect(()=>{
        if(props.showAlert == false) return;
        setTimeout(() => {
            props.setShowAlert(false);
        }, 3000);
    },[props]

    )
    if(props.showAlert != true) return <></>;
    return (
        <div className="fixed bottom-0 right-0 m-5 w-52 alert alert-success shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{props.message}</span>
            </div>
        </div>
    )
    }

export default Alert;