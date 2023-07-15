function numberGuessingGame() {
    // 0 ile 100 arasında rastgele bir sayı seçilir ve randomNumber değişkenine atanır.
    const randomNumber = Math.floor(Math.random() * 101);
    // kullanıcının kaç denemede doğru tahmin yapacağını takip etmek için attempts değişkeni tanımlanır ve 0 olarak başlatılır.
    let attempts = 0;
    
    // Sonsuz bir döngü başlatılır.
    while (true) {
      // Kullanıcıdan tahmin girmesi istenir ve bu tahmin userGuess değişkenine atanır.
      const userGuess = parseInt(prompt("Guess a number between 0 and 100:"));
    
      // Kullanıcının girdiği değer bir sayı değilse (NaN), geçersiz bir sayı girdiği uyarısı verilir ve döngüye geri dönülür.
      if (isNaN(userGuess)) {
        alert("Please enter a valid number.");
        continue;
      }
      else{
          
      // Her tahminde deneme sayısı bir artırılır.
      attempts++;
    
      // Kullanıcının tahmini doğru ise (userGuess === randomNumber), tebrik mesajı gösterilir ve döngü sonlandırılır.
      if (userGuess === randomNumber) {
        alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        break;
      }
      // Kullanıcının tahmini doğru değilse, kullanıcıya daha yüksek veya daha düşük bir sayı girmesi gerektiği belirtilir ve döngü devam eder.
      else if (userGuess < randomNumber) {
        alert("Try a higher number.");
      } else {
        alert("Try a lower number.");
      }
      }
    }
  }
  
  // numberGuessingGame() fonksiyonu çağrılarak oyun başlatılır.
  numberGuessingGame();
  