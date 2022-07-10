class eyes extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div class="eyes">
                            <div class="left-eye-wrapper">
                                <div class="left-eye"></div>
                            </div>
                            <div class="left-wrinkle-top"></div>
                            <div class="left-wrinkle-bottom"></div>
                            <div class="left-eyebrow"></div>
                            <div class="right-eye-wrapper">
                                <div class="right-eye"></div>
                            </div>
                            <div class="right-wrinkle-top"></div> 
                            <div class="right-eyebrow"></div>
                            <div class="right-wrinkle-bottom"></div>   
                           </div>`
    }
}

window.customElements.define("gastly-eyes", eyes);