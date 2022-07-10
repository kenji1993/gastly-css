class mouth extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div class="mouth">
                            <div class="left-canine"></div>
                            <div class="right-canine"></div>
                          </div>`
    }

}

window.customElements.define("gastly-mouth", mouth);