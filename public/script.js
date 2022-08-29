const target = document.getElementById("data");

const fragment = new DocumentFragment();

fetch("/api/data")
  .then((data) => data.json())
  .then((data) => {
    console.log(data, "data");
    fragment.append(
      ...data.map((data) => {
        const root = document.createElement("article");
        root.innerHTML = `<p>id: ${data.id}</p><p>contents: ${data.contents}</p>`;
        // const id = document.createElement("p");
        // id.innerText = data.id;
        // const contents = document.createElement("p");
        // contents.innerText = data.contents;
        // root.append(id, contents);
        return root;
      })
    );
  })
  .then(() => {
    console.log(fragment, "fragment");
    target.appendChild(fragment);
  });
