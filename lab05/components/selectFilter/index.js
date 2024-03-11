export class selectFilterComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return (
            `
            <select id="filter" class="custom-select custom-select-lg mb-3">
                <option >all</option>
                <option>important</option>
                <option>unanswered</option>
                <option>unread</option>
            </select>
            `
        )
    }

    setSelectedItem(currentValue) {
        document.getElementById("filter").value = currentValue
    }

    getFilterText() {
        const e = document.getElementById("filter");
        const text = e.options[e.selectedIndex].text;
        return text;
    }

    addListeners(listener) {
        document
            .getElementById("filter")
            .addEventListener("change", listener)
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}