
class Stone extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
                <style>
                    .stone {
                        background: rgb(11,19,20);
                        background: linear-gradient(355deg, rgba(11,19,20,1) 54%, rgba(32,35,36,1) 76%);
                            width: 30rem;
                            height: 50rem;
                            border-radius: 10rem 10rem 0 0;
                            z-index: 0;
                            }
                </style>
                <div class="stone"></div>`;
    }


}

window.customElements.define('tomb-stone', Stone);