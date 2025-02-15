const form = document.getElementById('cardForm');
const previewCard = document.getElementById('preview-card');
const selectedImage = document.getElementById('selected-image');
const cardText = document.getElementById('card-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const userName = document.getElementById('userName').value.trim();
  const selectedDesign = document.querySelector('input[name="card-design"]:checked');

  if (!userName || !selectedDesign) {
    showAlert('الرجاء إدخال الاسم واختيار تصميم البطاقة', 'error');
    return;
  }

  showPreview(userName, selectedDesign);
});

function showPreview(name, design) {
  selectedImage.src = design.parentElement.querySelector('img').src;
  cardText.textContent = `${userName} تقبل الله طاعتكم وكل عام وأنتم بخير`;
  previewCard.hidden = false;
  form.hidden = true;
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function resetForm() {
  form.reset();
  previewCard.hidden = true;
  form.hidden = false;
  document.querySelectorAll('input[name="card-design"]').forEach(radio => {
    radio.checked = false;
  });
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function showAlert(message, type) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert-${type}`;
  alertDiv.textContent = message;
  
  document.body.prepend(alertDiv);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}document.getElementById('cardForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const userName = document.getElementById('userName').value;
  const selectedImage = document.querySelector('input[name="card-design"]:checked').nextElementSibling.src;
  const textColor = document.querySelector('input[name="text-color"]:checked').value;

  document.getElementById('cardForm').hidden = true;
  document.getElementById('preview-card').hidden = false;
  
  document.getElementById('selected-image').src = selectedImage;
  const cardText = document.getElementById('card-text');
  cardText.style.color = textColor;
});
function downloadCard() {
  html2canvas(document.querySelector("#preview-card"), {
    allowTaint: true,
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `ramadan-card.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

document.getElementById('cardForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const userName = document.getElementById('userName').value;
  const selectedImage = document.querySelector('input[name="card-design"]:checked').nextElementSibling.src;
  const textColor = document.querySelector('input[name="text-color"]:checked').value;

  document.getElementById('cardForm').hidden = true;
  document.getElementById('preview-card').hidden = false;
  
  const cardImage = document.getElementById('selected-image');
  const cardText = document.getElementById('card-text');
  
  cardImage.onload = function() {
    const fontSize = Math.min(cardImage.width * 0.08, 30);
    cardText.style.fontSize = `${fontSize}px`;
  }
  
  cardImage.src = selectedImage;
  cardText.textContent = `${userName}  تقبل الله طاعتكم وكل عام وأنتم بخير رمـضـان كريم`;
  cardText.style.color = textColor;
});
function downloadCard() {
  const previewCard = document.getElementById('preview-card');
  
  previewCard.classList.add('hide-buttons');
  
  html2canvas(document.querySelector("#card-content"), {
    useCORS: true,
    allowTaint: false,
    scale: 2, // زيادة الدقة
    logging: false
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'ramadan-card.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
    
    previewCard.classList.remove('hide-buttons');
  });
}
function downloadCard() {
  const controls = document.querySelector('.controls');
  controls.style.display = 'none';

  html2canvas(document.querySelector("#card-content"), {
    useCORS: true,
    allowTaint: false,
    scale: 2, 
    logging: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'ramadan-card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    controls.style.display = 'block';
  });
}

document.getElementById('cardForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const userName = document.getElementById('userName').value;
  const selectedImage = document.querySelector('input[name="card-design"]:checked').nextElementSibling.src;
  const textColor = document.querySelector('input[name="text-color"]:checked').value;

  document.getElementById('cardForm').hidden = true;
  document.getElementById('preview-card').hidden = false;

  const cardImage = document.getElementById('selected-image');
  const textContainer = document.getElementById('text-container');
  
  cardImage.onload = function() {
    // إنشاء العنصر النصي داخل الحاوية
    textContainer.innerHTML = `
      <p class="tek" id="card-text" style="color: ${textColor}"> إلى        ${userName}<br> 
      تقبل الله طاعتكم وكل عام وأنتم بخير و رمـضـان كريم</p>
    `;
  }
  
  cardImage.src = selectedImage;
});
