import { Button } from "@mui/base";

import toast from "react-hot-toast"

function Questions  (questions) {
    const answers = questions.questions

    function getStatus(res) {
        if (res === answers.Column5) {
            toast.success("Giusta!");
        }
        else {
            toast.error("Sbagliata!");
        }
    }

    return (
        <>
            <div>
                
                <h3>
                    <Button onClick={()=>getStatus('a')}>
                        {answers.Column2}
                    </Button>
                </h3>
                <h3>
                    <Button onClick={()=>getStatus('b')}>
                        {answers.Column3}
                    </Button>
                </h3>
                <h3>
                    <Button onClick={()=>getStatus('c')}>
                        {answers.Column4}
                    </Button>
                </h3>
            </div>
        </>
    )
            
}


export default Questions