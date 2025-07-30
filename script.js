document.getElementById("imageForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const prompt = document.getElementById("prompt").value.trim();
  const imageContainer = document.getElementById("imageContainer");

  if (prompt === "") return;

  // Placeholder while loading
  imageContainer.innerHTML = "<p>جارٍ توليد الصورة... ⏳</p>";

  // ✅ ربط مستقبلي بخدمة ذكاء صناعي مثل DALL·E أو Stable Diffusion API
  setTimeout(() => {
    // مثال لصورة وهمية
    const fakeImageURL = "https://placekitten.com/600/400";
    imageContainer.innerHTML = `<img src="${fakeImageURL}" alt="Generated Image"/>`;
  }, 2000);
});
