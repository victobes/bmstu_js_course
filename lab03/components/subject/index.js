export class SubjectComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div>
            <h1>${data.id}</h1>
            </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}