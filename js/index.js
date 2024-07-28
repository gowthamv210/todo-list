const inputListArray = [
  { name: "watch netflix", date: "2024-5-12" },
  {
    name: "complete react",
    date: "2024-12-2",
  },
];

ListRender();

function ListRender() {
  let listString = "";

  inputListArray.forEach((listObject, i) => {
    listString += `<div>${inputListArray[i].name}</div>
        <div>${inputListArray[i].date}</div>
        <button class="js-delete-btn delete-btn"
        >Delete</button>
        `;
  });

  $(".js-events").html(listString);

  $(".js-delete-btn").each((i, deleteObjEle) => {
    deleteObjEle.addEventListener("click", () => {
      inputListArray.splice(i, 1);
      ListRender();
    });
  });
}

$(".js-add-btn").click(() => {
  getInput();
});

function getInput() {
  const inputElementName = $(".js-input-name");
  const inputElementDate = $(".js-input-date");

  let name = inputElementName.val();
  let date = inputElementDate.val();

  inputListArray.push({
    name,
    date,
  });

  ListRender();

  inputElementName.val("");
  inputElementDate.val("");
}
