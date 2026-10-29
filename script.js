const profilePhotoButton = document.querySelector(".profile-photo-button");
const profileDialog = document.querySelector(".profile-dialog");
const profileDialogClose = document.querySelector(".profile-dialog-close");

if (profilePhotoButton && profileDialog && profileDialogClose) {
  profilePhotoButton.addEventListener("click", () => {
    profileDialog.showModal();
  });

  profileDialogClose.addEventListener("click", () => {
    profileDialog.close();
  });

  profileDialog.addEventListener("click", (event) => {
    if (event.target === profileDialog) {
      profileDialog.close();
    }
  });
}
