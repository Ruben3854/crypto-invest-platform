import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const form = document.getElementById('investForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  try {
    await addDoc(collection(db, "investments"), {
      name,
      email,
      amount,
      created: serverTimestamp()
    });
    document.getElementById('status').innerText = "✅ Investment submitted!";
    form.reset();
  } catch (error) {
    document.getElementById('status').innerText = "❌ Error: " + error.message;
  }
});
