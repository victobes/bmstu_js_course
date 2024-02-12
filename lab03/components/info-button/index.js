export class InfoButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("info-button").addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
            <button id="info-button" class="btn btn-primary" style="margin:auto" type="button">Ознакомиться</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}