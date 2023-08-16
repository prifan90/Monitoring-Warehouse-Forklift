var dataIntPath = 'state';
var dataIntPath1 = 'state2'; // box 5
var dataIntPath2 = 'state4'; // box 4
var dataIntPath3 = 'state3'; // box 2
var dataIntPath4 = 'state5'; // box 6
var dataIntPath5 = 'state1'; // box 3
var dataIntPath6 = 'state6';

// Get a database reference 
const databaseInt = database.ref(dataIntPath);
const databaseInt1 = database.ref(dataIntPath1);
const databaseInt2 = database.ref(dataIntPath2);
const databaseInt3 = database.ref(dataIntPath3);
const databaseInt4 = database.ref(dataIntPath4);
const databaseInt5 = database.ref(dataIntPath5);
const databaseInt6 = database.ref(dataIntPath6);

// Variables to save database current values
var intReading; //box 1
var intReading1; //box 3
var intReading2; //box 5
var intReading3; //box 6
var intReading4; //box 4
var intReading5; //box 2
var intReading6; //box input

var radioButtons = document.querySelectorAll('input[type="radio"][name="radio-group"]');
const moveCarAnimation = document.querySelector('.gambar-ketiga');

// Menambahkan event listener untuk setiap radio button
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    // Mendapatkan nilai data-value dari radio button yang dipilih
    var selectedValue = this.getAttribute('data-value');
    console.log('Nilai yang dipilih:', selectedValue);

    // Mendapatkan nama radio button yang dipilih
    var selectedRadio = this.getAttribute('name');
    console.log('Nama radio button yang dipilih:', selectedRadio);

    // Mengirim nilai ke Firebase Realtime Database
    sendValueToFirebase(selectedRadio, selectedValue);
  });
});

// Fungsi untuk mengirim nilai ke Firebase Realtime Database
function sendValueToFirebase(radioName, value) {
  // Mendapatkan referensi database
  var databaseRef = firebase.database().ref().child(radioName);

  // Mengirim nilai ke Firebase Realtime Database
  databaseRef.set(value)
    .then(function() {
      console.log('Berhasil mengirim nilai ke Firebase Realtime Database');
    })
    .catch(function(error) {
      console.log('Gagal mengirim nilai ke Firebase Realtime Database: ' + error);
    });
}

var statusRef = firebase.database().ref('status');

// Menggunakan event listener untuk mendengarkan perubahan pada data "status"
statusRef.on('value', function(snapshot) {
  // Mendapatkan nilai teks dari snapshot
  var statusValue = snapshot.val();

  // Memperbarui teks di elemen HTML dengan kelas "status"
  $('.status').text(statusValue);
});

//Irsensor
databaseInt.on('value', (snapshot) => {
    intReading = snapshot.val();
    console.log(intReading);
    
    // Set the text of the span element with id 'reading-int' based on the value of intReading
    const readingIntElement = document.getElementById("reading-int");
  
    // Set the background color of the box based on the value of intReading
    if (intReading == 0) {
      document.querySelector('.box1').style.backgroundColor = 'blue';
    } else {
      document.querySelector('.box1').style.backgroundColor = 'red';
    }
    
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
});

//Irsensor1
databaseInt1.on('value', (snapshot) => {
    intReading1 = snapshot.val();
    console.log(intReading1);
    
    // Set the text of the span element with id 'reading-int' based on the value of intReading
    const readingIntElement1 = document.getElementById("reading-int1");
  
    // Set the background color of the box based on the value of intReading
    if (intReading1 == 0) {
      document.querySelector('.box3').style.backgroundColor = 'blue';
    } else {
      document.querySelector('.box3').style.backgroundColor = 'red';
    }
    
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
});

