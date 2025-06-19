export function loadInitialLayout() {
    const main = document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);

    const content = document.createElement("div");
    content.classList.add("content");
    main.appendChild(content);
}