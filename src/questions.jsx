import { Button } from "@mui/base";
import { Checkbox } from "@mui/material"
import toast from "react-hot-toast"

function Questions  (questions) {
    const answers = questions.questions
    console.log(answers)

    function getStatusA() {
         toast.dismiss();
        let a = "a"
        
        if (a === answers[answers.length - 1]) {

            toast.success("Giusta!");
        } else {
            toast.error("Sbagliata!")
        }
    }
    function getStatusB() {
         toast.dismiss();
         let b = "b"
        if (b === answers[answers.length - 1]) {
           
            toast.success("Giusta!");
        } else {
            toast.error("Sbagliata!")
        }
    }
    function getStatusC() {
      toast.dismiss();
       let c = "c"
        if (c == answers[answers.length - 1]) {
            
            toast.success("Giusta!");
        } else {
            toast.error("Sbagliata!")
        }
    }

    return (
        <>
            <div>
                
                <h3>
                    <Button onClick={getStatusA}>
                        {answers[1]}
                    </Button>
                </h3>
                <h3>
                    <Button onClick={getStatusB}>
                        {answers[2]}
                    </Button>
                </h3>
                <h3>
                    <Button onClick={getStatusC}>
                        {answers[3]}
                    </Button>
                </h3>
            </div>
        </>
    )
            
}


export default Questions