const target = document.getElementById("data");

const fragment = new DocumentFragment();

fetch("/api/data")
  .then((data) => data.json())
  .then((data) => {
    fragment.append(
      ...data.map((data) => {
        const root = document.createElement("article");
        root.innerHTML = `<p>id: ${data.id}</p><p>contents: ${data.contents}</p>`;
        return root;
      })
    );
  })
  .then(() => {
    target.appendChild(fragment);
  });