//Irsensor2
databaseInt2.on('value', (snapshot) => {
  intReading2 = snapshot.val();
  console.log(intReading2);
  
  // Set the text of the span element with id 'reading-int' based on the value of intReading
  const readingIntElement2 = document.getElementById("reading-int2");

  // Set the background color of the box based on the value of intReading
  if (intReading2 == 0) {
    document.querySelector('.box5').style.backgroundColor = 'blue';
  } else {
    document.querySelector('.box5').style.backgroundColor = 'red';
  }
  
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

//Irsensor3
databaseInt3.on('value', (snapshot) => {
  intReading3 = snapshot.val();
  console.log(intReading3);
  
  // Set the text of the span element with id 'reading-int' based on the value of intReading
  const readingIntElement3 = document.getElementById("reading-int3");

  // Set the background color of the box based on the value of intReading
  if (intReading3 == 0) {
    document.querySelector('.box6').style.backgroundColor = 'blue';
  } else {
    document.querySelector('.box6').style.backgroundColor = 'red';
  }
  
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

//Irsensor4
databaseInt4.on('value', (snapshot) => {
  intReading4 = snapshot.val();
  console.log(intReading4);
  
  // Set the text of the span element with id 'reading-int' based on the value of intReading
  const readingIntElement4 = document.getElementById("reading-int4");

  // Set the background color of the box based on the value of intReading
  if (intReading4 == 0) {
    document.querySelector('.box4').style.backgroundColor = 'blue';
  } else {
    document.querySelector('.box4').style.backgroundColor = 'red';
  }
  
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

//Irsensor5
databaseInt5.on('value', (snapshot) => {
  intReading5 = snapshot.val();
  console.log(intReading5);
  
  // Set the text of the span element with id 'reading-int' based on the value of intReading
  const readingIntElement5 = document.getElementById("reading-int5");

  // Set the background color of the box based on the value of intReading
  if (intReading5 == 0) {
    document.querySelector('.box2').style.backgroundColor = 'blue';
  } else {
    document.querySelector('.box2').style.backgroundColor = 'red';
  }
  
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

//Irsensor6
databaseInt6.on('value', (snapshot) => {
  intReading6 = snapshot.val();
  console.log(intReading6);
  
  // Set the text of the span element with id 'reading-int' based on the value of intReading
  const readingIntElement6 = document.getElementById("reading-int6");

  // Set the background color of the box based on the value of intReading
  if (intReading6 == 0) {
    document.querySelector('.box11').style.backgroundColor = 'blue';
  } else {
    document.querySelector('.box11').style.backgroundColor = 'red';
  }
  
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

function tampilkanGambar(posisi) {
  const gambarContainer = document.getElementById("gambarContainer");

  if (posisi === 1) {
    // Jika nilai posisi adalah 1, tambahkan elemen gambar ke dalam div
    const gambar1 = document.createElement("img");
    gambar1.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan
    gambar1.alt = "Forklift";
    gambar1.classList.add("gambar-1");
    gambarContainer.appendChild(gambar1);

    // Hapus gambar dengan class "gambar-0", "gambar-2", "gambar-3", dan "gambar-4" jika ada
    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 0) {
    // Jika nilai posisi adalah 0, tambahkan elemen gambar ke dalam div
    const gambar0 = document.createElement("img");
    gambar0.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 0
    gambar0.alt = "Forklift";
    gambar0.classList.add("gambar-0");
    gambarContainer.appendChild(gambar0);

    // Hapus gambar dengan class "gambar-1", "gambar-2", "gambar-3", dan "gambar-4" jika ada
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 2) {
    // Jika nilai posisi adalah 2, tambahkan elemen gambar ke dalam div
    const gambar2 = document.createElement("img");
    gambar2.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 2
    gambar2.alt = "Forklift";
    gambar2.classList.add("gambar-2");
    gambarContainer.appendChild(gambar2);

    // Hapus gambar dengan class "gambar-0", "gambar-1", "gambar-3", dan "gambar-4" jika ada
    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 3) {
    // Jika nilai posisi adalah 3, tambahkan elemen gambar ke dalam div
    const gambar3 = document.createElement("img");
    gambar3.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 3
    gambar3.alt = "Forklift";
    gambar3.classList.add("gambar-3");
    gambarContainer.appendChild(gambar3);

    // Hapus gambar dengan class "gambar-0", "gambar-1", "gambar-2", dan "gambar-4" jika ada
    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 4) {
    // Jika nilai posisi adalah 4, tambahkan elemen gambar ke dalam div
    const gambar4 = document.createElement("img");
    gambar4.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 4
    gambar4.alt = "Forklift";
    gambar4.classList.add("gambar-4");
    gambarContainer.appendChild(gambar4);

    // Hapus gambar dengan class "gambar-0", "gambar-1", "gambar-2", dan "gambar-3" jika ada
    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 5) {
    // Jika nilai posisi adalah 5, tambahkan elemen gambar ke dalam div
    const gambar5 = document.createElement("img");
    gambar5.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 5
    gambar5.alt = "Forklift";
    gambar5.classList.add("gambar-5");
    gambarContainer.appendChild(gambar5);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 6) {
    const gambar6 = document.createElement("img");
    gambar6.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 6
    gambar6.alt = "Forklift";
    gambar6.classList.add("gambar-6");
    gambarContainer.appendChild(gambar6);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 7) {
    const gambar7 = document.createElement("img");
    gambar7.src = "Forklift.png";
    gambar7.alt = "Forklift";
    gambar7.classList.add("gambar-7");
    gambarContainer.appendChild(gambar7);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 8) {
    const gambar8 = document.createElement("img");
    gambar8.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 8
    gambar8.alt = "Forklift";
    gambar8.classList.add("gambar-8");
    gambarContainer.appendChild(gambar8);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 9) {
    const gambar9 = document.createElement("img");
    gambar9.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 9
    gambar9.alt = "Forklift";
    gambar9.classList.add("gambar-9");
    gambarContainer.appendChild(gambar9);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 10) {
    const gambar10 = document.createElement("img");
    gambar10.src = "Forklift.png"; // Ganti dengan URL gambar yang ingin Anda tampilkan untuk posisi = 10
    gambar10.alt = "Forklift";
    gambar10.classList.add("gambar-10");
    gambarContainer.appendChild(gambar10);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 11) {
    const gambar11 = document.createElement("img");
    gambar11.src = "Forklift.png";
    gambar11.alt = "Forklift";
    gambar11.classList.add("gambar-11");
    gambarContainer.appendChild(gambar11);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 12) {
    const gambar12 = document.createElement("img");
    gambar12.src = "Forklift.png";
    gambar12.alt = "Forklift";
    gambar12.classList.add("gambar-12");
    gambarContainer.appendChild(gambar12);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 13) {
    const gambar13 = document.createElement("img");
    gambar13.src = "Forklift.png";
    gambar13.alt = "Forklift";
    gambar13.classList.add("gambar-13");
    gambarContainer.appendChild(gambar13);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar14 = document.querySelector(".gambar-14");
    if (gambar14) {
      gambar14.remove();
    }
  } else if (posisi === 14) {
    const gambar14 = document.createElement("img");
    gambar14.src = "Forklift.png";
    gambar14.alt = "Forklift";
    gambar14.classList.add("gambar-14");
    gambarContainer.appendChild(gambar14);

    const gambar0 = document.querySelector(".gambar-0");
    if (gambar0) {
      gambar0.remove();
    }
    const gambar1 = document.querySelector(".gambar-1");
    if (gambar1) {
      gambar1.remove();
    }
    const gambar2 = document.querySelector(".gambar-2");
    if (gambar2) {
      gambar2.remove();
    }
    const gambar3 = document.querySelector(".gambar-3");
    if (gambar3) {
      gambar3.remove();
    }
    const gambar4 = document.querySelector(".gambar-4");
    if (gambar4) {
      gambar4.remove();
    }
    const gambar5 = document.querySelector(".gambar-5");
    if (gambar5) {
      gambar5.remove();
    }
    const gambar6 = document.querySelector(".gambar-6");
    if (gambar6) {
      gambar6.remove();
    }
    const gambar7 = document.querySelector(".gambar-7");
    if (gambar7) {
      gambar7.remove();
    }
    const gambar8 = document.querySelector(".gambar-8");
    if (gambar8) {
      gambar8.remove();
    }
    const gambar9 = document.querySelector(".gambar-9");
    if (gambar9) {
      gambar9.remove();
    }
    const gambar10 = document.querySelector(".gambar-10");
    if (gambar10) {
      gambar10.remove();
    }
    const gambar11 = document.querySelector(".gambar-11");
    if (gambar11) {
      gambar11.remove();
    }
    const gambar12 = document.querySelector(".gambar-12");
    if (gambar12) {
      gambar12.remove();
    }
    const gambar13 = document.querySelector(".gambar-13");
    if (gambar13) {
      gambar13.remove();
    }
  } else {
    // Jika nilai posisi bukan 1, 0, 2, 3, atau 4, hapus semua elemen di dalam gambarContainer
    gambarContainer.innerHTML = "";
  }
}

// Mendapatkan referensi ke nilai /Posisi di Firebase
const posisiRef = database.ref("/Posisi");

// Memantau perubahan pada nilai /Posisi
posisiRef.on("value", (snapshot) => {
  const posisi = snapshot.val();
  tampilkanGambar(posisi); // Panggil fungsi tampilkanGambar() dengan nilai posisi
});