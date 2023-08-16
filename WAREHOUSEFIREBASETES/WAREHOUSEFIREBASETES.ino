#include <Arduino.h>
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "Prifan"
#define WIFI_PASSWORD "JUARASATU"

// Insert Firebase project API Key
#define API_KEY "AIzaSyDCKcubM_7ISfcYnD_0zHv8LCvzbSkMp_o"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://warehouse-4f94f-default-rtdb.asia-southeast1.firebasedatabase.app/"

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

#define irSensor 27
int state = 0;

#define irSensor1 26
int state1 = 0;

#define irSensor2 25
int state2 = 0;

#define irSensor3 33
int state3 = 0;

#define irSensor4 32
int state4 = 0;

#define irSensor5 22
int state5 = 0;

#define irSensor6 2
int state6 = 0;

int count = 0;
boolean status = true;

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback;  //see addons/TokenHelper.h

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  pinMode(irSensor, INPUT);
  pinMode(irSensor1, INPUT);
  pinMode(irSensor2, INPUT);
  pinMode(irSensor3, INPUT);
  pinMode(irSensor4, INPUT);
  pinMode(irSensor5, INPUT);
  pinMode(irSensor6, INPUT);
}

void loop() {
  state = digitalRead(irSensor);
  state1 = digitalRead(irSensor1);
  state2 = digitalRead(irSensor2);
  state3 = digitalRead(irSensor3);
  state4 = digitalRead(irSensor4);
  state5 = digitalRead(irSensor5);
  state6 = digitalRead(irSensor6);

  Serial.print("state: ");
  Serial.print(state);
  Serial.print(" -state1: ");
  Serial.print(state1);
  Serial.print(" -state2: ");
  Serial.print(state2);
  Serial.print(" -state3: ");
  Serial.print(state3);
  Serial.print(" -state4: ");
  Serial.print(state4);
  Serial.print(" -state5: ");
  Serial.print(state5);
  Serial.print(" -state6: ");
  Serial.println(state6);

  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 500 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    //Irsensor
    if (Firebase.RTDB.setInt(&fbdo, "state", state)) {
      Serial.println("PASSED");
    } else {
      Serial.println("FAILED");
    }

    //Irsensor1
    if (Firebase.RTDB.setInt(&fbdo, "state1", state1)) {
      Serial.println("PASSED2");
    } else {
      Serial.println("FAILED2");
    }

    //Irsensor2
    if (Firebase.RTDB.setInt(&fbdo, "state2", state2)) {
      Serial.println("PASSED3");
    } else {
      Serial.println("FAILED3");
    }

    //Irsensor3
    if (Firebase.RTDB.setInt(&fbdo, "state3", state3)) {
      Serial.println("PASSED4");
    } else {
      Serial.println("FAILED4");
    }

    //Irsensor4
    if (Firebase.RTDB.setInt(&fbdo, "state4", state4)) {
      Serial.println("PASSED5");
    } else {
      Serial.println("FAILED5");
    }

    //Irsensor5
    if (Firebase.RTDB.setInt(&fbdo, "state5", state5)) {
      Serial.println("PASSED6");
    } else {
      Serial.println("FAILED6");
    }

    //Irsensor6
    if (Firebase.RTDB.setInt(&fbdo, "state6", state6)) {
      Serial.println("PASSED7");
    } else {
      Serial.println("FAILED7");
    }

    // Mengirimkan string "Tes Komunikasi"
    String message = "Tes Komunikasi";
    if (Firebase.RTDB.setString(&fbdo, "message", message)) {
      Serial.println("Message sent successfully");
    } else {
      Serial.println("Failed to send message");
    }

    // Kirim nilai RSSI ke RTDB
    int rssi = WiFi.RSSI();
    if (Firebase.RTDB.setInt(&fbdo, "rssi", rssi)) {
      Serial.println("RSSI sent to RTDB");
    } else {
      Serial.println("Failed to send RSSI to RTDB");
    }
  }
}