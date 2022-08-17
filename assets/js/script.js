const Modal = document.getElementById('fluent__modal')
const Close = document.getElementById('close')

function ShowModal() {
    Modal.style.display = "inline"
}

function CloseModal() {
    Modal.style.display = "none"
}

const Input = document.getElementById("stepper-input")

function stepper(btn) {
    let id = btn.getAttribute("id")
    let min = Input.getAttribute("min")
    let max = Input.getAttribute("max")
    let step = Input.getAttribute("step")
    let val = Input.getAttribute("value")
    let CalcStep = (id == "increment") ? (step * 1) : (step * -1)
    let newValue = parseInt(val) + CalcStep

    if(newValue >= min && newValue <= max) {
        Input.setAttribute("value", newValue)
    }
}

const SecondInput = document.getElementById("second__stepper-input")

function secondstepper(btn) {
    let id = btn.getAttribute("id")
    let min = SecondInput.getAttribute("min")
    let max = SecondInput.getAttribute("max")
    let step = SecondInput.getAttribute("step")
    let val = SecondInput.getAttribute("value")
    let CalcStep = (id == "increment") ? (step * 1) : (step * -1)
    let newValue = parseInt(val) + CalcStep

    if(newValue >= min && newValue <= max) {
        SecondInput.setAttribute("value", newValue)
    }
}