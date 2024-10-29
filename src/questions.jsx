import { Button } from "@mui/base";

import toast from "react-hot-toast"

function Questions  (questions) {
    const answers = questions.questions

    function getStatus(res) {
        if (res === answers.RispostaEsatta) {
            toast.success("Giusta!");
        }
        else {
            toast.error("Sbagliata!");
        }
    }
   console.log(answers.RispostaA)

    return (
        <>
            <div>
                
                <h3>
                    <Button onClick={()=>getStatus('A')}>
                        {answers.RispostaA}
                    </Button>
                </h3>
                <h3>
                    <Button onClick={()=>getStatus('B')}>
                        {answers.RispostaB}
                    </Button>
                </h3>
                <h3>
                    <Button onClick={()=>getStatus('C')}>
                        {answers.RispostaC}
                    </Button>
                </h3>
            </div>
        </>
    )
            
}


export default Questions