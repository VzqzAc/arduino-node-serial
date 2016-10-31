boolean led;
String a;

void setup() {
  Serial.begin(9600);
  a = "";
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
  led = false;
}

void loop() {
  a = Serial.readString();
  if(a.equals("led")) {
    digitalWrite(LED_BUILTIN, toggleLed());
    Serial.println(a);
    delay(1500);
  }

}

boolean toggleLed() {
  led = !led;
  return led;
}
