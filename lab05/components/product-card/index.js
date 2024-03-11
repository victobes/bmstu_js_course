export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const peerIds = `${data.conversation.peer.id},${data.conversation.chat_settings.owner_id}`;
        console.log(data.conversation.peer.local_id)
        return (
            `
            <div class="card" style="width: 300px;">
                <img class="card-img-top" src="${data.conversation.chat_settings.photo.photo_200}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${data.conversation.chat_settings.title} </h5>
                    <button class="btn btn-primary" id="click-card-${data.conversation.peer.local_id}" data-id="${peerIds}">Подробнее</button>
                </div>
            </div>
        `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.conversation.peer.local_id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}