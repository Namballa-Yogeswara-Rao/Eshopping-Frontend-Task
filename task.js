function selectTheme(el, theme) {
    document.querySelectorAll('.theme-card').forEach(card => {
      card.classList.remove('selected');
      const btn = card.querySelector('button');
      btn.classList.remove('btn-checkmark');
      btn.classList.add('btn-outline-primary');
      btn.innerHTML = 'Apply';
    });

    el.classList.add('selected');
    const button = el.querySelector('button');
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-checkmark');
    button.innerHTML = '✔';

    sessionStorage.setItem('selectedTheme', theme);
    document.getElementById('nextTheme').disabled = false;
  }

  function saveCategory(e) {
    e.preventDefault();
    const data = {
      type: document.getElementById('productType').value,
      category: document.getElementById('category').value,
      subcategory: document.getElementById('subcategory').value
    };
    sessionStorage.setItem('productCategory', JSON.stringify(data));
    goToStep(3);
  }

  function toggleSKU(checkbox) {
    document.getElementById('skuCode').disabled = !checkbox.checked;
  }

  function saveProduct(e) {
    e.preventDefault();
    const product = {
      name: document.getElementById('productName').value,
      description: document.getElementById('productDesc').value,
      sku: document.getElementById('skuCode').value
    };
    sessionStorage.setItem('productDetails', JSON.stringify(product));
    alert("Product saved in sessionStorage!");
  }

  function goToStep(stepNum) {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step' + stepNum).classList.remove('hidden');
  }

  function updatePreview() {
    const title = document.getElementById('productName').value;
    const desc = document.getElementById('productDesc').value;
    const net = document.getElementById('netPrice').value;
    const list = document.getElementById('listPrice').value;

    document.getElementById('previewTitle').textContent = title || 'Product Title';
    document.getElementById('previewDesc').textContent = desc || 'No description yet...';
    document.getElementById('previewNet').textContent = net ? `₹${net}` : '₹0';
    document.getElementById('previewList').textContent = list ? `₹${list}` : '';
  }

  function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('previewImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }