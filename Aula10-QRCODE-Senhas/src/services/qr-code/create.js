import prompt from "prompt"
import promptQRCode from "../../prompts/prompt-qrcode.js"
import handle from "./headle-qrCode.js"

const createQRCode = async () => {
    prompt.start()
    prompt.get(promptQRCode, handle)
}

export default createQRCode