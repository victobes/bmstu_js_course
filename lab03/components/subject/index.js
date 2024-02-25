export class SubjectComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div>
            <img src=${data.src} class="d-block w-100" style="height: 600px; width: 900px" alt="test2">
            <h1>${data.title}</h1>
            <p>${data.description}</h1>
            </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}