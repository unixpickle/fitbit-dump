import document from "document";

document.getElementById('open-button').onclick = () => {
  document.location.assign('./resources/subpage.view').then(() => {
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      document.history.back();
    });
  });
};
